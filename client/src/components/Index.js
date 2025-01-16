import React from 'react';

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
                                        <span> <input type="radio" name="Katowice" class="pickupCar Katowice" id=""/> Katowice </span>
                                        <span> <input type="radio" name="Kraków" class="pickupCar Krakow" id=""/> Kraków </span>
                                        <span> <input type="radio" name="Wrocław" class="pickupCar Wroclaw" id=""/> Wrocław </span>
                                    </form>
                                </div>
                                <div class="entryFormPart">
                                    <h4>Miejsce zwrotu</h4>
                                    <form action="">
                                        <span> <input type="radio" name="Katowice" class="returnCar Katowice" id=""/> Katowice </span>
                                        <span> <input type="radio" name="Kraków" class="returnCar Krakow" id=""/> Kraków </span>
                                        <span> <input type="radio" name="Wrocław" class="returnCar Wroclaw" id=""/> Wrocław </span>
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

                        <img src="economy.png" alt="" class="carImg"/>
                    </div>

                    <div class="car">
                        <h2 class="carTitle">SUV</h2>

                        <p class="carDescription">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <a href="" class="carCheck">Zobacz więcej</a>

                        <img src="suv.png" alt="" class="carImg"/>
                    </div>

                    <div class="car">
                        <h2 class="carTitle">VAN</h2>

                        <p class="carDescription">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <a href="" class="carCheck">Zobacz więcej</a>

                        <img src="van.png" alt="" class="carImg"/>
                    </div>

                    <div class="car">
                        <h2 class="carTitle">Samochód premium</h2>

                        <p class="carDescription">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <a href="" class="carCheck">Zobacz więcej</a>

                        <img src="luxury.png" alt="" class="carImg"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Index;
