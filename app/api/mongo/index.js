/**
 * Created by fm on 2017/5/12.
 */
const mongoose=require("mongoose")
const {blogSchema,categorySchema}=require("./schema");
const BlogModel=mongoose.model("Blog",blogSchema)
const CategoryModel=mongoose.model("Category",categorySchema)

const $_saveBlog=blog=>{
    let condition={title:blog.title}
    blog.date=new Date().toLocaleString()
    return BlogModel.findOneAndUpdate(condition,blog,{
        upsert:true,
        new:true
    }).exec().then(_blog=>{
        return {
            status:1,
            data:_blog
        }
    })
}
const $_saveCategory=category=>{
    return CategoryModel.findOneAndUpdate({
        name:category.name
    },category,{
        upsert:true,
        new:true
    }).then(_category=>{
        return {
            status:1,
            data:_category
        }
    })
}
const $_getCategoryList=query=>{
    return CategoryModel.find(query).exec().then(
        categoryList=>{
            return {
                status:1,
                data:categoryList||[]
            }
    })
}
const $_getBlogDetail=query=>{
    let condition={
        _id:mongoose.Types.ObjectId(query.id)
    }
    return BlogModel.findOne(condition).then(blog=>{
        return {
            status:1,
            data:blog
        }
    })
}
const $_getBlogList=query=>{
    return CategoryModel.find(query).exec().then(
        blogList=>{
            return {
                status:1,
                data:blogList||[]
            }
        })
}
module.exports={
    $_saveBlog,
    $_saveCategory,
    $_getCategoryList,
    $_getBlogDetail,
    $_getBlogList
}