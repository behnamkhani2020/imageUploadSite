const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const resize = async(req,res,next)=>{
    await sharp(req.file.path)
    .resize(400)
    .toFile(path.join(__dirname,'../../public/uploads',req.file.filename))
    await fs.unlinkSync(req.file.path)
    next()
}

module.exports = resize