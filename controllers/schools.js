const School = require('../db/models/school')

module.exports = {
    index: (req,res) => {
        School.find({}).then(schools => {
            res.json(schools)
        })
    },    
    show: (req,res) => {
        School.find({institution: req.params.institution}).then(school => {
            res.json(school)
        })

    },
    create: (req,res) => {
        School.create(req.body).then( school => {
            res.json(school)
        })

    },
    update: (req,res) => {
        School.findOneAndUpdate({institution: req.params.institution},req.body).then(school => {
            res.json(school)
        })
    },
    destroy: (req,res) => {
        School.findOneAndDelete({institution:req.params.institution}).then(school => {
            res.send(`${req.params.institution} deleted`)
        } )

    }
}

