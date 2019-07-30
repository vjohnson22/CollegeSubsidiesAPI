const mongoose = require('../connection')
const Schema = mongoose.Schema

const GameSchema = new Schema( {
    age_ratings:String,
    aggregated_rating: Number,
    first_release_date: Date,
    franchise: String,
    game_engines: [Number],    
    involved_companies: [Number],    
    name: String,
    popularity: Number,
    storyline: String,
    summary: String,
    url: String
})

module.exports = mongoose.model('Game', GameSchema)