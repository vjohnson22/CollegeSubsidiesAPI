const express = require('express')
const router = express.Router()
const asstCoachController = require('../controllers/asstCoach')

router.get('/', asstCoachController.index )
router.get('/:coach', asstCoachController.show)
router.post('/', asstCoachController.create )
router.patch('/:coach', asstCoachController.update )
router.delete('/:coach', asstCoachController.destroy )

module.exports = router