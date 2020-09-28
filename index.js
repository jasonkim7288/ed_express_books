const express = require( 'express' )
const { books } = require("./book")
const app = express()

// Make sure you understand how your data is being sent to you before deciding to use
// either json() or urlencoded()
// app.use( express.json() )
// app.use( express.urlencoded() )
const PORT = 3000

app.listen( PORT, () => {
    console.log(`Your app is running on port ${PORT}, QUICK!! go catch it!!`)
})

