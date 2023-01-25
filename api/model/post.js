const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
       
    },
    desc:{
        type:String,
        unique:true,
    },
    photo:{
        type:String,
        unique:false,
    },
    username:{
        type:String,
        required:true,
    },
    categories:{
        type:Array,
        required:false,
    },
},{
    timestamps:true,
});

//Export the model
module.exports = mongoose.model('Post', PostSchema);