const express = require('express')
const app = express()
const parser = require('body-parser')

// body parser
app.use(parser.json())

// add routes below
app.use('/schools',require('./routes/schools'))
app.use('/headcoach',require('./routes/headCoach'))
app.use('/asstcoach', require('./routes/asstCoach'))

app.listen(6000, () => console.log("listening on port 5000"))

app.set("port", process.env.PORT || 000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});