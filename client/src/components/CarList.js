import React, { useState, useEffect } from 'react';
import CarItem from './CarItem';
import axios from 'axios';


function CarList() {
    return (
      <section>
      <div class="resizer">
          <h1>Katalog pojazdów</h1>
          <h3>Przewodnik po flocie <span class="catalogPrompt">Znaleziono <span class="availableCounter">75</span> dostępnych pojazdów.</span></h3>

          <div id="entryFormPanel">
              <div class="top"></div>
              <div class="bottom"></div>
              <div id="entryFormBanner">
                  <div class="resizer">
                      <div id="entryForm">
                          <div id="entryFormInside">
                                  <div class="entryFormPart">
                                      <h4>Miejsce odbioru</h4>
                                      <form action="">
                                          <span> <input type="radio" name="Katowice" class="pickupCar Katowice" id=""/> Katowice </span>
                                          <span> <input type="radio" name="Kraków" class="pickupCar Krakow" id=""/> Kraków </span>
                                          <span> <input type="radio" name="Wrocław" class="pickupCar Wroclaw" id=""/> Wrocław </span>
                                      </form>
                                  </div>
                                  <div class="entryFormPart">
                                      <h4>Miejsce zwrotu</h4>
                                      <form action="">
                                          <span> <input type="radio" name="Katowice" class="returnCar Katowice" id=""/> Katowice </span>
                                          <span> <input type="radio" name="Kraków" class="returnCar Krakow" id=""/> Kraków </span>
                                          <span> <input type="radio" name="Wrocław" class="returnCar Wroclaw" id=""/> Wrocław </span>
                                      </form>
  
                                  </div>
                                  <div class="entryFormPart">
                                      <h4>Data i godzina odbioru</h4>
                                      <form action="">
                                          <span><input type="date" name="" class="pickupCar date" id=""/></span>
                                          <span><input type="time" name="" class="pickupCar time "id=""/></span>
                                      </form>
                                  </div>
                                  <div class="entryFormPart">
                                      <h4>Data i godzina zwrotu</h4>
                                      <form action="">
                                          <span><input type="date" name="" class="returnCar date" id=""/></span>
                                          <span><input type="time" name="" class="returnCar time "id=""/></span>
                                      </form>
                                  </div>
                                  <div class="entryFormButton">
                                      <button id="" class="formSearchButton">Szukaj</button>
                                  </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div id="carCatalog">
              <div id="carFinder">
                  <div id="carForm">
                      <h2>Filtr</h2>
                      <form action="">
                          <h3>Kategoria pojazdu</h3>
                          <div><input type="checkbox" class="category small"/> <label>Małe</label></div>
                          <div><input type="checkbox" class="category medium"/> <label>Średnie</label></div>
                          <div><input type="checkbox" class="category large"/> <label>Duże</label></div>
                          <div><input type="checkbox" class="category combi"/> <label>Kombi</label></div>
                          <div><input type="checkbox" class="category suv"/> <label>SUV</label></div>
                          <div><input type="checkbox" class="category van"/> <label>Vany</label></div>
                          <div><input type="checkbox" class="category bus"/> <label>Busy</label></div>
                          <div><input type="checkbox" class="category premium"/> <label>Premium</label></div>

                          <h3>Liczba pasażerów</h3>
                          <div><input type="checkbox" class="passengers maxThree"/> <label>1 - 3</label></div>
                          <div><input type="checkbox" class="passengers maxFive"/> <label>4 - 5</label></div>
                          <div><input type="checkbox" class="passengers maxSeven"/> <label>6 - 7</label></div>
                          <div><input type="checkbox" class="passengers aboveSeven"/> <label>8 +</label></div>

                          <h3>Pojemność bagażnika</h3>
                          <div><input type="checkbox" class="luggage oneLuggage"/> <label>0 - 1</label></div>
                          <div><input type="checkbox" class="passengers twoLuggage"/> <label>2</label></div>
                          <div><input type="checkbox" class="passengers threeLuggage"/> <label>3 +</label></div>

                          <h3>Liczba drzwi</h3>
                          <div><input type="checkbox" class="doors noDoors"/> <label>0</label></div>
                          <div><input type="checkbox" class="doors threeDoors"/> <label>3</label></div>
                          <div><input type="checkbox" class="doors fiveDoors"/> <label>5</label></div>
                          <div><input type="checkbox" class="doors customDoors"/> <label>Inna</label></div>

                          <h3>Typ paliwa</h3>
                          <div><input type="checkbox" class="fuel petrol"/> <label>Benzyna</label></div>
                          <div><input type="checkbox" class="fuel diesel"/> <label>Diesel</label></div>
                          <div><input type="checkbox" class="fuel gas"/> <label>LPG</label></div>
                          <div><input type="checkbox" class="fuel electric"/> <label>Prąd</label></div>

                          <h3>Cena za dzień</h3>
                          <div><input type="checkbox" class="dailyPrice lvOne"/> <label>0zł - 200zł</label></div>
                          <div><input type="checkbox" class="dailyPrice lvTwo"/> <label>200zł - 400zł</label></div>
                          <div><input type="checkbox" class="dailyPrice lvThree"/> <label>400zł - 600zł</label></div>
                          <div><input type="checkbox" class="dailyPrice lvFour"/> <label>600zł - 800zł</label></div>
                          <div><input type="checkbox" class="dailyPrice lvFive"/> <label>800zł +</label></div>

                          <h3>Skrzynia biegów</h3>
                          <div><input type="checkbox" class="gearbox automatic"/> <label>Automatyczna</label></div>
                          <div><input type="checkbox" class="gearbox manual"/> <label>Manualna</label></div>

                          <h3>Zasady tankowania</h3>
                          <div><input type="checkbox" class="fuelRules equal"/> <label>Zwrot z taką samą ilością paliwa</label></div>

                          <h3>Kaucja przy odbiorze</h3>
                          <div><input type="checkbox" class="deposit threeH"/> <label>300zł</label></div>
                          <div><input type="checkbox" class="deposit sixH"/> <label>600zł</label></div>
                      </form>
                  </div>
              </div>
              <div id="carList">
                  <ul id="cars">
                      
                  </ul>
              </div>
          </div>

          <p></p>
      </div>
  </section>
    );
}

export default CarList;

/*

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

        {isLoading && <p>Ładowanie samochodów...</p>} {/* Wiadomość ładowania *x/}
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Wyświetlenie błędu *x/}
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
*/

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