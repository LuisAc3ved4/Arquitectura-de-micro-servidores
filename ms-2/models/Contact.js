const mongoose = require("mongoose");


const contactSchema = new mongoose.Schema({
    userId : {type:String, require:true},
    name : String,
    phone: String,
    email: String
});

module.exports = mongoose.model("Contact",contactSchema);