const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/video_games", {useNewUrlParser: true});

mongoose.Promise = Promise;

module.exports = mongoose;
