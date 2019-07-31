const express = require('express')
const router = express.Router()
const headCoachController = require('../controllers/headCoach')

router.get('/', headCoachController.index )
router.get('/:name', headCoachController.show)
router.post('/', headCoachController.create )
router.patch('/name', headCoachController.update )
router.delete('/name', headCoachController.destroy )

module.exports = router