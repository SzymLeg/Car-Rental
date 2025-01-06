import React from 'react';
import carImage from '../styles/carImg.png';

function CarItem({ car }) {
  return (
    <li className="car">
      <div className="carImg">
        <img src={carImage} alt="" className="carPhoto" />
      </div>

      <div className="carInfo">
        <h3>{[car.brand, " ", car.model]}</h3>

        <ul className="features">
          <li className="seats"> {car.seats} </li>
          <li className="luggage"> {car.luggage_capacity} </li>
          <li className="doors"> {car.doors} </li>
          <li className="drive"> {car.transmission} </li>
        </ul>

        <div className="btns">
          <a href="" className="bt">ZAREZERWUJ</a>
        </div>
      </div>
    </li>
  );
}

export default CarItem;
