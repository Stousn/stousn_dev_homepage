let Home = {
    render: async () => {
        document.getElementById('pagename').innerHTML = '<a href="/#/">Business Card</a>'
        let view =  /*html*/`
            <div class="w3-panel w3-white w3-card w3-display-container">
                <div class="w3-cell-row">
                    <div class="w3-cell w3-cell-top w3-mobile">
                        <h2>Stefan Reip, MSc</h2>
                        <!--<p>
                            My name is Stefan Reip. I am a software developer form Leoben, Austria.
                        </p>
                        <p>
                            I offer services for the IT environment of freelancers, small and one-person companies.
                            <br>
                            This includes service and maintenance work of IT infrastructure (hardware installation, LAN setup, ...).
                            In addition, the installation and maintenance of software (e.g. setting up customer and appointment management
                            software), setting up domains including managing DNS entries and providing online presence (homepage, social media page, ...)
                            <br>
                            If you are interested <a href="mailto:office@stefanreip.dev?subject=Anfrage%20bzgl.%20eines%20Auftrags">contact me</a>.
                        </p>-->
                        <p>
                            Software Entwickler aus Leoben, Österreich.
                        </p>
                        <p>
                            Ich biete Dienstleistungen für die IT von freiberuflich arbeitenden Personen oder Klein- und Ein-Personen-Unternehmen.
                            <br>
                            Zu diesen Dienstleistungen gehört Service der IT Infrastruktur (zum Beispiel Hardwareinstallation oder LAN-Set-up) und
                            die Installation und Wartung von Software (zum Beispiel Aufsetzen von Kunden- und Terminverwaltungssoftware) oder das Entwickeln selbiger.
                            Außerdem verwalte ich Domains, erstelle Webauftritte wie Homepages, Social Media-Seiten oder Ähnliches.
                            Bei Interesse  <a href="mailto:office@stefanreip.dev?subject=Anfrage%20bzgl.%20eines%20Auftrags">bitte einfach hier kontaktieren</a>.
                        </p>
                    </div>
                    <div class="w3-cell w3-margin-left w3-mobile">
                            <p class="w3-margin-left"><img src="img/profilepic_kl.jpg" class="w3-margin-left" style="width: 200px"></p>
                    </div>
                </div>
            </div>

            <div class="w3-panel w3-white w3-card w3-display-container">
                <!--<p><b>Work Experience and Education</b></p>
                <p>
                    From 2011 until 2013 I did summer internship in a high security data center and gained experience in network technology and housing.
                </p>
                <p>
                    From 2014 until 2017 I attended the Internettechnik (Internet technologies) bachelor degree program and got my BSc degree.
                </p>
                <p>
                    From 2017 until 2019 I studied "IT & Mobile Security" (masters degree) at FH JOANNEUM in Kapfenberg. Now I am Master of Science in Engineering.
                </p>
                <p>
                    Since 2017 I work as a software developer for Raiffeisen Software in Leoben. Our agile team focuses on end to end web applications for online products.
                </p>
                <p>
                    Since 2020 I'm also self-employed.
                </p>
                <p>
                    You can find some of my work <a href="/#/projects">on the projects page</a>
                </p>-->
                <p><b>Ausbildung und Arbeitserfahrung</b></p>
                <p>
                    Von 2008 bis 2013 habe ich den Ausbildungszeweig Kommunikations- und Mediendesign an der HBLA Leoben (nun HLW) absolviert.
                    Während des Sommers der letzteren drei Jahre war ich als Praktikant in einem Hochsicherheitsrechenzentrum tätig
                    und habe Erfahrung im Bereich Netzwerktechnik und Housing gesammelt.
                </p>
                <p>
                    Von 2014 bis 2017 studierte ich am Bachelor Studiengang Internettechnik und erlangte meinen Bachelor of Science.
                </p>
                <p>
                    Von 2017 bis 2019 erlangte ich durch mein Studium IT & Mobile Security an der FH JOANNEUM in Kapfenberg den Titel Master of Science in Engineering.
                </p>
                <p>
                    Seit 2017 arbeite ich als Software Developer für die Raiffeisen Software GmbH am Standort Leoben in einem agilen Team, das Web-Applikationen für Endkunden entwickelt.
                </p>
                <p>
                    Seit 2020 bin ich nebenberuflich selbstständig als Anbieter von Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik tätig.
                </p>
                <p>
                    Manche meiner bisherigen Arbeiten finden sich <a href="/#/projects">auf der Projekt-Seite</a>.
                </p>
            </div>
        `
        return view
    },
    after_render: async () => { }

}

export default Home;
