let Disclaimer = {
    render : async () => {
        document.getElementById('pagename').innerHTML = '<a href="/#/imprint">Disclaimer</a>'
        let view =  /*html*/`
            <div class="w3-panel w3-white w3-card w3-display-container">
                <p><b>Disclaimer</b></p>
                <p>
                    Because this page is published under Austrian law, the disclaimer is written in German language.
                </p>
            </div>

            <div class="w3-panel w3-white w3-card w3-display-container">
                <p><b>Haftungsausschluss</b></p>
                <p><b>EU-Streitschlichtung</b></p>
                <p>
                    Gemäß Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie über die Online-Streitbeilegungsplattform (OS-Plattform) informieren.
                    Verbraucher haben die Möglichkeit, Beschwerden an die Online Streitbeilegungsplattform der Europäischen Kommission unter 
                    <a href="http://ec.europa.eu/odr?tid=221129897" target="_blank">http://ec.europa.eu/odr?tid=221129897</a>
                    zu richten. Die dafür notwendigen Kontaktdaten finden Sie in unserem <a href="/#/imprint">Impressum</a>.
                    <br>
                    Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder verpflichtet sind, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
                <p><b>Haftung für Inhalte dieser Webseite</b></p>
                <p>
                    Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen uns korrekte und aktuelle Informationen bereitzustellen. Leider können wir keine Haftung für die Korrektheit aller Inhalte auf dieser Webseite übernehmen, speziell für jene die seitens Dritter bereitgestellt wurden.
                    <br>
                    Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitten wir Sie uns umgehend zu kontaktieren, Sie finden die Kontaktdaten im <a href="/#/imprint">Impressum</a>.
                </p>
                <p><b>Haftung für Links auf dieser Webseite</b></p>
                <p>
                    Unsere Webseite enthält Links zu anderen Webseiten für deren Inhalt wir nicht verantwortlich sind. Haftung für verlinkte Websites besteht laut § 17 ECG für uns nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten hatten und haben, uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen sind und wir Links sofort entfernen würden, wenn uns Rechtswidrigkeiten bekannt werden.
                    <br>
                    Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitten wir Sie uns zu kontaktieren, Sie finden die Kontaktdaten im <a href="/#/imprint">Impressum</a>.
                </p>
                <p><b>Urheberrechtshinweis</b></p>
                <p>
                    Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht. Falls notwendig, werden wir die unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich verfolgen.
                </p>
                <p><b>Bildernachweis</b></p>
                <p>
                    Die Bilder, Fotos und Grafiken auf dieser Webseite sind urheberrechtlich geschützt.
                    <br>
                    Die Bilderrechte liegen bei den folgenden Fotografen und Unternehmen:
                    <ul>
                        <li>Stefan Reip</li>
                    </ul>
                </p>
            </div>
            <footer class="w3-container w3-theme-d3">
                <p class="w3-small"><i>Quelle: Erstellt mit dem Impressum Generator von firmenwebseiten.at in Kooperation mit augenlaserinfo.com</i></p>
            </footer>
        `
        return view
    },
    after_render: async () => {}
        
}

export default Disclaimer;
