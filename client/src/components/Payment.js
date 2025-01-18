import React from 'react';

function Payment() {
    return (
        <section>
        <div class="resizer">
            <div class="finishPayment isNotLoggedIn">
                <h1>Niestety nie możemy dokończyć procesu rezerwacji</h1>
                <h3>Nasze usługi są dostępnie jedynie dla członków serwisu</h3>
                <p>Aby dokończyć proces rezerwacji zaloguj się.</p>
                <p>Jesteś tu nowy? Rejestracja zajmie Ci dwie minuty!</p>
            </div>

            <div class="finishPayment isLoggedIn">
                <div id="tpayBanner">
                    <img src="TPAY.png" alt="" class="tpayLogo"/>
                    <div class="tpayBelt"></div>
                </div>

                <div id="blikPayment">
                    <div id="blikBox">
                        <div class="blikHandler"><img src="BLIK.png" alt="" class="blikLogo"/></div>

                        <label for="blik">Kod BLIK:</label>
                        <div class="custom_input">
                            <input name="blik" class="input" type="text" placeholder="000000"/>
                        </div>

                        <div class="tpayRules">
                            <label class="cr-wrapper">
                                <input type="checkbox"/>
                                <div class="cr-input"></div>
                                <span>Akceptuję regulamin serwisu tPay</span>
                            </label>
                        </div>

                        <button class="payButton"><b> Kontynuuj, aby zarezerwować </b></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Payment;