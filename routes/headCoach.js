const express = require('express')
const router = express.Router()
const headCoachController = require('../controllers/headCoach')

router.get('/', headCoachController.index )
router.get('/:coach', headCoachController.show)
router.post('/', headCoachController.create )
router.patch('/:coach', headCoachController.update )
router.delete('/:coach', headCoachController.destroy )

module.exports = router