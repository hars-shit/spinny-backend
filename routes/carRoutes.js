const express=require("express")
const Car = require("../models/Car")
const router=express.Router()


router.post("/submit",async(req,res)=>{
    try{
        const newCar=new Car(req.body)
        await newCar.save()
        res.status(201).json({message:"Form submitted Successfully"})
    }
    catch(err){
        res.status(500).json({error:`Failed TO submit form ${err}`})
    }
})
router.get('/all', async (req, res) => {
    try {
      const cars = await Car.find().sort({ createdAt: -1 });
      res.status(200).json(cars);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch cars' });
    }
  });
  
  module.exports = router;