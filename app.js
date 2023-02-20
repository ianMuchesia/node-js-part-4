const express = require('express')
require('dotenv').config()
require('express-async-errors')

const app = express()

const mainRouter = require('./routes/route')
//middleware
app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1', mainRouter)
const errorHandlerMiddleware = require('./errors/error-handler')
const notFound = require('./errors/notFound')





const start=async()=>{
    try{
        app.listen(3000, ()=>{
            console.log("connected")
        })
    }catch(error){
        console.log(error)
    }
}

start()

