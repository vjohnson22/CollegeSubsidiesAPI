const mongoose = require('../connection')
const Schema = mongoose.Schema

const HeadCoachSchema = new Schema ({
    rank: Number,
    school: String,
    coach: String,
    totalPay: String,
    asstPayTotal: String,
    schoolBuyout: String
})

module.exports = mongoose.model('HeadCoach', HeadCoachSchema)

