const { default: mongoose, model } = require("mongoose");

const detailsSchema =  mongoose.Schema(
    {
        _id:{
            type:String,
            require:true
        },
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true
        },
        mobile:{
            type:Number,
            require:true
        }
    }
)

module.exports = mongoose.model('Details',detailsSchema,'Details')