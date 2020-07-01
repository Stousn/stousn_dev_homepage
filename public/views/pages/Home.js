let Home = {
    render: async () => {
        document.getElementById('pagename').innerHTML = '<a href="/#/">Business Card</a>'
        let view =  /*html*/`
            <div class="w3-panel w3-white w3-card w3-display-container">
                <h2>Business Card</h2>
                <p>
                    My name is Stefan Reip. I am a software developer form Leoben, Austria.
                </p>
                <p>
                    I offer services for the IT environment of freelancers, small and one-person companies.
                    <br>
                    This includes service and maintenance work of IT infrastructure (hardware installation, LAN setup, ...).
                    In addition, the installation and maintenance of software (e.g. setting up customer and appointment management
                    software), setting up domains including managing DNS entries and providing online presence (homepage, social media page, ...)
                    <br>
                    If you are interested <a href="mailto:stefanreip@gmail.com?subject=Anfrage%20bzgl.%20eines%20Auftrags">contact me</a>.
                </p>
                </p>
            </div>

            <div class="w3-panel w3-white w3-card w3-display-container">
                <p><b>Work Experience and Education</b></p>
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
                </p>
            </div>
        `
        return view
    },
    after_render: async () => { }

}

export default Home;
