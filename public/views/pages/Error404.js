let Error404 = {

    render : async () => {
        document.getElementById('pagename').innerHTML = '<a href="/#/">404 Not found</a>'
        let view =  /*html*/`
            <section class="section">
                <h1> 404 Error </h1>
            </section>
        `
        return view
    }
    , after_render: async () => {
    }
}
export default Error404;