const mongoose = require('../connection')
const Schema = mongoose.Schema

const GameSchema = new Schema( {
    age_ratings:String,
    aggregated_rating: Number,
    artworks:[String],
    first_release_date: Date,
    franchise: String,
    game_engines: [Number],    
    genres: [Number],    
    involved_companies: [Number],    
    name: String,
    platforms: [Number],
    popularity: Number,
    release_dates: [Date],
    storyline: String,
    summary: String,
    themes: [Number],
    url: String
})

module.exports = mongoose.model('Game', GameSchema)