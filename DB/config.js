const Sequelize = require('sequelize')

const sequelize = new Sequelize('imageUpload', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const DBconnect = async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

DBconnect()



module.exports = sequelize