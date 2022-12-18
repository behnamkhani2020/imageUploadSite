const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../../tmp_images'))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.')[1])
    }
})
const upload = multer({ storage: storage ,
                        fileFilter: function (req, file, callback) {
                            var ext = path.extname(file.originalname);
                            if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
                                return callback(new Error('Only images (jpg,png,gif) are allowed'))
                            }
                            callback(null, true)
                        }
})

module.exports = upload