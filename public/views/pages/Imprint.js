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
                <p>Informationspflicht laut §5 E-Commerce Gesetz, §14 Unternehmensgesetzbuch, §63 Gewerbeordnung und Offenlegungspflicht laut §25 Mediengesetz.</p>
                <b>Stefan Reip, MSc</b>
                <p>
                    Lorberaustraße 21a/4 
                    <br>
                    8700 Leoben,
                    <br>
                    Österreich
                </p>
                <p><b>Unternehmensgegenstand:</b> Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik</p>
                <p><b>E-Mail:</b> hello@stefanreip.dev</p>
                
                <p><b>Berufsrecht:</b> Gewerbeordnung: <a href="www.ris.bka.gv.at" target="_blank">www.ris.bka.gv.at</a></p>
                <p><b>Aufsichtsbehörde/Gewerbebehörde:</b> Bezirkshauptmannschaft Leoben</p>
                <p><b>Berufsbezeichnung:</b> Software Entwickler. Master of Science in Engineering erworben in Österreich.</p>
                <p><b>GISA-Zahl: </b>33121833</p>
                <p>Umsatzsteuerfrei aufgrund der Kleinunternehmerregelung gem. § 6 Abs. 1 Z 27 UStG</p>
            </div>

            
            <footer class="w3-container w3-theme-d3">
                <p class="w3-small"><i>Quelle: Erstellt mit dem Impressum Generator von firmenwebseiten.at in Kooperation mit augenlaserinfo.com</i></p>
            </footer>
        `
        return view
    },
    after_render: async () => {}
        
}

export default Imprint;
