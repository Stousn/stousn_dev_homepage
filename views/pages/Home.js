// --------------------------------
//  Define Data Sources
// --------------------------------

let getPostsList = async () => {
     const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch(`content/posts/posts.json`, options)
        const json = await response.json();
        // console.log(json)
        return json
    } catch (err) {
        console.log('Error getting documents', err)
    }
}

let Home = {
    render : async () => {
        document.getElementById('pagename').innerHTML = '<a href="/#/">Projects</a>'
        let posts = await getPostsList()
        let view =  posts.map(post => /*html*/`
           <div class="w3-panel w3-white w3-card w3-display-container">
                <a href="#/p/${post.id}" style="text-decoration: none"><h3>${post.title}</h1></a>
                <p>${post.summary}</p>
                <p><a href="#/p/${post.id}">continue reading</a></p>
            </div>`).join('\n')
        
        
        return view
    }
    , after_render: async () => { }

}

export default Home;