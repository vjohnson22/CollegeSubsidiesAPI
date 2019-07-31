const mongoose = require('../connection')
const Schema = mongoose.Schema


const SchoolSchema = new Schema( {
    institution: String,
    conference: String,
    percentFromSubsidies: String,
    subsidies: String,
    athleticsRevenue: String,
    headCoach: {
        type: Schema.Types.ObjectId,
        ref: "HeadCoach"
    },
    asstCoachs:[
     {
        type: Schema.Types.ObjectId,
        ref: "AsstCoach"
    }
    ]
})

module.exports = mongoose.model('School', SchoolSchema)