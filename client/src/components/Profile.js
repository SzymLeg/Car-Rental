import React from 'react';

function Profile() {

return (
    <section>
        <div class="resizer">
            <div class="profileGrid">
                <div class="profileCard">
                    <div class="profileCardTop">
                        <img src="avatar.png" alt=""/>
                    </div>

                    <div class="profileCardBottom">
                        <div class="profileCardBottomTitle">
                            <div class="profileTitle">Witaj, [imię]</div>
                            <div class="profileSubtitle">Dobrze Cię znowu widzieć!</div>
                            <button>Zatwierdź zmiany w profilu</button>
                        </div>
                    </div>
                </div>

                <div class="profileAbout">
                    <div class="profileInfo">
                        <div class="prName"> <p>Imię i Nazwisko</p> </div>
                        <div class="ouName"> <p>[Imię i Nazwisko]</p> </div>
                        <div class="prBirthday"> <p>Data urodzenia</p> </div>
                        <div class="ouBirthday"> <p>[Data urodzenia]</p> </div>
                        <div class="prPhone"> <p>Numer telefonu</p> </div>
                        <div class="ouPhone"> <p>[Numer telefonu]</p> </div>
                        <div class="inPhone"> <input type="tel" name="" id=""/> </div>
                        <div class="prMail"> <p>Adres e-mail</p> </div>
                        <div class="ouMail"> <p>[Adres e-mail]</p> </div>
                        <div class="inMail"> <input type="email" name="" id=""/></div>
                        <div class="prLicense"> <p>Uprawnienia</p> </div>
                        <div class="inLicense"> 
                            <label class="cr-wrapper">
                                <input type="checkbox"/>
                                <div class="cr-input"></div> <span>A</span>
                            </label>
                            <label class="cr-wrapper">
                                <input type="checkbox"/>
                                <div class="cr-input"></div> <span>B</span>
                            </label>
                            <label class="cr-wrapper">
                                <input type="checkbox"/>
                                <div class="cr-input"></div> <span>C / C1</span>
                            </label>
                            <label class="cr-wrapper">
                                <input type="checkbox"/>
                                <div class="cr-input"></div> <span>D / D1</span>
                            </label>
                            <label class="cr-wrapper">
                                <input type="checkbox"/>
                                <div class="cr-input"></div> <span>T</span>
                            </label>
                        </div>
                      </div>
                </div>

                <div class="profileLoans">
                    <div class="titleHistory">
                        <div class="titleStatus">Status</div>
                        <div class="titleData">Data wynajmu</div>
                        <div class="titlePlace">Miejsce wynajmu</div>
                        <div class="titleVehicle">Pojazd</div>
                        <div class="titlePrice">Koszt</div>
                        <div class="titleAction">Akcja</div>
                    </div>

                    <div class="dataHistory">
                        <div class="dataStatus">
                            <div class="loanStatus"> Zakończone </div>
                        </div>
                        <div class="dataData">
                          <div class="dataDataFrom"> <p>00.00.0000 00:00</p> </div>
                          <div class="dataDataTo"> <p>00.00.0000 00:00</p> </div>
                        </div>
                        <div class="dataPlace">
                          <div class="dataPlaceFrom"> <p>Breslau</p> </div>
                          <div class="dataPlaceTo"> <p>Breslau</p> </div>
                        </div>
                        <div class="dataVehicle"> <p>Opel Corsa</p> </div>
                        <div class="dataPrice"> <p>10000zł</p> </div>
                        <div class="dataAction"> <button>Anuluj rezerwację</button> </div>
                    </div>
                </div>

                <div class="profileRemove">
                    <div class="changePassword">
                        <h4>Zmień hasło</h4>
                        <p>Wpisz hasło: </p>
                        <input type="password" name="" id=""/>
                        <p>Powtórz hasło: </p>
                        <input type="password" name="" id=""/>
                        <button>Zmień hasło</button>
                    </div>

                    <div class="removeAccount">
                        <h4>Usuń konto</h4>
                        <p>Twoje konto i dane osobowe zostaną usunięte z naszego systemu. Tej akcji nie można cofnąć.</p>
                        <button>Usuń konto</button>
                    </div>
                </div>

              </div>
        </div>
    </section>
    );
}

export default Profile;