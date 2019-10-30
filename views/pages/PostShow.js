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
        let request = Utils.parseRequestURL()
        let post = await getPost(request.id)
        let html = await getHtml(post.content)
        document.getElementById('pagename').innerHTML = '<a href="/#/">Projects</a> > <a href="/#/p/' + post.id + '">' + post.title + '</a>'
        
        return /*html*/`
            <div class="w3-panel w3-white w3-card w3-display-container">
                <h3>${post.title}</h3>
                ${html}
            </div>
        `
    }
    , after_render: async () => {
    }
}

export default PostShow;