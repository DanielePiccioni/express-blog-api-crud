const index = (req, res) => {
    res.send("Visualizzare tutti gli elementi");
};

const show = (req, res) => {
    res.send(`Visualizzare un elemento ${req.params.id}`);
};

const create = (req, res) => {
    res.send("Creare un nuovo elemento");
};

const update = (req, res) => {
    res.send(`Modificare interamente un elemento ${req.params.id}`);
};

const destroy = (req, res) => {
    res.send(`Eliminare un elemento ${req.params.id}`);
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy
};