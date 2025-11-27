const express = require("express")
const app = express()
const PORT = 3000
const postsRouter = require('./routers/posts')

app.use(express.static(`public`))

app.use(express.json());

app.use('/posts', postsRouter)


app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);

})

app.get(`/`, (req, res) => {
    res.send(`Welcome to my blog`)
})