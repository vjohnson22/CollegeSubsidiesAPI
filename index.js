const express = require('express')
const app = express()
const parser = require('body-parser')

// body parser
app.use(parser.json())

// add routes below
app.use('/schools',require('./routes/schools'))

app.listen(4000, () => console.log("listening on port 4000"))
