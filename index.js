const path = require('path')
require('dotenv').config()
const express = require('express')
const app = express()
const logger = require('morgan')
const router = require('./routers/homeRoutes')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')

// app configuration 
app.set('view engine','ejs')
app.set('views','./views')
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({
    extended:true
}))
app.use(logger('dev'))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))
app.use(cookieParser())
app.use(flash());

// app routing
app.use('/',router)


// app error handling
app.use((req,res)=>{
    res.status(404).send("<h1> Did not find that </h1>")
})
app.use((err,req,res,next)=>{
    res.status(500)
    res.send("<h1> Server internal error !! </h1>" + err.message + '<br><br> <a href="/">home</a>')
})

// running app
app.listen(3000,()=>{
    console.log(`express listening at 3000`)
})