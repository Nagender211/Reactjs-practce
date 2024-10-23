const getTodo=(req,res)=>{
    res.status(200).json({
        message: "this are found in the server"
    })
}
module.exports={
    getTodo,
}