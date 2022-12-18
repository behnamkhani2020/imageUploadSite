
const Image = require('../models/Image')
const path = require('path')
const fs = require('fs')

const get = async (req,res)=>{
    try {
        const imageToDelete = await Image.findByPk(req.params.id)
        await Image.destroy({
            where:{
                id : imageToDelete.id
            }
        })
        await fs.unlinkSync(path.join(__dirname,'../public/uploads',imageToDelete.name))
        const images = await Image.findAll()
        req.flash('info','Deleted successfully!!')
        res.render('home',{
            images : images,
            flashMessages : req.flash('info'),
            baseUrl : `${req.protocol}://${req.get('host')}/`
        }) 
    } catch (error) {
        console.log(error)
        res.send('<h2> An error has ecurred !!</h2><h3>'+error.message+"</h3><h4> no such record in DB </h4>")
    }
}

module.exports = {
    get
}