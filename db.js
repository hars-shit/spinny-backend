async function connectDB() {
   try{

       await mongoose.connect(
           'mongodb+srv://upadhyayharshit05:7kBDgfDuNbc0cfIQ@cluster0.jujvf30.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
           { useNewUrlParser: true, useUnifiedTopology: true }
        );
    }
    catch(err){   
        console.log("Connected to MongoDB");
    }
  }

module.exports=connectDB