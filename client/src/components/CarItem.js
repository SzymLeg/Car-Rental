import React from 'react';

function CarItem({ car }) {
  return (
    <li className="car">
      <div className="carImg">
        <img src={car.image} alt="" className="carPhoto" />
      </div>

      <div className="carInfo">
        <h3>{car.name}</h3>

        <ul className="features">
          <li className="seats"> {car.seats} </li>
          <li className="luggage"> {car.luggage} </li>
          <li className="doors"> {car.doors} </li>
          <li className="drive"> {car.drive} </li>
        </ul>

        <div className="btns">
          <a href="" className="bt">ZAREZERWUJ</a>
        </div>
      </div>
    </li>
  );
}

export default CarItem;
