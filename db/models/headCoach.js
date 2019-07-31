const mongoose = require('../connection')
const Schema = mongoose.Schema

const EngineSchema = new Schema ({
    companies: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Company'
        }
    ],
    created_at: Date,
    description: String,
    name: String,
    slug: String,
    url: String
})

module.exports = mongoose.model('Engine', EngineSchema)