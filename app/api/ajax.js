/**
 * Created by fm on 2017/5/11.
 */
let Router=require("./router")
let {$_saveBlog,
    $_saveCategory,
    $_getCategoryList,
    $_getBlogDetail,
    $_getBlogList,
    $_deleteBlog}=require("./mongo")
Router.get("/categoryList.action",ctx=>{
    return $_getCategoryList()
})
Router.post("/category.action",ctx=>{
    let category=ctx.reqCtx.body
    return $_saveCategory(category)
})
// 添加博客
Router.post("/blog.action",ctx=>{
    let blog=ctx.reqCtx.body
    return $_saveBlog(blog)
})
Router.get("/blogDetail.action",ctx=>{
    let {query}=ctx.reqCtx
    return $_getBlogDetail(query)
})
Router.get("/blogList.action",ctx=>{
    let {query}=ctx.reqCtx
    return $_getBlogList(query)
})
Router.post("./deleteBlog.action",ctx=>{
    let {body}=ctx.reqCtx
    return $_deleteBlog(blog)
})
module.exports=Router