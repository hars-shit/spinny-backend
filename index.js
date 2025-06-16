const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const carRoutes=require("./routes/carRoutes.js")
const app=express()
const PORT=5000

app.use(cors())
app.use(express.json())

app.use("/api/cars",carRoutes);

mongoose.connect('mongodb+srv://upadhyayharshit05:7kBDgfDuNbc0cfIQ@cluster0.jujvf30.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

.then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch(err => console.error('MongoDB error:', err));