const express = require('express')
const app = express()
const parser = require('body-parser')

// body parser
app.use(parser.json())

// add routes below
app.use('/schools',require('./routes/schools'))
app.use('/headcoach',require('./routes/headCoach'))
app.use('/asstcoach', require('./routes/asstCoach'))

app.listen(5000, () => console.log("listening on port 5000"))

app.set("port", process.env.PORT || 5000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});