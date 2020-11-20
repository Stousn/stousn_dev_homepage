let Privacy = {
    render : async () => {
        document.getElementById('pagename').innerHTML = '<a href="/#/privacy">Datenschutzerklärung</a>'
        let view =  /*html*/`
            <div class="w3-panel w3-white w3-card w3-display-container">
                <h3>Datenschutzerklärung</h3>
                <h4>Datenschutz</h4>
                <p>
                    Wir haben diese Datenschutzerklärung (Fassung 01.07.2020-221129897) verfasst, um Ihnen gemäß der Vorgaben der Datenschutz-Grundverordnung (EU) 2016/679 zu erklären, welche Informationen wir sammeln, wie wir Daten verwenden und welche Entscheidungsmöglichkeiten Sie als Besucher dieser Webseite haben.
                    <br>
                    Leider liegt es in der Natur der Sache, dass diese Erklärungen sehr technisch klingen, wir haben uns bei der Erstellung jedoch bemüht die wichtigsten Dinge so einfach und klar wie möglich zu beschreiben.
                </p>
                <h4>Rechte laut Datenschutzgrundverordnung</h4>
                <p>
                    Ihnen stehen laut den Bestimmungen der DSGVO und des österreichischen Datenschutzgesetzes (DSG) grundsätzlich die folgende Rechte zu:
                    <ul>
                        <li>Recht auf Berichtigung (Artikel 16 DSGVO)</li>
                        <li>Recht auf Löschung ("Recht auf Vergessenwerden") (Artikel 17 DSGVO)</li>
                        <li>Recht auf Einschränkung der Verarbeitung (Artikel 18 DSGVO)</li>
                        <li>Recht auf Benachrichtigung – Mitteilungspflicht im Zusammenhang mit der Berichtigung oder Löschung personenbezogener Daten oder der Einschränkung der Verarbeitung (Artikel 19 DSGVO)</li>
                        <li>Recht auf Datenübertragbarkeit (Artikel 20 DSGVO)</li>
                        <li>Widerspruchsrecht (Artikel 21 DSGVO)</li>
                        <li>Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung — einschließlich Profiling — beruhenden Entscheidung unterworfen zu werden (Artikel 22 DSGVO)</li>
                    </ul>
                    Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren, welche in Österreich die Datenschutzbehörde ist, deren Webseite Sie unter 
                    <a href="https://www.dsb.gv.at/" target="_blank">https://www.dsb.gv.at/</a> 
                    finden.
                </p>
                <h4>TLS-Verschlüsselung mit https</h4>
                <p>
            Wir verwenden https um Daten abhörsicher im Internet zu übertragen (Datenschutz durch Technikgestaltung Artikel 25 Absatz 1 DSGVO). Durch den Einsatz von TLS (Transport Layer Security), einem Verschlüsselungsprotokoll zur sicheren Datenübertragung im Internet können wir den Schutz vertraulicher Daten sicherstellen. Sie erkennen die Benutzung dieser Absicherung der Datenübertragung am kleinen Schlosssymbol links oben im Browser und der Verwendung des Schemas https (anstatt http) als Teil unserer Internetadresse.
                </p>
            </div>

            
            <footer class="w3-container w3-theme-d3">
                <p class="w3-small"><i>Quelle: Erstellt mit dem Datenschutz Generator von firmenwebseiten.at in Kooperation mit laserenthaarung.at</i></p>
            </footer>
        `
        return view
    },
    after_render: async () => {}
        
}

export default Privacy;
