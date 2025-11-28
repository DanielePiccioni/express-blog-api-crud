function errorHandler(err, req, res, next) {
    console.error("Errore:", err);

    res.status(err.status || 500).json({
        error: true,
        message: err.message || "Errore interno del server"
    });
}

module.exports = errorHandler;
