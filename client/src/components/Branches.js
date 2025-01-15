import React from 'react';

function Branches() {
  return (
    <section>
        <div class="resizer">
            <h1>Znajdź nas w swoim mieście</h1>
            
            <div class="localization">
                <div class="left">
                    <p>
                        <strong>Wypożyczalnia Samochodów</strong> <br/>
                        Oddział w Katowicach <br/>
                        ul. Powstańców 43 <br/>
                        40-028 Katowice <br/>
                        <br/>
                        Tel: +48 000 000 000 <br/>
                        Email: katowice@wypozyczalnia.pl
                    </p>
                </div>
                <div class="right">
                    <iframe loading="lazy" src="https://maps.google.com/maps?q=Powstańców+43,+40-028+Katowice&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near" title="Powstańców 43, 40-028 Katowice" aria-label="Powstańców 43, 40-028 Katowice"></iframe>
                </div>
            </div>

            <div class="localization">
                <div class="left">
                    <p>
                        <strong>Wypożyczalnia Samochodów</strong> <br/>
                        Oddział w Krakowie <br/>
                        ul. Adama Mickiewicza 5 <br/>
                        33-332 Kraków <br/>
                        <br/>
                        Tel: +48 000 000 000 <br/>
                        Email: krakow@wypozyczalnia.pl
                    </p>
                </div>
                <div class="right">
                    <iframe loading="lazy" src="https://maps.google.com/maps?q=al.+Adama+Mickiewicza+5,+33-332+Kraków&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near" title="Adama Mickiewicza 5, 33-332 Kraków" aria-label="Adama Mickiewicza 5, 33-332 Kraków"></iframe>
                </div>
            </div>

            <div class="localization">
                <div class="left">
                    <p>
                        <strong>Wypożyczalnia Samochodów</strong> <br/>
                        Oddział we Wrocławiu <br/>
                        ul. Rdestowa 18 <br/>
                        54-530 Wrocław <br/>
                        <br/>
                        Tel: +48 000 000 000 <br/>
                        Email: wroclaw@wypozyczalnia.pl
                    </p>
                </div>
                <div class="right">
                    <iframe loading="lazy" src="https://maps.google.com/maps?q=Rdestowa+18,+54-530+Wrocław&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near" title="Rdestowa 18, 54-530 Wrocław" aria-label="Rdestowa 18, 54-530 Wrocław"></iframe>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Branches;