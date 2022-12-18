const path = require('path')
require('dotenv').config()
const express = require('express')
const app = express()
const logger = require('morgan')
const router = require('./routers/homeRoutes')

console.log(process.env)
console.log(path.join(__dirname,'variables.env'))
app.set('view engine','ejs')
app.set('views','./views')
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({
    extended:true
}))
app.use(logger('dev'))

app.use('/',router)

app.use((req,res)=>{
    res.status(404).send("<h1> Did not find that </h1>")
})
app.use((err,req,res,next)=>{
    res.status(500)
    res.send("<h1> Server internal error !! </h1>")
})

app.listen(process.env.PORT,()=>{
    console.log(`express listening at ${process.env.PORT}`)
})