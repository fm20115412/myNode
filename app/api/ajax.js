/**
 * Created by fm on 2017/5/11.
 */
let Router=require("./router")
let {$_saveBlog, $_saveCategory}=require("./mongo")
Router.get("/categoryList.action",ctx=>{return {a:1}})
Router.get("/category.action",ctx=>{})
Router.post("/blog.action",ctx=>{
    let blog=ctx.reqCtx.body
    return $_saveBlog(blog)
})
module.exports=Router