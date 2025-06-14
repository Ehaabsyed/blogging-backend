const mongoose=require('mongoose')

const PostSchema=mongoose.Schema({
    // 
    user:String,
    date:{
        type:Date,
        default:Date.now
    },
    image:{
        type:String,
        default:"default.webp"
    },
    title:String,
    content:String,
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }]
   
})

module.exports=mongoose.model("post",PostSchema)