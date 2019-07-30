const express = require('express')
const router = express.Router()
const gamesController = require('../controllers/games')

router.get('/', gamesController.index )
router.get('/:name', gamesController.show)
router.post('/', gamesController.create )
router.patch('/name', gamesController.update )
router.delete('/name', gamesController.destroy )
