import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';


function Rent() {
    const { id } = useParams();;
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
  
    const PickupLocation = queryParams.get('pickupLocation') || '';
    const ReturnLocation = queryParams.get('returnLocation') || '';
    const PickupDate = queryParams.get('pickupDate') || '';
    const PickupTime = queryParams.get('pickupTime') || '';
    const ReturnDate = queryParams.get('returnDate') || '';
    const ReturnTime = queryParams.get('returnTime') || '';

    const [carData, setCarData] = useState([]); // Stan na dane auta

    
     
    // Przechowywanie danych w localStorage
const handleClickContinue = () => {
    localStorage.removeItem('reservationData'); // Usunięcie poprzednich danych rezerwacji
    const userData = JSON.parse(localStorage.getItem('userName'));
    console.log(userData);
    const reservationData = {
        customer_id: userData.id, // Możesz to pobrać z sesji użytkownika
        vehicle_id: carData.id,
        start_date: PickupDate,
        end_date: ReturnDate,
        pickup_time: PickupTime,
        return_time: ReturnTime,
        status: 'Zarezerwowane',
        pickup_location: PickupLocation,
        return_location: ReturnLocation,
        amount: totalPrice,
    };
    localStorage.setItem('reservationData', JSON.stringify(reservationData));
    // Przeniesienie na stronę płatności
    window.location.href = '/payment';
};  

    const getStreetForCity = (city) => {
        // Mapowanie miast na ulicę
        const cityToStreetMap = {
          "Katowice": "ul. Powstańców 43",
          "Kraków": "ul. Adama Mickiewicza 5",
          "Wrocław": "ul. Rdestowa 18."
        };
      
        return cityToStreetMap[city] || "";  // Zwróci "Nieznana ulica" jeśli nie znajdzie miasta
      };
      
        const pickupStreet = getStreetForCity(PickupLocation);
        const returnStreet = getStreetForCity(ReturnLocation);

        const pricePerDriver = 10; // Cena za dodatkowego kierowcę
        const babySeat0To1Price = 19, babySeat1To3Price = 19, babySeat3To12Price = 19, gpsPrice = 19;
     
            const [driversCount, setDriversCount] = useState(0); // Stan dla liczby dodatkowych kierowców
            const [babySeat0To1Count, setBabySeat0To1Count] = useState(0);
            const [babySeat1To3Count, setBabySeat1To3Count] = useState(0);
            const [babySeat3To12Count, setBabySeat3To12Count] = useState(0);
            const [gpsCount, setGpsCount] = useState(0);
            const [totalPrice, setTotalPrice] = useState(0);
            
          // Funkcja obsługująca zwiększanie liczby jednostek
        const increment = (count, setCount) => {
        setCount(count + 1);
        };
  
        // Funkcja obsługująca zmniejszanie liczby jednostek
        const decrement = (count, setCount) => {
            if (count > 0) {
            setCount(count - 1);
            }
        };
  
        // Funkcja obliczająca całkowitą cenę dla danego dodatku
        const calculateTotalPrice = (count, pricePerUnit) => {
            return count * pricePerUnit;
        };


              const calculateTotalPriceForAll = () => {
                let totalDriverPrice = calculateTotalPrice(driversCount, pricePerDriver)
                let totalBabySeat0To1Price = calculateTotalPrice(babySeat0To1Count, babySeat0To1Price)
                let totalBabySeat1To3Price = calculateTotalPrice(babySeat1To3Count, babySeat1To3Price)
                let totalBabySeat3To12Price = calculateTotalPrice(babySeat3To12Count, babySeat3To12Price)
                let totalGpsPrice = calculateTotalPrice(gpsCount, gpsPrice)
                const totalPrice = totalCarPrice + totalDriverPrice + totalBabySeat0To1Price +
                                   totalBabySeat1To3Price + totalBabySeat3To12Price + totalGpsPrice;
            
                return totalPrice;
              };

        const calculateRentalDays = (pickupDate, returnDate) => {
            const calculatedPickupDate = new Date(pickupDate);
            const calculatedReturnDate = new Date(returnDate);
            const timeDiff = calculatedReturnDate - calculatedPickupDate;
            const days = timeDiff / (1000 * 3600 * 24); // konwersja czasu na dni
            console.log(days);
            return days;
          };

          const rentalDays = calculateRentalDays(PickupDate, ReturnDate);
          const totalCarPrice = rentalDays * carData.daily_rate;

          useEffect(() => {
            const total = calculateTotalPriceForAll();
            setTotalPrice(total); // Aktualizujemy całkowitą cenę
          }, [totalCarPrice, driversCount, babySeat0To1Count, babySeat1To3Count, babySeat3To12Count, gpsCount]);
        
                
      

    useEffect(() => {
        // Funkcja do pobrania danych z API
        const fetchCarData = async () => {
            

        axios .get(`http://localhost:5000/api/vehicles/${id}`) // Zastąp odpowiednim URL swojego API
        .then((response) => {
        setCarData(response.data); // Ustawienie danych samochodów
     
  }, []);
        };

        fetchCarData();
    }, [id]); // Wykonaj ponownie, jeśli zmieni się id


    return (
    <section>
        <div class="resizer">
            <h1>Twoja oferta</h1>
            <h3>{carData.brand} {carData.model}</h3>
            <div id="carLoanPanel">
                <div id="aboutCarInfo">
                    <div class="aboutCarInfo carPhoto">
                        
                    </div>
                    <div class="aboutCarInfo carStats">
                        <h4 class="loanInfoHeading">Informacje o pojeździe</h4>
                        <ul class="aboutCarFeatures">
                            <li class="carStatsList seats">{carData.seats}</li>
                            <li class="carStatsList gearbox">{carData.transmission}</li>
                            <li class="carStatsList luggage">{carData.luggage_capacity}</li>
                            <li class="carStatsList doors">{carData.doors}</li>
                            <li class="carStatsList fuel">{carData.fuel_type}</li>
                            <li class="carStatsList location">{carData.localization}</li>
                        </ul>
                    </div>
                    <div class="aboutCarInfo loanIncluded">
                        <h4 class="loanInfoHeading">Wliczone w cenę</h4>
                        <ul>
                            <li class="carLoanIncluded">Bezpłatna rezygnacja do 48h</li>
                            <li class="carLoanIncluded">Ubezpieczenie od kradzieży</li>
                            <li class="carLoanIncluded">Ubezpieczenie AC</li>
                            <li class="carLoanIncluded">Kilometry bez limitu</li>
                        </ul>
                    </div>
                    <div class="aboutCarInfo loanAdditional">
                        <h4 class="loanInfoHeading">Dodaj produkty i usługi</h4>

                        <div class="additionalThing">
                            <h4 class="additionalHeading">Dodatkowy kierowca</h4>
                            <h6 class="additionalSubheading">10 PLN / doba</h6>
                            <div class="additionalButtons">
                                <button class="additionalButton" onClick={() => decrement(driversCount, setDriversCount)}>-</button>
                                <div class="additionalButton">{driversCount}</div>
                                <button class="additionalButton" onClick={() => increment(driversCount, setDriversCount)}>+</button>
                            </div>
                        </div>
                        <div class="additionalThing">
                            <h4 class="additionalHeading">Fotelik dla dziecka (0-1 lat)</h4>
                            <h6 class="additionalSubheading">19 PLN / doba</h6>
                            <div class="additionalButtons">
                                <button class="additionalButton" onClick={() => decrement(babySeat0To1Count, setBabySeat0To1Count)}>-</button>
                                <div class="additionalButton">{babySeat0To1Count}</div>
                                <button class="additionalButton" onClick={() => increment(babySeat0To1Count, setBabySeat0To1Count)}>+</button>
                            </div>
                        </div>
                        <div class="additionalThing">
                            <h4 class="additionalHeading">Fotelik dla dziecka (1-3 lat)</h4>
                            <h6 class="additionalSubheading">19 PLN / doba</h6>
                            <div class="additionalButtons">
                                <button class="additionalButton" onClick={() => decrement(babySeat1To3Count, setBabySeat1To3Count)}>-</button>
                                <div class="additionalButton">{babySeat1To3Count}</div>
                                <button class="additionalButton" onClick={() => increment(babySeat1To3Count, setBabySeat1To3Count)}>+</button>
                            </div>
                        </div>
                        <div class="additionalThing">
                            <h4 class="additionalHeading">Fotelik dla dziecka (3-12 lat)</h4>
                            <h6 class="additionalSubheading">19 PLN / doba</h6>
                            <div class="additionalButtons">
                                <button class="additionalButton" onClick={() => decrement(babySeat3To12Count, setBabySeat3To12Count)}>-</button>
                                <div class="additionalButton">{babySeat3To12Count}</div>
                                <button class="additionalButton" onClick={() => increment(babySeat3To12Count, setBabySeat3To12Count)}>+</button>
                            </div>
                        </div>
                        <div class="additionalThing">
                            <h4 class="additionalHeading">Zestaw GPS</h4>
                            <h6 class="additionalSubheading">19 PLN / doba</h6>
                            <div class="additionalButtons">
                                <button class="additionalButton" onClick={() => decrement(gpsCount, setGpsCount)}>-</button>
                                <div class="additionalButton">{gpsCount}</div>
                                <button class="additionalButton" onClick={() => increment(gpsCount, setGpsCount)}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="aboutLoanInfo">
                    <div id="aboutReturnInfo">
                        <h4 class="loanInfoHeading">Odbiór i zwrot</h4>
                        <p class="loanInfoDate">{PickupDate} {PickupTime}</p>
                        <p class="loanInfoPlace"><b>{PickupLocation}</b>, {pickupStreet}</p>
                        <br/>
                        <p class="loanInfoDate">{ReturnDate} {ReturnTime}</p>
                        <p class="loanInfoPlace"><b>{ReturnLocation}</b>, {returnStreet}</p>
                    </div>

                    <div id="loanPriceDetails">
                        <h4 class="loanInfoHeading">Szczegóły ceny pojazdu</h4>
                        <div class="loanPriceDesc loanBasic">Wynajem samochodu</div>
                        <div class="loanPriceCalc loanBasic">{totalCarPrice} PLN</div>
                        <div class="loanPriceDesc additionalDriver">Dodatkowy kierowca</div>
                        <div class="loanPriceCalc additionalDriver">{calculateTotalPrice(driversCount, pricePerDriver)} PLN</div>
                        <div class="loanPriceDesc additionalBabySeat">Fotelik dla dziecka (0-1 lat)</div>
                        <div class="loanPriceCalc additionalBabySeat">{calculateTotalPrice(babySeat0To1Count, babySeat0To1Price)} PLN</div>
                        <div class="loanPriceDesc additionalChildSeat">Fotelik dla dziecka (1-3 lat)</div>
                        <div class="loanPriceCalc additionalChildSeat">{calculateTotalPrice(babySeat1To3Count, babySeat1To3Price)} PLN</div>
                        <div class="loanPriceDesc additionalYoungSeat">Fotelik dla dziecka (3-12 lat)</div>
                        <div class="loanPriceCalc additionalYoungSeat">{calculateTotalPrice(babySeat3To12Count, babySeat3To12Price)} PLN</div>
                        <div class="loanPriceDesc additionalGPS">Zestaw GPS</div>
                        <div class="loanPriceCalc additionalGPS">{calculateTotalPrice(gpsCount, gpsPrice)} PLN</div>
                        <hr/>
                        <div class="loanPriceDesc finalPrice">Cena za {rentalDays} dni:</div>
                        <div class="loanPriceCalc finalPrice">{totalPrice} PLN</div>
                    </div>

                    <button class="finishLoanButton" onClick={handleClickContinue}><b> Kontynuuj, aby zarezerwować </b></button>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Rent;