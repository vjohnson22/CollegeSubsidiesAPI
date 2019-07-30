const mongoose = require('../connection')
const Schema = mongoose.Schema

const GameSchema = new Schema( {
    age_ratings:String,
    aggregated_rating: Number,
    first_release_date: Date,
    franchise: String,
    game_engines: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Engine'
        }
    ],    
    involved_companies: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Company'
        }
    ],    
    name: String,
    popularity: Number,
    storyline: String,
    summary: String,
    url: String
})

module.exports = mongoose.model('Game', GameSchema)