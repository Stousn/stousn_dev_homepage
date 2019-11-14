let Imprint = {
    render : async () => {
        document.getElementById('pagename').innerHTML = '<a href="/#/imprint">Imprint</a>'
        let view =  /*html*/`
            <div class="w3-panel w3-white w3-card w3-display-container">
                <p><b>Imprint</b></p>
                <p>
                    Because this page is published under Austrian law, the imprint is written in German language.
                </p>
            </div>

            <div class="w3-panel w3-white w3-card w3-display-container">
                <p><b>Impressum</b></p>
                <b>Stefan Reip, BSc</b>
                <p>8700 Ferdinand Hanusch-Straße 61 | Austria</p>
                <p>E-Mail: stefanreip+stousndev@gmail.com</p>
                <p>Eintragungsnummer Gesundheitsberuferegister: <a href="https://gbr-public.ehealth.gv.at/Detail.aspx?ID=89643"
                        target="_blank">18-GBR-003671</a></p>
                <!--UID-Nr: 91827364-->
                <p>Berufsrecht: MTD-Gesetz abrufbar via <a href="www.ris.bka.gv.at" target="_blank">www.ris.bka.gv.at</a></p>
                <p>Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten: <a
                        href="http://ec.europa.eu/odr" target="_blank">http://ec.europa.eu/odr</a>.<br>
                    Sie können allfällige Beschwerde auch an die oben angegebene E-Mail-Adresse richten.</p>
            </div>

            <div class="w3-panel w3-white w3-card w3-display-container">
                <p><b>Haftungs­ausschluss</b></p>
                <p>
                    Im Hinblick auf die technischen Eigenschaften des Internet kann keine Gewähr für die Authentizität, Richtigkeit
                    und
                    Vollständigkeit der im Internet zur Verfügung gestellten Informationen übernommen werden. Es wird auch keine
                    Gewähr
                    für die Verfügbarkeit oder den Betrieb der gegenständlichen Homepage und ihrer Inhalte übernommenen.
                </p>
                <p>
                    Jede Haftung für unmittelbare, mittelbare oder sonstige Schäden, unabhängig von deren Ursachen, die aus der
                    Benutzung oder Nichtverfügbarkeit der Daten und Informationen dieser Homepage erwachsen, wird, soweit rechtlich
                    zulässig, ausgeschlossen.
                </p>
            </div>

            <div class="w3-panel w3-white w3-card w3-display-container">
                <p><b>Haftung für Links</b></p>
                <p>
                    Diese Webseite enthält Links zu externen Webseiten Dritter, auf deren Inhalte kein Einfluss genommen werden
                    kann.
                    Deshalb kann für diese fremden Inhalte auch keine Gewähr übernommen werden. Für die Inhalte der verlinkten
                    Seiten
                    ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
                    Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                    Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                    Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei bekannt werden von Rechtsverletzungen werden derartige
                    Links umgehend entfernt.
                </p>
            </div>

            <div class="w3-panel w3-white w3-card w3-display-container">
                <p><b>Urheberrecht</b></p>
                <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen
                    Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
                    des
                    Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien
                    dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
                    Seite
                    nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
                    Dritter
                    als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir
                    um
                    einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend
                    entfernen.
                </p>
            </div>

            <div class="w3-panel w3-white w3-card w3-display-container">
                <p><b>Datenschutz­erklärung</b></p>
                <p>
                    Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren
                    Seiten
                    personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit
                    möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte
                    weitergegeben.
                    <br>Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
                    Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
                    möglich.
                    <br>Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung
                    von
                    nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen.
                    Die
                    Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
                    Werbeinformationen, etwa durch Spam-Mails, vor.
                </p>
            </div>

            <div class="w3-panel w3-white w3-card w3-display-container">
                <p><b>Auskunft, Löschung, Sperrung</b></p>
                <p>
                    Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren
                    Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder
                    Löschung
                    dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über
                    die im
                    Impressum angegeben Adresse des Webseitenbetreibers an uns wenden.
                </p>
            </div>
            <footer class="w3-container w3-theme-d3">
                <p class="w3-small"><i>Quelle: <a href="http://www.e-recht24.de" target="_blank">e-recht24.de</a></i></p>
            </footer>
        `
        return view
    },
    after_render: async () => {}
        
}

export default Imprint;