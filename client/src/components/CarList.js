import React from 'react';
import CarItem from './CarItem';

function CarList() {
  const cars = new Array(8).fill({
    name: 'Fiat 500 1.0 Hybrid',
    seats: 4,
    luggage: 1,
    doors: 3,
    drive: 'Manualna',
    image: 'carImg.png'
  });

  return (
    <section>
      <div className="resizer">
        <h1>Przewodnik po flocie <span>Znaleziono <span id="resultCounter"> 75 </span> wyników.</span></h1>

        <ul id="cars">
          {cars.map((car, index) => (
            <CarItem key={index} car={car} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CarList;
