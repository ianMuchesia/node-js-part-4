const express = require('express')

const router = express.Router()

const {login , dashboard} = require('../controllers/index')
const authenticationMiddleWare = require('../middleware/auth')

router.route('/dashboard').get( authenticationMiddleWare,dashboard)
router.post('/login', login)


module.exports = router