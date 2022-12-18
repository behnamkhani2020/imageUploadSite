const { DataTypes } = require('sequelize')
const DB = require('../DB/config')

const Image = DB.define('images',{
    name : {
        type : DataTypes.STRING
    },
    created_at : {
        type : DataTypes.DATE
    }
},{
    tableName : 'images',
    timestamps : false
})

module.exports = Image