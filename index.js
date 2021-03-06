const express = require('express')
const app = express()
const parser = require('body-parser')

// body parser
app.use(parser.json())

// add routes below
app.use('/', require('./routes/redirect'))
app.use('/schools',require('./routes/schools'))
app.use('/headcoach',require('./routes/headCoach'))
app.use('/asstcoach', require('./routes/asstCoach'))

app.set("port", process.env.PORT || 7000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});