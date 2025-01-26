import React from 'react';
import { useNavigate } from 'react-router-dom';

function CarItem({ car, pickupLocation, returnLocation, pickupDate, pickupTime, returnDate, returnTime }) {
  const navigate = useNavigate();

  const handleViewOffer = () => {
    window.scrollTo(0, 0);
    navigate(`/rent/${car.id}?pickupLocation=${pickupLocation}&returnLocation=${returnLocation}&pickupDate=${pickupDate}&pickupTime=${pickupTime}&returnDate=${returnDate}&returnTime=${returnTime}`);
  };

  return (

<li class="car_item">
                            <div class="availableCar">
                                <div class="availableCarImg">
                                    <img src={`${process.env.PUBLIC_URL}vehicles/${car.image}`} alt=""></img>
                                </div>
                                <div class="availableCarInfo">
                                    <div class="availableCarAbout">
                                        <h2 class="carBrand">{[car.brand, " ", car.model]}</h2>
                                        <ul class="features">
                                            <li class="seats">{car.seats}</li>
                                            <li class="doors">{car.doors}</li>
                                            <li class="luggage">{car.luggage_capacity}</li>
                                            <li class="gearbox">{car.transmission}</li>
                                            <li class="fuel">{car.fuel_type}</li>
                                        </ul>
                                        <ul class="features">
                                            <li class="location">{car.localization}</li>
                                            <li class="kilometers">Bez limitu kilometrów</li>
                                        </ul>
                                    </div>
                                    <div class="availableCarPrice">
                                        <p>
                                            Cena za 24h: <br/>
                                            <span class="basicPrice">{car.daily_rate} zł</span>
                                        </p>
                                        
                                    </div>
                                    <div class="availableCarReservation">
                                        <button class="checkOffer" onClick={handleViewOffer}>Zobacz ofertę</button>
                                    </div>
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