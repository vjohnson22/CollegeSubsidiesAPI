const AsstCoach = require('../db/models/asstCoach')
const School = require('../db/models/school')

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
            id = coach._id
            School.findOneAndUpdate({institution: coach.school},{$push:{asstCoachs: id}}, {new:true})
            .then(updated => {
                res.json(updated)
            })
            
        })
    },
    update: (req,res) => {
        AsstCoach.findOneAndUpdate({coach: req.params.coach},req.body).then(coach => {
            res.json(coach)
        })
    },
    destroy: (req,res) => {
        AsstCoach.findOne({coach:req.params.coach}).then(coach => {
            school = coach.school
            id = coach._id
            AsstCoach.findOneAndDelete({coach:req.params.coach}).then(coach => {
                School.findOneAndUpdate({institution: school},{$pull: {asstCoachs: id }},{new:true})
                .then(updated => {
                    res.send(updated)
                })
            } )
        })
        
    }
}