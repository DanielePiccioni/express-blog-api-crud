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
    const newPost = {
        id: posts.length ? posts[posts.length - 1].id + 1 : 1,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags || []
    };

    posts.push(newPost);

    console.log("Post aggiunto:", newPost);

    res.status(201).json(newPost);
}



module.exports = {
    index,
    show,
    destroy,
    store,
};
