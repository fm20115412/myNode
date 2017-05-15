/**
 * Created by fm on 2017/5/12.
 */
const {Schema}=require("mongoose")
const categorySchema=new Schema({
    name:String,
    id:String
})
const blogSchema=new Schema({
    title:String,
    content:String,
    rawContent:String,
    category:categorySchema,
    date:String
},{
    _id:false,
    strict:false
})
module.exports={
    blogSchema,
    categorySchema
}