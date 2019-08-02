const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/subsidies", {useNewUrlParser: true});

mongoose.Promise = Promise;

module.exports = mongoose;
