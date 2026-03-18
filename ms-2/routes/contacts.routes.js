const express = require('express'); 
const router = express.Router();    
const Contact = require("../models/Contact");
const auth = require("../middleware/auth.middleware");

router.use(auth);

router.post("/",async (req,res)=>{
    const contact = await Contact.create({
        userId: req.user.id,
        ...req.body

    });
    res.status(201).json(contact);
});

router.get("/",async (req,res)=>{
    const contact = await Contact.find({userId:req.userId});
    res.status(200).json(contact);
});


module.exports = router;