import React from 'react';

function CarForm({}) {
  return (
    <section>
        <div className="resizer">
        <h1>Wyszukaj idealny samochód <span>Skorzystaj z poniższego formularza.</span></h1>
            <form action="" class="carFinder">
                <span>
                    <div class="mediaBox">
                        <fieldset>
                            <legend>Wybierz typ pojazdu:</legend>

                            <div>
                                <input type="radio" id="economy" name="type" value="economy" checked />
                                <label for="huey">Osobowe</label>
                            </div>

                            <div>
                                <input type="radio" id="SUV" name="type" value="SUV" />
                                <label for="dewey">SUV</label>
                            </div>

                            <div>
                                <input type="radio" id="van" name="type" value="van" />
                                <label for="louie">VAN / BUS</label>
                            </div>
                            <div>
                                <input type="radio" id="premium" name="type" value="premium" />
                                <label for="louie">Luksusowe</label>
                            </div>
                        </fieldset>
                    </div>

                    <div class="mediaBox">
                        <fieldset>
                            <legend>Wybierz lokalizację pojazdu:</legend>

                            <div>
                                <input type="radio" id="economy" name="localization" value="economy" checked />
                                <label for="huey">Wszędzie</label>
                            </div>

                            <div>
                                <input type="radio" id="katowice" name="localization" value="katowice" />
                                <label for="dewey">Katowice</label>
                            </div>

                            <div>
                                <input type="radio" id="kraków" name="localization" value="kraków" />
                                <label for="louie">Kraków</label>
                            </div>
                            <div>
                                <input type="radio" id="wrocław" name="localization" value="wrocław" />
                                <label for="louie">Wrocław</label>
                            </div>
                        </fieldset>
                    </div>

                    <div class="mediaBox">
                        <fieldset>
                            <legend>Wybierz liczbę pasażerów:</legend>

                            <div>
                                <input type="radio" id="zeroP" name="passengers" value="zeroP" checked />
                                <label for="huey">Wszystkie</label>
                            </div>

                            <div>
                                <input type="radio" id="twoP" name="passengers" value="twoP" />
                                <label for="dewey">2</label>
                            </div>

                            <div>
                                <input type="radio" id="fourP" name="passengers" value="fourP" />
                                <label for="louie">4-5</label>
                            </div>
                            <div>
                                <input type="radio" id="sixP" name="passengers" value="sixP" />
                                <label for="louie">6+</label>
                            </div>
                        </fieldset>
                    </div>
                </span>

                <span>
                    <div class="mediaBox">
                        <fieldset>
                            <legend>Wybierz pojemność bagażnika:</legend>

                            <div>
                                <input type="radio" id="zeroL" name="luggage" value="zeroL" checked />
                                <label for="huey">Dowolna</label>
                            </div>

                            <div>
                                <input type="radio" id="oneL" name="luggage" value="oneL" />
                                <label for="dewey">1</label>
                            </div>

                            <div>
                                <input type="radio" id="twoL" name="luggage" value="twoL" />
                                <label for="louie">2</label>
                            </div>
                            <div>
                                <input type="radio" id="threeL" name="luggage" value="threeL" />
                                <label for="louie">3+</label>
                            </div>
                        </fieldset>
                    </div>

                    <div class="mediaBox">
                        <fieldset>
                            <legend>Wybierz liczbę drzwi:</legend>

                            <div>
                                <input type="radio" id="zeroD" name="doors" value="zeroD" checked />
                                <label for="huey">Dowolna</label>
                            </div>

                            <div>
                                <input type="radio" id="threeD" name="doors" value="threeD" />
                                <label for="dewey">3</label>
                            </div>

                            <div>
                                <input type="radio" id="fiveD" name="doors" value="fiveD" />
                                <label for="louie">5</label>
                            </div>
                            <div>
                                <input type="radio" id="otherD" name="doors" value="otherD" />
                                <label for="louie">Inna</label>
                            </div>
                        </fieldset>
                    </div>

                    <div class="mediaBox">
                        <fieldset>
                            <legend>Wybierz typ skrzyni biegów:</legend>

                            <div>
                                <input type="radio" id="zeroG" name="gearbox" value="zeroG" checked />
                                <label for="huey">Dowolna</label>
                            </div>

                            <div>
                                <input type="radio" id="manualG" name="gearbox" value="manualG" />
                                <label for="dewey">Manualna</label>
                            </div>

                            <div>
                                <input type="radio" id="automaticG" name="gearbox" value="automaticG" />
                                <label for="louie">Automatyczna</label>
                            </div>
                            <div>
                                <input type="radio" id="otherG" name="gearbox" value="otherG" />
                                <label for="louie">Inna</label>
                            </div>
                        </fieldset>
                    </div>
                </span>
                <div class="carType">
                    <button class="searchButton">Wyszukaj</button>
                </div>
            </form>
        </div>
    </section>
  );
}

export default CarForm;