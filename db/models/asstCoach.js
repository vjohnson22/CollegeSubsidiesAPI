const mongoose = require('../connection')
const Schema = mongoose.Schema

const AsstCoachSchema = new Schema ({
    rank: Number,
    school: String,
    coach: String,
    totalPay: Number,
    AsstPayTotal: Number
})

module.exports = mongoose.model('AsstCoach', AsstCoachSchema)

