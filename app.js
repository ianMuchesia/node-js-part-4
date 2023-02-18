const express = require('express')
require('dotenv').config()
require('express-async-errors')

const app = express()

const errorHandlerMiddleware = require('./errors/error-handler')
const notFound = require('./errors/notFound')

//middleware
app.use(express.static('./public'))
app.use(express.json())



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

