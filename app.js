const express = require("express")
const app = express()
const PORT = 3000
const postsRouter = require('./routers/posts')
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

app.use(express.static(`public`))

app.use(express.json());



app.get(`/`, (req, res) => {
    meow.daje();
    res.send(`meow meow`)

})

app.use('/posts', postsRouter)

app.use(notFound);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);

})

