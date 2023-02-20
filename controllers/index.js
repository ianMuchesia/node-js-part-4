const CustomAPIError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')
const login = async(req, res)=>{
    //check username and password
    const {username, password } = req.body
  
    if(!username || !password) {
        throw new CustomAPIError('please provide username and password', 400)
    }

    //just for demo , usually provided by the database
    const id = new Date().getDate()

    //just for demo in production use long and complex string
    //try to keep payload, as it is a better experience for the user
    const token = jwt.sign({id,username}, process.env.JWT_SECRET,{expiresIn:'30d'})

    res.status(200).json({msg:'user created', token})
}


const dashboard = async (req, res)=>{

    const {authorization}  = req.headers;

    if(!authorization || !authorization.startsWith('Bearer')){
        throw new CustomAPIError("No token Provided ", 400)
    }


    const token = authorization.split(' ')[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decoded)
        const luckyNumber = Math.floor(Math.random() * 100)
        res.status(200).json({msg:`Hello ${decoded.username}`, secret:`here is your lucky number ${luckyNumber}`})
    } catch (error) {
        throw new CustomAPIError("Not authorized to accesss this route", 401)     
    }



   
}


module.exports = {
    login, dashboard
}