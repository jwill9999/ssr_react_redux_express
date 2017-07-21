const express = require('express')
const router = express.Router()

const universalLoader = require('../universal')

//uses universalLoader to render react JavaScript files
router.get('/', universalLoader)

module.exports = router
