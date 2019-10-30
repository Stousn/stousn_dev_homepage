var GITHUB_API_URL = "https://api.github.com/repos";

var GITHUB_OWNER = "stousn";

var README = "readme";

function w3_open() {
    document.getElementById("mySidebar").style.width = "45%";
    document.getElementById("mySidebar").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { 
                        elmnt.innerHTML = this.responseText; 
                        checkAndLoadGitHubContent(file)
                    }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
}
includeHTML();

function loadContent(page, name) {
    document.getElementById("content").setAttribute("w3-include-html", "content/" + page);
    includeHTML();
    document.getElementById("pagename").innerHTML = name;
    w3_close();
}

function checkAndLoadGitHubContent(file) {
    console.log(file);
    switch (file) {
        case "content/procjects/ergo-bankler_at.html":
            loadGitHubDetails('ergotherapie-bankler.at');
            break;
        case "content/procjects/pa.html":
            loadGitHubDetails('iOS-Apps-on-macOS');
            break;
        case "content/procjects/stousn_dev.html":
            loadGitHubDetails('stousn_dev_homepage');
            break;
        default:
            return;
    }

}

function loadGitHubDetails(repo) {
    var url = GITHUB_API_URL + "/" + GITHUB_OWNER + "/" + repo + "/" + README;
    var request = new XMLHttpRequest();

    request.open("GET", url);
    request.addEventListener('load', function (event) {
        if (request.status >= 200 && request.status < 300) {
            console.log(request.responseText);
            var responseJSON = JSON.parse(request.responseText);
            var encodedContent = responseJSON.content;
            var content = atob(encodedContent);
            // console.log(content);

            var converter = new showdown.Converter();
            var contentHtml = converter.makeHtml(content);

            document.getElementById('content_' + repo).innerHTML = contentHtml;

        } else {
            console.error(request.statusText, request.responseText);
            // TODO: Error handling
        }
    });
    request.send();
}