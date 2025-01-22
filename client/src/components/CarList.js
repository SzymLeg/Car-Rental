import React, { useState, useEffect } from 'react';
import CarItem from './CarItem';
import axios from 'axios';
import '../styles/catalog.css';

import { useLocation } from 'react-router-dom';

function CarList() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const pickupLocation = queryParams.get('pickupLocation');
  const returnLocation = queryParams.get('returnLocation');
  const pickupDate = queryParams.get('pickupDate');
  const pickupTime = queryParams.get('pickupTime');
  const returnDate = queryParams.get('returnDate');
  const returnTime = queryParams.get('returnTime');
  const category_link = queryParams.get('category') || "default";;

  const [cars, setCars] = useState([]); // Stan dla listy samochodów
  const [filteredCars, setFilteredCars] = useState([]);
  const [carCount, setCarCount] = useState(0);
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
    category_link: [category_link],
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
      let updatedCategory;
  
      if (category === "dailyPrice" || category === "passengers" || category === "luggage" || category === "doors") {
        // Specjalna logika dla zakresów (np. { min, max })
        updatedCategory = prevFilters[category].some(
          (range) => range.min === values.min && range.max === values.max
        )
          ? prevFilters[category].filter(
              (range) => !(range.min === values.min && range.max === values.max)
            ) // Usuń zakres
          : [...prevFilters[category], values]; // Dodaj zakres
      } else {
        // Standardowa logika dla zwykłych wartości
        updatedCategory = Array.isArray(values)
          ? values.reduce((acc, value) => {
              return acc.includes(value)
                ? acc.filter((item) => item !== value)
                : [...acc, value];
            }, prevFilters[category])
          : prevFilters[category].includes(values)
          ? prevFilters[category].filter((item) => item !== values)
          : [...prevFilters[category], values];
      }
  
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

      if (filters.luggage.length > 0) {
        filtered = filtered.filter((car) => filters.luggage.some((range) => car.luggage_capacity >= range.min && car.luggage_capacity <= range.max));
      }

      if (filters.doors.length > 0) {
        filtered = filtered.filter((car) => filters.doors.some((range) => car.doors >= range.min && car.doors <= range.max));
      }

      if (filters.fuel_type.length > 0) {
        filtered = filtered.filter((car) => filters.fuel_type.includes(car.fuel_type));
      }

      if (filters.transmission.length > 0) {
        filtered = filtered.filter((car) => filters.transmission.includes(car.transmission));
      }

      if (filters.dailyPrice.length > 0) {
        filtered = filtered.filter((car) => filters.dailyPrice.some((range) => car.daily_rate >= range.min && car.daily_rate <= range.max));
      }

      if (filters.passengers.length > 0) {
        filtered = filtered.filter((car) => filters.passengers.some((range) => car.seats >= range.min && car.seats <= range.max));
      }
      
      if (filters.category_link.length > 0 && filters.category_link[0] !== "default") {
        filtered = filtered.filter((car) => filters.category_link.includes(car.category));
      }

      // Dodaj więcej filtrów w zależności od struktury danych samochodów
      setFilteredCars(filtered);

      setCarCount(filtered.length);
    };

    applyFilters();
  }, [filters, cars]);

    return (
      <section>
      <div class="resizer">
          <h1>Katalog pojazdów</h1>
          <h3>Przewodnik po flocie <span class="catalogPrompt">Znaleziono <span class="availableCounter">{carCount}</span> dostępnych pojazdów.</span></h3>

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
                                      <span> <input type="radio" name="pickupLocation" class="pickupCar Katowice" id="pickupKatowice" defaultChecked={pickupLocation === "Katowice"}/> Katowice </span>
                                      <span> <input type="radio" name="pickupLocation" class="pickupCar Krakow" id="pickupKrakow" defaultChecked={pickupLocation === "Krakow"}/> Kraków </span>
                                      <span> <input type="radio" name="pickupLocation" class="pickupCar Wroclaw" id="pickupWroclaw" defaultChecked={pickupLocation === "Wroclaw"}/> Wrocław </span>
                                      </form>
                                  </div>
                                  <div class="entryFormPart">
                                      <h4>Miejsce zwrotu</h4>
                                      <form action="">
                                      <span> <input type="radio" name="returnLocation" class="returnCar Katowice" id="returnKatowice" defaultChecked={returnLocation === "Katowice"}/> Katowice </span>
                                      <span> <input type="radio" name="returnLocation" class="returnCar Krakow" id="returnKrakow" defaultChecked={returnLocation === "Krakow"}/> Kraków </span>
                                      <span> <input type="radio" name="returnLocation" class="returnCar Wroclaw" id="returnWroclaw" defaultChecked={returnLocation === "Wroclaw"}/> Wrocław </span>
                                      </form>
  
                                  </div>
                                  <div class="entryFormPart">
                                      <h4>Data i godzina odbioru</h4>
                                      <form action="">
                                          <span><input type="date" name="" class="pickupCar date" id="" defaultValue={pickupDate}/></span>
                                          <span><input type="time" name="" class="pickupCar time "id="" defaultValue={pickupTime}/></span>
                                      </form>
                                  </div>
                                  <div class="entryFormPart">
                                      <h4>Data i godzina zwrotu</h4>
                                      <form action="">
                                          <span><input type="date" name="" class="returnCar date" id="" defaultValue={returnDate}/></span>
                                          <span><input type="time" name="" class="returnCar time "id="" defaultValue={returnTime}/></span>
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
                          <div><input type="checkbox" class="passengers maxThree" onChange={(e) => handleFilterChange('passengers', { min: 1, max: 3 })}/> <label>1 - 3</label></div>
                          <div><input type="checkbox" class="passengers maxFive" onChange={(e) => handleFilterChange('passengers', { min: 4, max: 5 })}/> <label>4 - 5</label></div>
                          <div><input type="checkbox" class="passengers maxSeven" onChange={(e) => handleFilterChange('passengers', { min: 6, max: 7 })}/> <label>6 - 7</label></div>
                          <div><input type="checkbox" class="passengers aboveSeven" onChange={(e) => handleFilterChange('passengers', { min: 8, max: Infinity })}/> <label>8 +</label></div>

                          <h3>Pojemność bagażnika</h3>
                          <div><input type="checkbox" class="luggage oneLuggage" onChange={(e) => handleFilterChange('luggage', { min: 0, max: 1 })}/> <label>0 - 1</label></div>
                          <div><input type="checkbox" class="luggage twoLuggage" onChange={(e) => handleFilterChange('luggage', { min: 1, max: 3 })}/> <label>2 - 3</label></div>
                          <div><input type="checkbox" class="luggage threeLuggage" onChange={(e) => handleFilterChange('luggage', { min: 4, max: Infinity })}/> <label>4 +</label></div>

                          <h3>Liczba drzwi</h3>
                          <div><input type="checkbox" class="doors twoDoors" onChange={(e) => handleFilterChange('doors', { min: 0, max: 2 })}/> <label>0 - 2</label></div>
                          <div><input type="checkbox" class="doors threeDoors" onChange={(e) => handleFilterChange('doors', { min: 3, max: 5 })}/> <label>3 - 5</label></div>
                          <div><input type="checkbox" class="doors customDoors" onChange={(e) => handleFilterChange('doors', { min: 6, max: Infinity })}/> <label>6+</label></div>

                          <h3>Typ paliwa</h3>
                          <div><input type="checkbox" class="fuel petrol" onChange={(e) => handleFilterChange('fuel_type', 'Benzyna')}/> <label>Benzyna</label></div>
                          <div><input type="checkbox" class="fuel diesel" onChange={(e) => handleFilterChange('fuel_type', 'Diesel')}/> <label>Diesel</label></div>
                          <div><input type="checkbox" class="fuel hybrid" onChange={(e) => handleFilterChange('fuel_type', 'Hybryda')}/> <label>Hybryda</label></div>
                          <div><input type="checkbox" class="fuel electric" onChange={(e) => handleFilterChange('fuel_type', 'Elektryczny')}/> <label>Elektryczny</label></div>

                          <h3>Cena za dzień</h3>
                          <div><input type="checkbox" class="dailyPrice lvOne" onChange={(e) => handleFilterChange('dailyPrice', { min: 0, max: 200 })}/> <label>0zł - 200zł</label></div>
                          <div><input type="checkbox" class="dailyPrice lvTwo" onChange={(e) => handleFilterChange('dailyPrice', { min: 200, max: 400 })}/> <label>200zł - 400zł</label></div>
                          <div><input type="checkbox" class="dailyPrice lvThree" onChange={(e) => handleFilterChange('dailyPrice', { min: 400, max: 600 })}/> <label>400zł - 600zł</label></div>
                          <div><input type="checkbox" class="dailyPrice lvFour" onChange={(e) => handleFilterChange('dailyPrice', { min: 600, max: 800 })}/> <label>600zł - 800zł</label></div>
                          <div><input type="checkbox" class="dailyPrice lvFive" onChange={(e) => handleFilterChange('dailyPrice', { min: 800, max: Infinity })}/> <label>800zł +</label></div>

                          <h3>Skrzynia biegów</h3>
                          <div><input type="checkbox" class="gearbox automatic" onChange={(e) => handleFilterChange('transmission', 'Automatyczna')}/> <label>Automatyczna</label></div>
                          <div><input type="checkbox" class="gearbox manual" onChange={(e) => handleFilterChange('transmission', 'Ręczna')}/> <label>Ręczna</label></div>

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