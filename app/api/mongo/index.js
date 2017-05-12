/**
 * Created by fm on 2017/5/12.
 */
const mongoose=require("mongoose")
const {blogSchema,categorySchema}=require("./schema");
const BlogModal=mongoose.model("blog",blogSchema)
const CategoryModal=mongoose.model("Category",categorySchema)

const $_saveBlog=blog=>{
    return new BlogModal.findOneAndUpdate({title:blog.title},blog,{
        upsert:true
    }).exec().then(_blog=>{
        return {
            status:1,
            data:blog
        }
    })
}
const $_saveCategory=category=>{
    return new CategoryModal.findOneAndUpdate({name:category.name},category,{
        upsert:true
    }).exec().then(_category=>{
        return {
            status:1,
            data:_category
        }
    })
}
module.exports={
    $_saveBlog,
    $_saveCategory
}