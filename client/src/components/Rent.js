import React from 'react';

function Rent() {
    return (
    <section>
        <div class="resizer">
            <h1>Twoja oferta</h1>
            <h3>MARKA MODEL SAMOCHODU</h3>
            <div id="carLoanPanel">
                <div id="aboutCarInfo">
                    <div class="aboutCarInfo carPhoto">
                        
                    </div>
                    <div class="aboutCarInfo carStats">
                        <h4 class="loanInfoHeading">Informacje o pojeździe</h4>
                        <ul class="aboutCarFeatures">
                            <li class="carStatsList seats">XD</li>
                            <li class="carStatsList gearbox">XD</li>
                            <li class="carStatsList luggage">XD</li>
                            <li class="carStatsList doors">XD</li>
                            <li class="carStatsList fuel">XD</li>
                            <li class="carStatsList location">XD</li>
                        </ul>
                    </div>
                    <div class="aboutCarInfo loanIncluded">
                        <h4 class="loanInfoHeading">Wliczone w cenę</h4>
                        <ul>
                            <li class="carLoanIncluded">Bezpłatna rezygnacja do 48h</li>
                            <li class="carLoanIncluded">Ubezpieczenie od kradzieży</li>
                            <li class="carLoanIncluded">Ubezpieczenie AC</li>
                            <li class="carLoanIncluded">Kilometry bez limitu</li>
                        </ul>
                    </div>
                    <div class="aboutCarInfo loanAdditional">
                        <h4 class="loanInfoHeading">Dodaj produkty i usługi</h4>

                        <div class="additionalThing">
                            <h4 class="additionalHeading">Dodatkowy kierowca</h4>
                            <h6 class="additionalSubheading">XXX zł za cały wynajem</h6>
                            <div class="additionalButtons">
                                <button class="additionalButton">-</button>
                                <div class="additionalButton">0</div>
                                <button class="additionalButton">+</button>
                            </div>
                        </div>
                        <div class="additionalThing">
                            <h4 class="additionalHeading">Fotelik dla dziecka (0-1 lat)</h4>
                            <h6 class="additionalSubheading">XXX zł za cały wynajem</h6>
                            <div class="additionalButtons">
                                <button class="additionalButton">-</button>
                                <div class="additionalButton">0</div>
                                <button class="additionalButton">+</button>
                            </div>
                        </div>
                        <div class="additionalThing">
                            <h4 class="additionalHeading">Fotelik dla dziecka (1-3 lat)</h4>
                            <h6 class="additionalSubheading">XXX zł za cały wynajem</h6>
                            <div class="additionalButtons">
                                <button class="additionalButton">-</button>
                                <div class="additionalButton">0</div>
                                <button class="additionalButton">+</button>
                            </div>
                        </div>
                        <div class="additionalThing">
                            <h4 class="additionalHeading">Fotelik dla dziecka (3-12 lat)</h4>
                            <h6 class="additionalSubheading">XXX zł za cały wynajem</h6>
                            <div class="additionalButtons">
                                <button class="additionalButton">-</button>
                                <div class="additionalButton">0</div>
                                <button class="additionalButton">+</button>
                            </div>
                        </div>
                        <div class="additionalThing">
                            <h4 class="additionalHeading">Zestaw GPS</h4>
                            <h6 class="additionalSubheading">XXX zł za cały wynajem</h6>
                            <div class="additionalButtons">
                                <button class="additionalButton">-</button>
                                <div class="additionalButton">0</div>
                                <button class="additionalButton">+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="aboutLoanInfo">
                    <div id="aboutReturnInfo">
                        <h4 class="loanInfoHeading">Odbiór i zwrot</h4>
                        <p class="loanInfoDate">DATA I GODZINA</p>
                        <p class="loanInfoPlace"><b>MIEJSCE (ADRES)</b></p>
                        <br/>
                        <p class="loanInfoDate">DATA I GODZINA</p>
                        <p class="loanInfoPlace"><b>MIEJSCE (ADRES)</b></p>
                    </div>

                    <div id="loanPriceDetails">
                        <h4 class="loanInfoHeading">Szczegóły ceny pojazdu</h4>
                        <div class="loanPriceDesc loanBasic">Wynajem samochodu</div>
                        <div class="loanPriceCalc loanBasic">CENA</div>
                        <div class="loanPriceDesc additionalDriver">Dodatkowy kierowca</div>
                        <div class="loanPriceCalc additionalDriver">CENA</div>
                        <div class="loanPriceDesc additionalBabySeat">Fotelik dla noworodka</div>
                        <div class="loanPriceCalc additionalBabySeat">CENA</div>
                        <div class="loanPriceDesc additionalChildSeat">Fotelik dla dziecka do 3 lat</div>
                        <div class="loanPriceCalc additionalChildSeat">CENA</div>
                        <div class="loanPriceDesc additionalYoungSeat">Fotelik dla dziecka do 12 lat</div>
                        <div class="loanPriceCalc additionalYoungSeat">CENA</div>
                        <div class="loanPriceDesc additionalGPS">Zestaw GPS</div>
                        <div class="loanPriceCalc additionalGPS">CENA</div>
                        <hr/>
                        <div class="loanPriceDesc finalPrice">Cena za XX dni:</div>
                        <div class="loanPriceCalc finalPrice">CENA</div>
                    </div>

                    <button class="finishLoanButton"><b> Kontynuuj, aby zarezerwować </b></button>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Rent;