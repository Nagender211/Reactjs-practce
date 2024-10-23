const mongoose=require('mongoose');

const dbConnection=async()=>{
    const mongoUrl='mongodb+srv://dnagender2019:94Si9LGiUdb69hVN@cluster0.g8kj4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    try {
        await mongoose.connect(mongoUrl,{useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Connected to MongoDB');
        
    } catch (error) {
        console.error('Failed to connect to MongoDB',error.message);
    
        
    }
}

module.exports=dbConnection;