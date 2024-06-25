const mongoose = require('mongoose')

const urlSchema= new mongoose.Schema({
    shortId: {
        type: String,
        required:true,
        unique:true
    },
    originalLink:{
        type: String,
        required:true,
    },
    visitHistory:[{timmestamp: {type:Number}}]

},{timmestamps:true})

const URL = mongoose.model("url",urlSchema)

module.exports=URL;