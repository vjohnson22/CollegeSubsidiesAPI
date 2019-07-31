const mongoose = require('../connection')
const Schema = mongoose.Schema


const SchoolSchema = new Schema( {
    Institution: String,
    Conference: String,
    percentFromSubsidies: Number,
    Subsidies: Number,
    athleticsRevenue: Number,
    headCoach: {
        type: Schema.Types.ObjectId,
        ref: "HeadCoach"
    },
    headCoachPay: {
        type: Schema.Types.coach,
        ref: "HeadCoach"        
    },
    asstCoachs:[
     {
        type: Schema.Types.coach,
        ref: "AsstCoach"
    }
],
    asstCoachPay: {
        type: Schema.Types.asstPayTotal,
        ref: "AsstCoach"
    }
 
})

module.exports = mongoose.model('School', SchoolSchema)