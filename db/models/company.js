const mongoose = require('../connection')
const Schema = mongoose.Schema

const CompanySchema =  new Schema ({
    description: String,
    developed: [
        {
            type: Schema.Types.ObjectId,
            ref: Game
        }
    ],
    name: String,
    slug: String,
    start_date: Date,
    url: String
})

module.exports = mongoose.model('Company', CompanySchema)