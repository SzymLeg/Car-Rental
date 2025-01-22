import React from 'react';
import carImage from '../styles/carImg.png';
import { useNavigate } from 'react-router-dom';

function CarItem({ car }) {
  const navigate = useNavigate();

  const handleViewOffer = () => {
    window.scrollTo(0, 0);
    navigate(`/rent/${car.id}`);
  };

  return (
<li class="car_item">
    <div class="carImg_item"><img src={carImage} alt="" className="carPhoto_item" /></div>
        <div class="carInfo">
            <div class="top">
                <h2 class="carBrand">{[car.brand, " ", car.model]}</h2>
                <ul class="features">
                    <li class="seats">{car.seats}</li>
                    <li class="gearbox">{car.transmission}</li>
                    <li class="luggage">{car.luggage_capacity}</li>
                    <li class="doors">{car.doors}</li>
                    <li class="fuel">{car.fuel_type}</li> 
                    <li class="location">{car.localization}</li>
                    <li class="kilometers">Bez limitu kilometrów</li>
                </ul>
            </div>
        <div class="bottom">
            <p class="loanDays">Cena za 24h</p>
            <p class="loanPrice">{car.daily_rate} zł</p>
            <button class="checkOffer" onClick={handleViewOffer}>Zobacz ofertę</button>
        </div>
    </div>
</li>
  );
}

export default CarItem;

/*
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
*/