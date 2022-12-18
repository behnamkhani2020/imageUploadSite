
const Image = require('../models/Image')


const get = async (req,res)=>{
    await Image.create({
        name : 'hello',
        created_at : Date.now()
    })
    res.render('home')
}

const post = async (req,res)=>{
    console.log(req.body)
    console.log(req.file.filename)
    res.send('uploaded')
}

module.exports = {
    get,
    post
}