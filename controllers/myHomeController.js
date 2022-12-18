
const Image = require('../models/Image')


const get = async (req,res)=>{
    const images = await Image.findAll()
    console.log(images)
    res.render('home',{
        images : images 
    })
}

const post = async (req,res)=>{
    await Image.create({
        name : req.file.filename,
        created_at : Date.now()
    })
    const images = await Image.findAll()
    res.render('home',{
        images : images
    })
}

module.exports = {
    get,
    post
}