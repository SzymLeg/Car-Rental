import React from 'react';
import economyImg from '../styles/economy.png';
import suvImg from '../styles/suv.png';
import vanImg from '../styles/van.png';
import luxuryImg from '../styles/luxury.png';



function Index() {
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
        <div id="entryOffer">
            <div class="resizer">
                <div id="fleetInfo">
                    <div class="car">
                        <h2 class="carTitle">Samochód miejski</h2>

                        <p class="carDescription">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <a href="" class="carCheck">Zobacz więcej</a>

                        <img src={economyImg} alt="" class="carImg"/>
                    </div>

                    <div class="car">
                        <h2 class="carTitle">SUV</h2>

                        <p class="carDescription">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <a href="" class="carCheck">Zobacz więcej</a>

                        <img src={suvImg} alt="" class="carImg"/>
                    </div>

                    <div class="car">
                        <h2 class="carTitle">VAN</h2>

                        <p class="carDescription">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <a href="" class="carCheck">Zobacz więcej</a>

                        <img src={vanImg} alt="" class="carImg"/>
                    </div>

                    <div class="car">
                        <h2 class="carTitle">Samochód premium</h2>

                        <p class="carDescription">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <a href="" class="carCheck">Zobacz więcej</a>

                        <img src={luxuryImg} alt="" class="carImg"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Index;
