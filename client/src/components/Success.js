import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Success() {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5); // Stan przechowujący pozostały czas (5 sekund)

    useEffect(() => {
        // Ustawienie interwału, który zmniejsza odliczanie co sekundę
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        // Po 5 sekundach następuje przekierowanie i czyszczenie interwału
        const timer = setTimeout(() => {
            navigate('/profile'); // Przeniesienie na stronę profilu
        }, 5000);

        // Sprzątanie - usuwamy zarówno timeout, jak i interval, gdy komponent jest odmontowany
        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [navigate]);

    return (
        <section>
            <div className="resizer">
                <div className="successfulPayment">
                    <div className="successfulInfo">
                        <h2>Sukces!</h2>
                        <p>
                            Płatność się powiodła! Za {countdown} sekund
                            zostaniesz przekierowany na swój profil...
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Success;
