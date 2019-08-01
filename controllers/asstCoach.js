const AsstCoach = require('../db/models/AsstCoach')

module.exports = {
    index: (req,res) => {
        AsstCoach.find({}).then(coaches => {
            res.json(coaches)
        })
    },    
    show: (req,res) => {
        AsstCoach.find({coach: req.params.coach}).then(coach => {
            res.json(coach)
        })

    },
    create: (req,res) => {
        AsstCoach.create(req.body).then( coach => {
            res.json(coach)
        })

    },
    update: (req,res) => {
        AsstCoach.findOneAndUpdate({coach: req.params.coach},req.body).then(coach => {
            res.json(coach)
        })
    },
    destroy: (req,res) => {
        AsstCoach.findOneAndDelete({coach:req.params.coach}).then(coach => {
            res.send(`${req.params.coach} deleted`)
        } )

    }
}