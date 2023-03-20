const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/bye", (req, res) => {
    res.send("goodbye!")
})

app.get("/greeting", (req, res) => {
     res.send(`hi, ${req.query.name}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})