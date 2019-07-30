const express = require('express')
const app = express()
const parser = require('body-parser')

// body parser
app.use(parser.json())

// add routes below
app.use('/games',require('./routes/games'))

app.listen(4000, () => console.log("listening on port 4000"))
