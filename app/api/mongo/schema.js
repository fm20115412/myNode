/**
 * Created by fm on 2017/5/12.
 */
const {Schema}=require("mongoose")
exports.blogSchema=new Schema({
    title:String,
    content:String,
    rawContent:String,
    category:String,
    date:{
        type:String,
        default:()=>{
            return new Date().toLocaleString();
        }
    }
})
exports.categorySchema=new Schema({
    category:String,
    _id:String
})