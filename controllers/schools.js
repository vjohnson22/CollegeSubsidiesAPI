const School = require('../db/models/school')

module.exports = {
    index: (req,res) => {
        School.find({}).then(schools => {
            res.json(schools)
        })
    },    
    show: (req,res) => {

    },
    create: (req,res) => {

    },
    update: (req,res) => {

    },
    destroy: (req,res) => {

    },
}

