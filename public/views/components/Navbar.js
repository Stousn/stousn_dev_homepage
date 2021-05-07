let Navbar = {
    render: async () => {
        let view =  /*html*/`
            <div class="w3-sidebar w3-bar-block w3-card w3-animate-left" style="display:none" id="sidebar">
                <button class="w3-bar-item w3-button w3-large w3-theme-d4" id="closeNav">
                    Close &times;
                </button>
                <a class="w3-bar-item w3-button" href="/#/">Business Card</a>
                <a class="w3-bar-item w3-button" href="/#/projects">Projekte</a>
                <a class="w3-bar-item w3-button" href="/#/imprint">Impressum</a>
                <a class="w3-bar-item w3-button" href="/#/disclaimer">Haftungsausschluss</a>
                <a class="w3-bar-item w3-button" href="/#/privacy">Datenschutz</a>
                <homepage></homepage>
            </div>
            <nav class="w3-bar w3-large w3-theme-d3 w3-hide-medium w3-hide-large" role="title" aria-label="main title">
                <span class="w3-bar-item" style="text-align: center; width: 100%;"><a href="/#/" style="text-decoration: none" id="sitename-small">stousn.dev</a></span>
            </nav>
            <nav class="w3-bar w3-large w3-theme-d3" role="navigation" aria-label="main navigation">
                <div class="container">
                    <div>
                        <a class="w3-bar-item w3-button" id="openNav">
                            <i class="fa fa-bars"></i>
                        </a>
                    </div>
                </div>
                <span class="w3-bar-item w3-hide-small"><a href="/#/" style="text-decoration: none" id="sitename">stousn.dev</a></span>
                <span class="w3-bar-item w3-hide-medium w3-hide-small">></span>
                <span id="pagename" class="w3-bar-item">Projects</span>
                <a href="https://www.linkedin.com/company/stefanreip-dev" target="_blank"><span id="linkedin" class="w3-bar-item w3-right w3-button"><i class="fa fa-linkedin"></i></span></a>
                <a href="https://www.facebook.com/stefanreip.dev/" target="_blank"><span id="facebook" class="w3-bar-item w3-right w3-button"><i class="fa fa-facebook"></i></span></a>
            </nav>
        `
        return view
    },
    after_render: async () => {
        document.getElementById("openNav").addEventListener("click", () => {
            document.getElementById("sidebar").style.width = "45%";
            document.getElementById("sidebar").style.display = "block"
        });
        document.getElementById("closeNav").addEventListener("click", () => {
            document.getElementById("sidebar").style.display = "none";
        });
        function onPageInit() {
            window.title = window.location.hostname.replace('www.', '')
            editSiteName('sitename')
            editSiteName('sitename-small')

            document.getElementsByTagName('homepage')[0].innerHTML = '<a href = "https://' +
                window.location.hostname.replace('www.', '').replace('dev', 'at') +
                '" class="w3-bar-item w3-button w3-theme-l4" >' +
                window.location.hostname.replace('www.', '').replace('dev', 'at') +
                '</a >'
        } onPageInit()

        function editSiteName(name) {
            document.getElementById(name).innerText = window.location.hostname.replace('www.', '')
        }
    }

}

export default Navbar;