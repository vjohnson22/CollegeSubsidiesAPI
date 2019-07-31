const mongoose = require('../connection')
const Schema = mongoose.Schema

const AsstCoachSchema = new Schema ({
    rank: Number,
    school: String,
    coach: String,
    totalPay: String,
    AsstPayTotal: String
})

module.exports = mongoose.model('AsstCoach', AsstCoachSchema)

