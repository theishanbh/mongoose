const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Name:{
        type:String
    },
    Gender:{
        type:Boolean,
        default:true
    }
})

const User = mongoose.model("User", UserSchema);
const Ishan = new User({Name:"Ishan"})
console.log(Ishan);