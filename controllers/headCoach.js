const HeadCoach = require('../db/models/headCoach')

module.exports = {
    index: (req,res) => {
        HeadCoach.find({}).then(coaches => {
            res.json(coaches)
        })
    },    
    show: (req,res) => {
        HeadCoach.find({coach: req.params.coach}).then(coach => {
            res.json(coach)
        })

    },
    create: (req,res) => {
        HeadCoach.create(req.body).then( coach => {
            res.json(coach)
        })

    },
    update: (req,res) => {
        HeadCoach.findOneAndUpdate({coach: req.params.coach},req.body).then(coach => {
            res.json(coach)
        })
    },
    destroy: (req,res) => {
        HeadCoach.findOneAndDelete({coach:req.params.coach}).then(coach => {
            res.send(`${req.params.coach} deleted`)
        } )

    }
}