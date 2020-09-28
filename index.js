const express = require ( 'express' )
const { books } = require("./book")
const app = express()
app.use( express.json() )
const PORT = 3000

app.listen( PORT, () => {
    console.log(`now listening on port ${PORT}`)
})

