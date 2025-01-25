import React, { useEffect, useState } from 'react';
import avatarImage from '../styles/avatar.png';
import axios from 'axios';

function Profile({ user, setUser }) {
    const [customerData, setCustomerData] = useState(null); // Stan na dane klienta
    const [loading, setLoading] = useState(true); // Stan ładowania
    const [error, setError] = useState(null); // Stan błędu
    const [reservations, setReservations] = useState([]);
    const [showDialog, setShowDialog] = useState(false);



    useEffect(() => {
        const userName = JSON.parse(localStorage.getItem('userName'));

        if (!userName) {
            setError('Nie znaleziono użytkownika. Zaloguj się ponownie.');
            setLoading(false);
            return;
        }

        const fetchData = async () => {
            try {
                // Pobierz dane klienta
                const customerResponse = await axios.get(`http://localhost:5000/api/customers/${userName.id}`);
                setCustomerData(customerResponse.data);

                // Pobierz rezerwacje użytkownika
                const reservationsResponse = await axios.get(`http://localhost:5000/api/reservations/user/${userName.id}`);
                if (reservationsResponse.data.length === 0) {
                    // Brak rezerwacji - ustaw pustą tablicę, ale nie zgłaszaj błędu
                    setReservations([]);
                } else {
                    setReservations(reservationsResponse.data);
                }

                setLoading(false);
            } catch (err) {
                if (err.response && err.response.status === 404) {
                    // Brak rezerwacji - nie ustawiaj błędu, po prostu pusta tablica
                    setReservations([]);
                } else {
                    throw err; // Przekaż inne błędy dalej
                }
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return true;
    if (error) return <div>Błąd: {error}</div>;

    const updateReservationStatus = async (reservationId, newStatus, vehicleId) => {
        try {
          setLoading(true);
          await axios.put(`http://localhost:5000/api/reservations/${reservationId}`, { status: newStatus });
          // Po udanej zmianie statusu, odśwież dane rezerwacji
          if (newStatus === "Anulowane") {
            // Jeśli rezerwacja została anulowana, zmień status pojazdu na "available"
            await axios.put(`http://localhost:5000/api/vehicles/${vehicleId}`, { status: "available" });
        }
          
          window.location.reload();
          alert('Status rezerwacji został zmieniony!');
        } catch (err) {
          setError('Wystąpił błąd podczas zmiany statusu rezerwacji');
          console.error(err);
        } finally {
          setLoading(false);
        }
      };

      const handleDeleteAccount = async () => {
       
        try {
          setLoading(true);
          await axios.delete(`http://localhost:5000/api/customers/${customerData.id}`);
          alert('Konto zostało usunięte!');
          localStorage.removeItem('userName');
          setUser(null);
          window.location.href = '/';
        } catch (err) {
          setError('Wystąpił błąd podczas usuwania konta');
          console.error(err);
          setLoading(false);
        }
      }
    

return (
    <section>
        <div class="resizer">
            <div class="profileGrid">
                <div class="profileCard">
                    <div class="profileCardTop">
                        <img src={avatarImage} alt=""/>
                    </div>

                    <div class="profileCardBottom">
                        <div class="profileCardBottomTitle">
                            <div class="profileTitle">Witaj, {customerData.first_name}!</div>
                            <div class="profileSubtitle">Dobrze Cię znowu widzieć!</div>
                            <button>Zatwierdź zmiany w profilu</button>
                        </div>
                    </div>
                </div>

                <div class="profileAbout">
                    <div class="profileInfo">
                        <div class="prName"> <p>Imię i Nazwisko</p> </div>
                        <div class="ouName"> <p>{customerData.first_name} {customerData.last_name}</p> </div>
                        <div class="prBirthday"> <p>Data urodzenia</p> </div>
                        <div class="ouBirthday"> <p>{customerData.birthdate}</p> </div>
                        <div class="prPhone"> <p>Numer telefonu</p> </div>
                        <div class="ouPhone"> <p>{customerData.phone_number}</p> </div>
                        <div class="inPhone"> <input type="tel" name="" id=""/> </div>
                        <div class="prMail"> <p>Adres e-mail</p> </div>
                        <div class="ouMail"> <p>{customerData.email}</p> </div>
                        <div class="inMail"> <input type="email" name="" id=""/></div>
                        <div class="prLicense"> <p>Uprawnienia</p> </div>
                        <div class="inLicense"> 
                            <label class="cr-wrapper">
                                <input type="checkbox"/>
                                <div class="cr-input"></div> <span>A</span>
                            </label>
                            <label class="cr-wrapper">
                                <input type="checkbox"/>
                                <div class="cr-input"></div> <span>B</span>
                            </label>
                            <label class="cr-wrapper">
                                <input type="checkbox"/>
                                <div class="cr-input"></div> <span>C / C1</span>
                            </label>
                            <label class="cr-wrapper">
                                <input type="checkbox"/>
                                <div class="cr-input"></div> <span>D / D1</span>
                            </label>
                            <label class="cr-wrapper">
                                <input type="checkbox"/>
                                <div class="cr-input"></div> <span>T</span>
                            </label>
                        </div>
                      </div>
                </div>

                <div class="profileLoans">
                    <div class="titleHistory">
                        <div class="titleStatus">Status</div>
                        <div class="titleData">Data wynajmu</div>
                        <div class="titlePlace">Miejsce wynajmu</div>
                        <div class="titleVehicle">Pojazd</div>
                        <div class="titlePrice">Koszt</div>
                        <div class="titleAction">Akcja</div>
                    </div>

                    {reservations.length === 0 ? (
                        <p>Nie masz jeszcze żadnych rezerwacji.</p>
                    ) : (
                    reservations.map((reservation) => (
                    <div class="dataHistory">
                        <div class="dataStatus">
                            <div class="loanStatus"> {reservation.status} </div>
                        </div>
                        <div class="dataData">
                          <div class="dataDataFrom"> <p>{reservation.start_date} Dodać czas</p> </div>
                          <div class="dataDataTo"> <p>{reservation.end_date} Dodać czas</p> </div>
                        </div>
                        <div class="dataPlace">
                          <div class="dataPlaceFrom"> <p>{reservation.pickup_location}</p> </div>
                          <div class="dataPlaceTo"> <p>{reservation.return_location}</p> </div>
                        </div>
                        <div class="dataVehicle"> <p>{reservation.Vehicle.brand} {reservation.Vehicle.model}</p> </div>
                        <div class="dataPrice"> <p>{reservation.amount} PLN</p> </div>
                        <div class="dataAction"> <button onClick={() => updateReservationStatus(reservation.id, 'Anulowane', reservation.vehicle_id)}>Anuluj rezerwację</button> </div>
                    </div>
                    ))
                    )}
                </div>

                <div class="profileRemove">
                    <div class="changePassword">
                        <h4>Zmień hasło</h4>
                        <p>Wpisz hasło: </p>
                        <input type="password" name="" id=""/>
                        <p>Powtórz hasło: </p>
                        <input type="password" name="" id=""/>
                        <button>Zmień hasło</button>
                    </div>

                    <div class="removeAccount">
                        <h4>Usuń konto</h4>
                        <p>Twoje konto i dane osobowe zostaną usunięte z naszego systemu. Tej akcji nie można cofnąć.</p>
                        <button onClick={() => setShowDialog(true)}>Usuń konto</button>
                        {showDialog && (
                            <div className="dialog">
                                <p>Czy na pewno chcesz usunąć swoje konto? Tej akcji nie można cofnąć.</p>
                                <button onClick={handleDeleteAccount}>Tak, usuń</button>
                                <button onClick={() => setShowDialog(false)}>Anuluj</button>
                            </div>
                        )}
                    </div>
                </div>

              </div>
        </div>
    </section>
    );
}

export default Profile;