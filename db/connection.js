const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/colleges", {useNewUrlParser: true});

mongoose.Promise = Promise;

module.exports = mongoose;
