import Utils        from './../../services/Utils.js'

let getPost = async (id) => {
    const options = {
       method: 'GET',
       headers: {
           'Content-Type': 'application/json'
       }
   };
   try {
       const response = await fetch(`content/posts/` + id + `.json`, options)
       const json = await response.json();
       return json
   } catch (err) {
       console.log('Error getting documents', err)
   }
}

let getHtml = async (content) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/html'
        }
    };
    try {
        const response = await fetch(`content/posts/` + content, options)
        const html = await response.text();
        return html
    } catch (err) {
        console.log('Error getting documents', err)
    }
}

let PostShow = {

    render : async () => {
        document.getElementById('page_container').innerHTML = '<div class="w3-container w3-center"><i class="fa fa-spinner w3-spin w3-center" style="font-size:64px; padding:50px;"></i></div>'
        let request = Utils.parseRequestURL()
        let post = await getPost(request.id)
        let html = await getHtml(post.content)
        document.getElementById('pagename').innerHTML = '<a href="/#/">Projects</a> > <a href="/#/p/' + post.id + '">' + post.title + '</a>'
        
        let readme = null

        if (post.readme) {
            readme = await getReadme(post.readme)
            document.getElementById('modal').style.display="block"
        }

        return /*html*/`
            <div class="w3-panel w3-white w3-card w3-display-container">
                <h3>${post.title}</h3>
                <div class="w3-bar" id="modal" style="display:none">
                    <a onclick="document.getElementById('modal').style.display='block'" class="w3-button w3-right w3-theme-d3">Show README.md</a>
                </div>
                ${html}
            </div>
            <div id="modal" class="w3-modal">
                <div class="w3-modal-content">
                    <header class="w3-container w3-white">
                        <span onclick="document.getElementById('modal').style.display='none'"
                            class="w3-button w3-display-topright">&times;</span>
                        <h2>${post.title} - README.md</h2>
                    </header>
                    <div class="w3-container">
                        ${readme}
                    </div>
                    <footer class="w3-container w3-theme-d3">
                        <p></p>
                    </footer>
                </div>
            </div>
        `
    }
    , after_render: async () => {
    }
}

export default PostShow;