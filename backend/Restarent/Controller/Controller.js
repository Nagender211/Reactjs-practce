const UserData=require('../models/form.js')
const sendForm=async(req,res)=>{
    const {firstName,lastName,email,phone}=req.body;
    if(!firstName || !lastName|| !email || !phone){
        return res.status(400).json({error:"All fields are required"})

    }
    try {
        const newUser= await UserData.create({firstName,lastName,email,phone});
        res.status(201).json({
            message: "registeation succesfulyy add!!",
            userId: newUser._id,
        })
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }

}
const updateForm=async(req,res)=>{
    const {firstName,lastName,email,phone}=req.body;
    const {id}=req.params;
    try {
        const user=await UserData.findByIdAndUpdate(id,{firstName,lastName,email,phone},{new: true});
        res.set(201).json({
            message: "registeation succesfulyy updated!!",
            data: user
        })

        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const home=async(req,res)=>{
    const {id}=req.params
    try {
        const user=await UserData.findById(id);
        res.status(200).json({
            message: "this are the data ",
            data:user
        })
        
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
}
const getUser=async(req,res)=>{
    const user=await UserData.find();
    res.status(200).json({
        message: "this are the data ",
        data:user
    })

}
module.exports={
    sendForm,
    home,
    updateForm,
    getUser
 
}