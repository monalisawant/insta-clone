const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    File:{
        type: String,
        require: true
    },
    Namee: {
        type: String,
        require: true
    },
    Location: {
        type: String,
        require: true
    },
    Description: {
        type: String,
        require: true
    },
    like:{
        type:Number,
        require:true
    },
    fulldate:{
        type:String,
        require:true
    }
})



const User = mongoose.model('USER', userSchema);
module.exports = User;