const NotFoundError=(req,res,next)=>{
    res.status(404).json({
        statusCode:res.statusCode,
        error:{
            type:"not found",
            message:`not found ${req.url} route`
        }
    })
};

const ErrorHandler=(req,res,next)=>{
    res.json({
        statusCode:err.status,
        error:{
            message:err.message || "internal server error"
        }
    })
};

module.exports={
    NotFoundError,
    ErrorHandler
}