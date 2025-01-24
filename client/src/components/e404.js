import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";


function e404() {

return (
    <section>
        <div class="resizer">
            <div id="errorPage">
                <div id="errorBox">
                    <div class="err">4</div>
                    <FontAwesomeIcon icon={faQuestionCircle} className="icon" />
                    <div class="err">4</div>
                    <div class="msg">Strona której szukasz wyparowała. Albo nigdy jej tu nie było? Nie mam pojęcia, w końcu jestem tylko robotem.<p>Wróć na <a href="/">stronę główną</a>.</p></div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default e404;