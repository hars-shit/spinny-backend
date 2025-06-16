const { default: mongoose } = require("mongoose");

const connectDB=async()=> {
   try{

       await mongoose.connect(
           'mongodb+srv://upadhyayharshit05:7kBDgfDuNbc0cfIQ@cluster0.jujvf30.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' 
        );
        console.log("Connected to MongoDB");
    }
    catch(err){  
        console.log("Error while connecting db",err) 
    }
  }
module.exports=connectDB