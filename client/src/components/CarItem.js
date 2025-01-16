import React from 'react';

function CarItem({ car }) {
  return (
<li class="car">
    <div class="carImg"></div>
        <div class="carInfo">
            <div class="top">
                <h2 class="carBrand">Lancia Ypsilon</h2>
                <ul class="features">
                    <li class="seats">5 miejsc</li>
                    <li class="gearbox">Manualna</li>
                    <li class="luggage">1 duża walizka</li>
                    <li class="doors">5-drzwiowe</li>
                    <li class="fuel">Benzyna</li> 
                    <li class="location">Katowice</li>
                    <li class="kilometers">Bez limitu kilometrów</li>
                </ul>
            </div>
        <div class="bottom">
            <p class="loanDays">Cena za {11} dni</p>
            <p class="loanPrice">1 999 zł</p>
            <button class="checkOffer">Zobacz ofertę</button>
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