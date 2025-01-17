import React, { useState, useEffect } from 'react';
import CarItem from './CarItem';
import axios from 'axios';
import '../styles/catalog.css';


function CarList() {
  const [cars, setCars] = useState([]); // Stan dla listy samochodów
  const [filteredCars, setFilteredCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Stan ładowania
  const [error, setError] = useState(null); // Stan błędów
  const [filters, setFilters] = useState({
    category: [],
    passengers: [],
    luggage: [],
    doors: [],
    fuel_type: [],
    dailyPrice: [],
    transmission: [],
    deposit: [],
  }); // Stan dla aktywnych filtrów

  
  // Funkcja do pobrania danych z backendu
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/vehicles') // Zastąp odpowiednim URL swojego API
      .then((response) => {
        setCars(response.data); // Ustawienie danych samochodów
        setFilteredCars(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError('Nie udało się załadować samochodów. Spróbuj ponownie później.');
        setIsLoading(false);
      });
  }, []);

  const handleFilterChange = (category, values) => {
    setFilters((prevFilters) => {
      const updatedCategory = Array.isArray(values)
        ? values.reduce((acc, value) => {
            // Jeśli wartość już istnieje, usuń ją, w przeciwnym razie dodaj
            return acc.includes(value)
              ? acc.filter((item) => item !== value)
              : [...acc, value];
          }, prevFilters[category])
        : prevFilters[category].includes(values)
        ? prevFilters[category].filter((item) => item !== values) // Usuń pojedynczą wartość
        : [...prevFilters[category], values]; // Dodaj pojedynczą wartość
  
      return {
        ...prevFilters,
        [category]: updatedCategory,
      };
    });
  };

  // Funkcja filtrująca listę samochodów
  useEffect(() => {
    const applyFilters = () => {
      let filtered = cars;

      // Filtruj według kategorii
      if (filters.category.length > 0) {
        filtered = filtered.filter((car) => filters.category.includes(car.category));
      }

      // Filtruj według liczby pasażerów
      if (filters.passengers.length > 0) {
        filtered = filtered.filter((car) => filters.passengers.includes(car.passengers.toString()));
      }

      if (filters.luggage.length > 0) {
        filtered = filtered.filter((car) => filters.luggage.includes(car.luggage_capacity.toString()));
      }

      if (filters.doors.length > 0) {
        filtered = filtered.filter((car) => filters.doors.includes(car.doors.toString()));
      }

      if (filters.fuel_type.length > 0) {
        filtered = filtered.filter((car) => filters.fuel_type.includes(car.fuel_type));
      }

      if (filters.transmission.length > 0) {
        filtered = filtered.filter((car) => filters.transmission.includes(car.transmission));
      }


      // Dodaj więcej filtrów w zależności od struktury danych samochodów
      setFilteredCars(filtered);
    };

    applyFilters();
  }, [filters, cars]);

    return (
      <section>
      <div class="resizer">
          <h1>Katalog pojazdów</h1>
          <h3>Przewodnik po flocie <span class="catalogPrompt">Znaleziono <span class="availableCounter">{cars.length}</span> dostępnych pojazdów.</span></h3>

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
                                      <span> <input type="radio" name="pickupLocation" class="pickupCar Katowice" id="pickupKatowice"/> Katowice </span>
                                      <span> <input type="radio" name="pickupLocation" class="pickupCar Krakow" id="pickupKrakow"/> Kraków </span>
                                      <span> <input type="radio" name="pickupLocation" class="pickupCar Wroclaw" id="pickupWroclaw"/> Wrocław </span>
                                      </form>
                                  </div>
                                  <div class="entryFormPart">
                                      <h4>Miejsce zwrotu</h4>
                                      <form action="">
                                      <span> <input type="radio" name="returnLocation" class="returnCar Katowice" id="returnKatowice"/> Katowice </span>
                                      <span> <input type="radio" name="returnLocation" class="returnCar Krakow" id="returnKrakow"/> Kraków </span>
                                      <span> <input type="radio" name="returnLocation" class="returnCar Wroclaw" id="returnWroclaw"/> Wrocław </span>
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
                          <div><input type="checkbox" class="category small" onChange={(e) => handleFilterChange('category', 'economy')}/> <label>Miejske</label></div>
                          <div><input type="checkbox" class="category suv" onChange={(e) => handleFilterChange('category', 'suv')}/> <label>SUV</label></div>
                          <div><input type="checkbox" class="category bus" onChange={(e) => handleFilterChange('category', 'van')}/> <label>Busy</label></div>
                          <div><input type="checkbox" class="category premium" onChange={(e) => handleFilterChange('category', 'luxury')}/> <label>Premium</label></div>

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
                          <div><input type="checkbox" class="doors threeDoors" onChange={(e) => handleFilterChange('doors', '3')}/> <label>3</label></div>
                          <div><input type="checkbox" class="doors fiveDoors" onChange={(e) => handleFilterChange('doors', '5')}/> <label>5</label></div>
                          <div><input type="checkbox" class="doors customDoors" onChange={(e) => handleFilterChange('doors', '-')}/> <label>Inna</label></div>

                          <h3>Typ paliwa</h3>
                          <div><input type="checkbox" class="fuel petrol" onChange={(e) => handleFilterChange('fuel_type', 'petrol')}/> <label>Benzyna</label></div>
                          <div><input type="checkbox" class="fuel diesel" onChange={(e) => handleFilterChange('fuel_type', 'diesel')}/> <label>Diesel</label></div>
                          <div><input type="checkbox" class="fuel hybrid" onChange={(e) => handleFilterChange('fuel_type', 'hybrid')}/> <label>Hybryda</label></div>
                          <div><input type="checkbox" class="fuel electric" onChange={(e) => handleFilterChange('fuel_type', 'electric')}/> <label>Prąd</label></div>

                          <h3>Cena za dzień</h3>
                          <div><input type="checkbox" class="dailyPrice lvOne"/> <label>0zł - 200zł</label></div>
                          <div><input type="checkbox" class="dailyPrice lvTwo"/> <label>200zł - 400zł</label></div>
                          <div><input type="checkbox" class="dailyPrice lvThree"/> <label>400zł - 600zł</label></div>
                          <div><input type="checkbox" class="dailyPrice lvFour"/> <label>600zł - 800zł</label></div>
                          <div><input type="checkbox" class="dailyPrice lvFive"/> <label>800zł +</label></div>

                          <h3>Skrzynia biegów</h3>
                          <div><input type="checkbox" class="gearbox automatic" onChange={(e) => handleFilterChange('transmission', 'automatic')}/> <label>Automatyczna</label></div>
                          <div><input type="checkbox" class="gearbox manual" onChange={(e) => handleFilterChange('transmission', 'manual')}/> <label>Manualna</label></div>

                          <h3>Kaucja przy odbiorze</h3>
                          <div><input type="checkbox" class="deposit threeH" onChange={(e) => handleFilterChange('category', ['economy','suv','van'])}/> <label>300zł</label></div>
                          <div><input type="checkbox" class="deposit sixH" onChange={(e) => handleFilterChange('category', 'luxury')}/> <label>600zł</label></div>
                      </form>
                  </div>
              </div>
              <div id="carList">
              <ul id="cars_catalog">
              {filteredCars.length > 0 ? (
              filteredCars.map((car) => (
                  <CarItem key={car.id} car={car} />
                ))
              ) : (
                <p>Brak dostępnych pojazdów spełniających wybrane kryteria.</p>
              )}
              
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