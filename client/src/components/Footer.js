import React from 'react';

function Footer() {
  return (
    <footer>
      <div class="resizer">
        <div class="left">
            <p>
                <strong>Wypożyczalnia Samochodów</strong> <br/>
                Oddział główny w Gliwicach <br/>
                ul. Pszczyńska 85/7 <br/>
                44-100 Gliwice <br/>
                <br/>
                Tel: +48 000 000 000 <br/>
                Email: gliwice@wypozyczalnia.pl
            </p>
        </div>
        <div class="right">
            <iframe loading="lazy" src="https://maps.google.com/maps?q=Pszczy%C5%84ska%2085%2C%2044-100%20Gliwice&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near" title="Pszczyńska 85, 44-100 Gliwice" aria-label="Pszczyńska 85, 44-100 Gliwice"></iframe>
        </div>
        </div>
    </footer>
  );
}

export default Footer;