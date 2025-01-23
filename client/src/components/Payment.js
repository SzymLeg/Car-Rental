import React, { useState } from 'react';
import blikImage from '../styles/BLIK.png';
import axios from 'axios';

function Payment() {
    const isLoggedIn = localStorage.getItem('authToken') !== null; // Sprawdź, czy token istnieje
    
    const [blikCode, setBlikCode] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handlePayment = async () => {
        const reservationData = JSON.parse(localStorage.getItem('reservationData'));
        
        // Użytkownik wprowadza dane do płatności (np. Blik)
        const paymentDetails = {
            payment_method: 'blik',
            payment_status: 'successful',
            amount: reservationData.amount,
            /*transaction_id: generateTransactionId(),*/
        };
    
        try {
            // Zapisanie rezerwacji do bazy danych przez API
            const response = await axios.post('http://localhost:5000/api/reservations', { 
                ...reservationData, 
                
            });
            if (response.status === 201) {
                const updateVehicleResponse = await axios.put(`http://localhost:5000/api/vehicles/${reservationData.vehicle_id}`, { 
                status: 'rented'});
                if (updateVehicleResponse.status === 200) {
                    // Potwierdzenie rezerwacji
                alert('Rezerwacja została zapisana!');
                // Przekierowanie na stronę potwierdzenia
                window.location.href = '/';
                }
                
            }
        } catch (error) {
            console.error('Błąd zapisu rezerwacji:', error);
            alert('Coś poszło nie tak. Spróbuj ponownie.');
        }
    };
    

    const handleBlikChange = (event) => {
        const value = event.target.value;
        // Pozwól tylko na cyfry i ogranicz długość do 6 znaków
        if (/^\d*$/.test(value) && value.length <= 6) {
            setBlikCode(value);
        }
    };

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const isButtonDisabled = blikCode.length !== 6 || !isChecked;

    return (
        <section>
            <div className="resizer">
                {!isLoggedIn ? (
                    <div className="finishPayment isNotLoggedIn">
                        <h1>Niestety nie możemy dokończyć procesu rezerwacji</h1>
                        <h3>Nasze usługi są dostępnie jedynie dla członków serwisu</h3>
                        <p>Aby dokończyć proces rezerwacji zaloguj się.</p>
                        <p>Jesteś tu nowy? Rejestracja zajmie Ci dwie minuty!</p>
                    </div>
                ) : (
                    <div className="finishPayment isLoggedIn">
                        <div id="tpayBanner">
                            <img src="TPAY.png" alt="" className="tpayLogo" />
                            <div className="tpayBelt"></div>
                        </div>

                        <div id="blikPayment">
                            <div id="blikBox">
                                <div className="blikHandler"><img src={blikImage} alt="" className="blikLogo" /></div>

                                <label htmlFor="blik">Kod BLIK:</label>
                                <div className="custom_input">
                                    <input name="blik" className="input" type="text" placeholder="000000" value={blikCode} maxLength="6" onChange={handleBlikChange}/>
                                </div>

                                <div className="tpayRules">
                                    <label className="cr-wrapper">
                                        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
                                        <div className="cr-input"></div>
                                        <span>Akceptuję regulamin serwisu tPay</span>
                                    </label>
                                </div>

                                <button className="payButton" disabled={isButtonDisabled} onClick={handlePayment}><b> Kontynuuj, aby zarezerwować </b></button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Payment;
