const express = require('express')
const router = express.Router()
const asstCoachController = require('../controllers/asstCoach')

router.get('/', asstCoachController.index )
router.get('/:name', asstCoachController.show)
router.post('/', asstCoachController.create )
router.patch('/name', asstCoachController.update )
router.delete('/name', asstCoachController.destroy )

module.exports = router