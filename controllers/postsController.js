let posts = require("../data/posts")

function index(req, res) {
    res.json(posts);
}

function show(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ error: "Post non trovato" });
    }

    res.json(post);
}


function destroy(req, res) {
    const id = parseInt(req.params.id);
    const index = posts.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Post non trovato" });
    }

    posts.splice(index, 1);

    console.log("Lista aggiornata:", posts);

    res.status(204).send();
}

function store(req, res) {
    console.log("Dati ricevuti:", req.body);
    res.send("Dati ricevuti");
}



module.exports = {
    index,
    show,
    destroy,
    store,
};
