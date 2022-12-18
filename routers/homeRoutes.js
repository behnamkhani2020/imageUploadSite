const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    console.log('rendering')
    res.render('home')
})

module.exports = router