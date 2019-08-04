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
            let id = coach._id
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
        HeadCoach.findOne({coach:req.params.coach}).then(coach => {
            school = coach.school
            HeadCoach.findOneAndDelete({coach:req.params.coach}).then(coach => {
                School.findOneAndUpdate({institution: school},{$set: {headCoach: null }},{new:true})
                .then(updated => {
                    res.send(updated)
                })
            } )
        })
        

    }
}