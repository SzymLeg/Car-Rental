import React from 'react';

function Faq() {
  return (
    <section>
        <div class="resizer">
            <h1>Często zadawane pytania</h1>
            <h3>Najczęstsze pytania</h3>
            <p>
                <span class="FAQquestion">
                    Czy muszę cokolwiek płacić, gdy będę odbierać samochód?
                </span>
                <span class="FAQanwser">
                    Główny kierowca musi pokazać kartę kredytową wystawioną na swoje nazwisko, aby opłacić kaucję na poczet ewentualnych zniszczeń.
                </span>
                <span class="FAQanwser">
                    Na miejscu możemy Cię również obciążyć za:
                </span>
                <ol class="FAQlist">
                    <li>Dodatkowe produkty (nawigacja GPS, fotelik dla dziecka itp.)</li>
                    <li>Wszelkie dodatkowe opłaty (opłata za dodatkowego kierowcę itp.)</li>
                    <li>Wszelką dodatkową ochronę lub ubezpieczenie zakupione od wypożyczalni</li>
                </ol>
            </p>

            <p>
                <span class="FAQquestion">
                    Co zrobić, jeśli chcę pojechać samochodem do innego kraju?
                </span>
                <span class="FAQanwser">
                    Przede wszystkim może zostać za to pobrana stosowna opłata. Standardowe ubezpieczenie nie uwzględnia zdarzeń, które mają miejsce za granicą.
                </span>
                <span class="FAQanwser">
                    W szczególnych przypadkach (np. gdy wynajmującym jest młody kierowca) wypożyczalnia może zabronić przekraczania granicy wypożyczonem samochodem.
                </span>
            </p>

            <p>
                <span class="FAQquestion">
                    Co, jeśli muszę odwołać swoją rezerwację?
                </span>
                <span class="FAQanwser">
                    Jeśli odwołasz rezerwację ponad 48 godzin przed godziną rozpoczęcia wynajmu, otrzymasz pełen zwrot środków.
                </span>
                <span class="FAQanwser">
                    Jeśli odwołasz rezerwację mniej niż 48 godzin przed godziną rozpoczęcia wynajmu lub w momencie odbioru na stanowisku wypożyczalni, zwrócimy Ci uiszczoną opłatę minus koszt 3 dni wynajmu (więc nie otrzymasz żadnego zwrotu, jeśli samochód był zarezerwowany na 3 dni lub mniej).
                </span>
                <span class="FAQanwser">
                    Jeśli odwołasz rezerwację po godzinie rozpoczęcia wynajmu (lub nie pojawisz się na stanowisku wypożyczalni po odbiór), nie otrzymasz zwrotu środków.
                </span>
            </p>

            <p>
                <span class="FAQquestion">
                    W jaki sposób mogę sprawdzić swoją rezerwację online?
                </span>
                <span class="FAQanwser">
                    Na stronie internetowej, upewnij się, że jesteś zalogowany i znajdujesz się na stronie profilu. Historia Twoich rezerwacji znajduje się w panelu "Twoje rezerwacje".
                </span>
            </p>

            <h3>Wymagania i obowiązki kierowcy</h3>

            <p>
                <span class="FAQquestion">
                    Czy można wypożyczyć samochód bez karty kredytowej?
                </span>
                <span class="FAQanwser">
                    W większości przypadków główny kierowca potrzebuje karty kredytowej przy odbiorze samochodu. Akceptujemy również karty debetowe, natomiast w tym przypadku kaucja jest dwukrotnie większa.
                </span>
                <span class="FAQanwser">
                    Niezależnie od warunków, karta musi być wystawiona na nazwisko głównego kierowcy i muszą się na niej znajdować wystarczające środki na opłacenie kaucji samochodu.
                </span>
                <span class="FAQanwser">
                    Bardzo ważne: Jeśli nie masz wszystkich potrzebnych dokumentów, personel przy stanowisku nie będzie mógł wydać Ci samochodu. W takim przypadku nie przysługuje Ci zwrot kosztów poniesionych podczas rezerwacji pojazdu.
                </span>
            </p>

            <h3>Paliwo, kilometraż i plany podróży</h3>

            <p>
                <span class="FAQquestion">
                    Czy mój samochód nie ma limitu kilometrów?
                </span>
                <span class="FAQanwser">
                    Nasze samochody nie mają limitu kilometrów. O szczegóły zapytaj naszego pracownika podczas przekazywania pojazdu.
                </span>
            </p>

            <p>
                <span class="FAQquestion">
                    Skąd mam wiedzieć, jakie paliwo jest odpowiednie dla mojego samochodu?
                </span>
                <span class="FAQanwser">
                    Pracownik wypożyczalni poinformuje Cię o typie paliwa w trakcie prezentacji samochodu. Stosowna informacja znajdzie się również w protokole wynajmu, który otrzymasz po uiszczeniu kaucji. Odpowiedni znak może być także widoczny na korku do baku.
                </span>
            </p>

            <p>
                <span class="FAQquestion">
                    Jaka obowiązuje polityka paliwowa?
                </span>
                <span class="FAQanwser">
                    W naszej wypożyczalni obowiązuje zasada "zwrot z taką samą ilością paliwa". Oznacza to, że musisz oddać samochód, którego bak jest zatankowany do takiego samego poziomu, jak w momencie odbioru (lub naładowany w przypadku samochodów elektrycznych). Jeśli tak się nie stanie, zostaniesz obciążony opłatą za brakujące paliwo/ładowanie, jak również opłatą administracyjną.
                </span>
            </p>

            <h3>Dodatkowe usługi i produkty</h3>

            <p>
                <span class="FAQquestion">
                    Co oznacza "dodatkowy kierowca" i czy muszę płacić za jego dodanie?
                </span>
                <span class="FAQanwser">
                    Bardzo ważne: tylko osoby, które są wymienione jako kierowcy na umowie najmu, mogą prowadzić samochód. Obejmuje to "głównego kierowcę", którego dane podano przy rezerwacji samochodu.
                </span>
                <span class="FAQanwser">
                    Jeśli chcesz, aby ktoś inny został wskazany jako kierowca, możesz podać jego dane pracownikom wypożyczalni przy odbiorze samochodu. Taka usługa wiąże się jednak z dodatkowymi kosztami.
                </span>
            </p>

            <p>
                <span class="FAQquestion">
                    Jak mam zapłacić za dodatkowe usługi lub produkty (GPS, fotelik dla dziecka, dodatkowi kierowcy itp.)?
                </span>
                <span class="FAQanwser">
                    Możesz poprosić o jeden lub więcej fotelików dziecięcych podczas rezerwacji samochodu. Sytuacja wygląda identycznie w przypadku innych dodatkowych usług lub produktów. W większości przypadków zapłacisz za nie przy stanowisku wypożyczalni.
                </span>
            </p>

            <h3>Płatność, opłaty i potwierdzenie</h3>

            <p>
                <span class="FAQquestion">
                    Ile wynosi kaucja?
                </span>
                <span class="FAQanwser">
                    Kaucja wynosi 300 złotych w przypadku płatności kartą kredytową, bądź 600 złotych w przypadku płatności kartą debetową. Inne formy płatności (Płatność gotówką, BLIK, Przelewy24 itp.) nie są akceptowane.
                </span>
            </p>

            <p>
                <span class="FAQquestion">
                    Dlaczego muszę zapłacić kaucję?
                </span>
                <span class="FAQanwser">
                    Jest to kaucja na na pokrycie ewentualnych szkód, więc zostanie ona zwrócona po wynajmie.
                </span>
                <span class="FAQanwser">
                    Jeśli jednak samochód zostanie uszkodzony lub porysowany w trakcie wynajmu, wypożyczalnia zatrzyma część lub całą kwotę na pokrycie kosztów naprawy.
                </span>
                <span class="FAQanwser">
                    Może również zatrzymać część kaucji, jeśli samochód w momencie oddania będzie bardzo brudny lub też jeśli oddasz po wyznaczonej godzinie wynajmu, albo w złej lokalizacji.
                </span>
            </p>

            <p>
                <span class="FAQquestion">
                    Jak mogę wprowadzić zmiany w swojej rezerwacji?
                </span>
                <span class="FAQanwser">
                    W celu zmiany swojej Rezerwacji najprościej jest to zrobić poprzez odwołanie poprzedniej rezerwacji i dokonanie nowej. Nie jesteśmy w stanie zagwarantować, iż zarezerwowany przez Ciebie samochód będzie dostępny w innym terminie, bądź innej lokalizacji. Zmiana warunków wynajmu może się również wiązać ze zmianą ceny wynajmu.
                </span>
                <span class="FAQanwser">
                    Jeżeli zawrzesz nową rezerwację w ciągu 24 godzin od odwołania poprzedniej, nie zostaniesz obciążony żadnymi innymi kosztami. Jeżeli zawrzesz nową rezerwację po czasie dłuższym, niż 24 godziny, mogą obowiązywać opłaty opisane w pytaniu "Co, jeśli muszę odwołać swoją rezerwację?".
                </span>
            </p>

            <p>
                <span class="FAQquestion">
                    Nie znalazłeś/aś odpowiedzi na Twoje pytanie? Skontaktuj się z Biurem Obsługi Klienta.
                </span> 
            </p>
        </div>
    </section>
  );
}

export default Faq;