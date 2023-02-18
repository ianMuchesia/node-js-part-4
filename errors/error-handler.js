const errorHandlerMiddleware = async(err, req, next)=>{
    return res.status(500).json({msg: "Something wrong happened , try again later"})
}


module.exports = errorHandlerMiddleware;