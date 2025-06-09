const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/project1');
const userSchema=mongoose.Schema({
    name:String,
    username:String,
    email:String,
    password:String,
    image:{
        type:String,
        default:"default.webp"
    },
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"
    }]
})

module.exports=mongoose.model("user",userSchema)