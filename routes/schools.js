const express = require('express')
const router = express.Router()
const schoolController = require('../controllers/schools')

router.get('/', schoolController.index )
router.get('/:institution', schoolController.show)
router.post('/', schoolController.create )
router.patch('/:institution', schoolController.update )
router.delete('/:institution', schoolController.destroy )

module.exports = router