import React, { useState, useEffect } from 'react';
import CarItem from './CarItem';
import axios from 'axios';

function CarList() {
  const [cars, setCars] = useState([]); // Stan dla listy samochodów
  const [isLoading, setIsLoading] = useState(true); // Stan ładowania
  const [error, setError] = useState(null); // Stan błędów

  // Funkcja do pobrania danych z backendu
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/vehicles') // Zastąp odpowiednim URL swojego API
      .then((response) => {
        setCars(response.data); // Ustawienie danych samochodów
        setIsLoading(false);
      })
      .catch((err) => {
        setError('Nie udało się załadować samochodów. Spróbuj ponownie później.');
        setIsLoading(false);
      });
  }, []);

  return (
    <section>
      <div className="resizer">
        <h1>
          Przewodnik po flocie{' '}
          <span>
            Znaleziono <span id="resultCounter">{cars.length}</span> wyników.
          </span>
        </h1>

        {isLoading && <p>Ładowanie samochodów...</p>} {/* Wiadomość ładowania */}
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Wyświetlenie błędu */}
        {!isLoading && !error && (
          <ul id="cars">
            {cars.map((car) => (
              <CarItem key={car.id} car={car} /> // Użyj car.id jako klucza
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default CarList;


// import React from 'react';
// import CarItem from './CarItem';

// function CarList() {
//   const cars = new Array(8).fill({
//     name: 'Fiat 500 1.0 Hybrid',
//     seats: 4,
//     luggage_capacity: 1,
//     doors: 3,
//     transmission: 'Manualna',
//     image: 'carImg.png'
//   });

//   return (
//     <section>
//       <div className="resizer">
//         <h1>Przewodnik po flocie <span>Znaleziono <span id="resultCounter"> {cars.length} </span> wyników.</span></h1>

//         <ul id="cars">
//           {cars.map((car, index) => (
//             <CarItem key={index} car={car} />
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }

// export default CarList;
