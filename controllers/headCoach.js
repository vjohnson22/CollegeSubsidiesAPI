const HeadCoach = require('../db/models/headCoach')
const School = require('../db/models/school')

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
            id = coach._id
            School.findOneAndUpdate({institution: coach.school},{$set:{headCoach: id}}, {new:true})
            .then(updated => {
                res.json(updated)
            })
            
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