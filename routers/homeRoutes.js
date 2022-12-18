const express = require('express')
const router = express.Router()
const myHomeController = require('../controllers/myHomeController')
const upload = require('../src/utils/uploader')
const resize = require('../src/utils/resize')

router.get('/',myHomeController.get)
router.post('/upload',upload.single('img'),resize,myHomeController.post)

module.exports = router