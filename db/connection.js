
const mongoose = require('mongoose')

mongoose.Promise = Promise

let mongoURI = "";

if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/subsidies";
}

// connect to the database, with the imported mongoose instance
mongoose
  .connect(mongoURI, {useNewUrlParser: true})
  .then(instance => console.log(`Connected to db: ${instance.connections[0].name}`))
  .catch(error => console.log('Connection failed!', error))

// now, our mongoose instance has a configured connection to our local db, in addition
// to its model configuration
module.exports = mongoose







// const mongoose = require("mongoose");

// let mongoURI =""


// if (process.env.NODE_ENV === "production") {
//     mongoURI = process.env.DB_URL;
//   } else {
//     mongoURI = "mongodb://localhost/subsidies";
//   }
//   mongoose
//   .connect(mongoURI, { useNewUrlParser: true })
//   .then(instance =>
//     console.log(`Connected to db: ${instance.connections[0].name}`)
//   )
//   .catch(error => console.log("Connection failed!", error));

// mongoose.Promise = Promise;

// module.exports = mongoose;
