import React, { useState } from 'react';
import economyImg from '../styles/economy.png';
import suvImg from '../styles/suv.png';
import vanImg from '../styles/van.png';
import luxuryImg from '../styles/luxury.png';
import '../styles/index.css';
import { useNavigate } from 'react-router-dom';



function Index() {
    const [pickupLocation, setPickupLocation] = useState('');
    const [returnLocation, setReturnLocation] = useState('');
    const [pickupDate, setPickupDate] = useState('');
    const [pickupTime, setPickupTime] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [returnTime, setReturnTime] = useState('');
    const today = new Date().toISOString().split('T')[0];


    const navigate = useNavigate();

  const handleSearch = () => {
    if (!pickupLocation) {
        alert("Proszę wybrać miejsce odbioru!");
        return;
      }
      if (!returnLocation) {
        alert("Proszę wybrać miejsce zwrotu!");
        return;
      }
      if (!pickupDate) {
        alert("Proszę wybrać datę odbioru!");
        return;
      }
      if (!pickupTime) {
        alert("Proszę wybrać godzinę odbioru!");
        return;
      }
      if (!returnDate) {
        alert("Proszę wybrać datę zwrotu!");
        return;
      }
      if (!returnTime) {
        alert("Proszę wybrać godzinę zwrotu!");
        return;
      }

    // Zbudowanie URL z parametrami
    const searchParams = new URLSearchParams();
    searchParams.append('pickupLocation', pickupLocation);
    searchParams.append('returnLocation', returnLocation);
    searchParams.append('pickupDate', pickupDate);
    searchParams.append('pickupTime', pickupTime);
    searchParams.append('returnDate', returnDate);
    searchParams.append('returnTime', returnTime);
    
    // Przejście do strony /catalog z parametrami
    navigate(`/catalog?${searchParams.toString()}`);};

  return (
    <section>
        <div id="entryPanel">
            <div class="resizer">
                <span>
                    <h1>Wynajem samochodu na każdy rodzaj podróży</h1>
                    <h2>Świetne samochody w świetnych cenach, od największych wypożyczalni</h2>
                </span>
            </div>
        </div>

        <div id="entryFormPanel">
            <div class="top_index"></div>
            <div class="bottom"></div>
            <div id="entryFormBanner">
                <div class="resizer">
                    <div id="entryForm">
                        <div id="entryFormInside">
                                <div class="entryFormPart">
                                    <h4>Miejsce odbioru</h4>
                                    <form action="">
                                        <span> <input type="radio" name="pickupLocation" class="pickupCar Katowice" id="pickupKatowice" onChange={() => setPickupLocation('Katowice')} /> Katowice </span>
                                        <span> <input type="radio" name="pickupLocation" class="pickupCar Krakow" id="pickupKrakow" onChange={() => setPickupLocation('Kraków')}/> Kraków </span>
                                        <span> <input type="radio" name="pickupLocation" class="pickupCar Wroclaw" id="pickupWroclaw" onChange={() => setPickupLocation('Wrocław')}/> Wrocław </span>
                                    </form>
                                </div>
                                <div class="entryFormPart">
                                    <h4>Miejsce zwrotu</h4>
                                    <form action="">
                                        <span> <input type="radio" name="returnLocation" class="returnCar Katowice" id="returnKatowice" onChange={() => setReturnLocation('Katowice')}/> Katowice </span>
                                        <span> <input type="radio" name="returnLocation" class="returnCar Krakow" id="returnKrakow" onChange={() => setReturnLocation('Kraków')}/> Kraków </span>
                                        <span> <input type="radio" name="returnLocation" class="returnCar Wroclaw" id="returnWroclaw" onChange={() => setReturnLocation('Wrocław')}/> Wrocław </span>
                                    </form>

                                </div>
                                <div class="entryFormPart">
                                    <h4>Data i godzina odbioru</h4>
                                    <form action="">
                                        <span><input type="date" name="" class="pickupCar date" id="" min={today} onChange={(e) => setPickupDate(e.target.value)}/></span>
                                        <span><input type="time" name="" class="pickupCar time "id="" onChange={(e) => setPickupTime(e.target.value)}/></span>
                                    </form>
                                </div>
                                <div class="entryFormPart">
                                    <h4>Data i godzina zwrotu</h4>
                                    <form action="">
                                        <span><input type="date" name="" class="returnCar date" id="" min={pickupDate || today} onChange={(e) => setReturnDate(e.target.value)}/></span>
                                        <span><input type="time" name="" class="returnCar time "id="" onChange={(e) => setReturnTime(e.target.value)}/></span>
                                    </form>
                                </div>
                                <div class="entryFormButton">
                                    <button id="" class="formSearchButton" onClick={handleSearch}>Szukaj</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="entryOffer">
            <div class="resizer">
                <div id="fleetInfo">
                    <div class="car">
                        <h2 class="carTitle">Samochód miejski</h2>

                        <p class="carDescription">
                        Kompaktowy i ekonomiczny, idealny do poruszania się po mieście. Niskie spalanie, zwrotność i łatwość parkowania.
                        </p>

                        <a href="/catalog?category=economy" class="carCheck">Zobacz więcej</a>

                        <img src={economyImg} alt="" class="carImg"/>
                    </div>

                    <div class="car">
                        <h2 class="carTitle">SUV</h2>

                        <p class="carDescription">
                        Wszechstronny pojazd o dużej przestrzeni i świetnej trakcji. Doskonały na rodzinne wyjazdy i trudniejsze trasy.
                        </p>

                        <a href="/catalog?category=suv" class="carCheck">Zobacz więcej</a>

                        <img src={suvImg} alt="" class="carImg"/>
                    </div>

                    <div class="car">
                        <h2 class="carTitle">Bus</h2>

                        <p class="carDescription">
                        Przestronny i wygodny, zaprojektowany z myślą o większych grupach. Idealny na wspólne podróże.
                        </p>

                        <a href="/catalog?category=van" class="carCheck">Zobacz więcej</a>

                        <img src={vanImg} alt="" class="carImg"/>
                    </div>

                    <div class="car">
                        <h2 class="carTitle">Samochód premium</h2>

                        <p class="carDescription">
                        Luksus i komfort w najlepszym wydaniu. Doskonały wybór na wyjątkowe okazje i biznesowe spotkania.
                        </p>

                        <a href="/catalog?category=luxury" class="carCheck">Zobacz więcej</a>

                        <img src={luxuryImg} alt="" class="carImg"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Index;
