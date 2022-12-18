const express = require('express')
const router = express.Router()
const myHomeController = require('../controllers/myHomeController')
const deleteController = require('../controllers/deleteController')
const upload = require('../src/utils/uploader')
const resize = require('../src/utils/resize')

router.get('/',myHomeController.get)
router.get('/upload',(req,res)=>{res.redirect('/')})
router.post('/upload',upload.single('img'),resize,myHomeController.post)
router.get('/delete',(req,res)=>{res.redirect('/')})
router.get('/delete/:id',deleteController.get)

module.exports = router