function index(req, res) {
    res.send('Visualizzare tutti gli elementi');
}

function show(req, res) {
    res.send(`Visualizzare un elemento ${req.params.id}`);
}

function store(req, res) {
    res.send('Creare un nuovo elemento');
}

function update(req, res) {
    res.send(`Modificare interamente un elemento ${req.params.id}`);
}

function destroy(req, res) {
    res.send(`Eliminare un elemento ${req.params.id}`);
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy,
};
