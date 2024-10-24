const mongoose=require('mongoose');

const dbConnectiuon=async()=>{
    const mongoUrl='mongodb+srv://dnagender2019:Y16LPQvyGYpa58tx@cluster0.wpqrx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    try {
        await mongoose.connect(mongoUrl,{})
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log("error is",error)
        
    }
}

module.exports=dbConnectiuon;