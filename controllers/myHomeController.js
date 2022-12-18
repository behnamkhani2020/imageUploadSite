
const Image = require('../models/Image')

const get = async (req,res)=>{
    try{
        const images = await Image.findAll()
        res.render('home',{
            images : images ,
            flashMessages : req.flash('info'),
            baseUrl : `${req.protocol}://${req.get('host')}/`
        })
    }catch(err){
        console.log(err)
        res.send('<h2> An internal error ecurred !! </h2><h3>'+error.message+'</h3>')
    }
}

const post = async (req,res)=>{
    try {
        await Image.create({
            name : req.file.filename,
            created_at : Date.now()
        })
        const images = await Image.findAll()
        req.flash('info','Upload was successfull')
        res.render('home',{
            images : images,
            flashMessages : req.flash('info'),
            baseUrl : `${req.protocol}://${req.get('host')}/`
        })
    } catch (error) {
        console.log(error)
        res.send('<h2> An internal error ecurred !! </h2><h3>'+error.message+'</h3>')
    }
}

module.exports = {
    get,
    post
}