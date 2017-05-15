/**
 * Created by fm on 2017/3/27.
 */
let Router=require("./ajax")
module.exports=(ctx)=>{
    let {pathname,method}=ctx.reqCtx
    let { reqCtx,resCtx,res } =ctx;
    if(!pathname.match(/\.action/)){
        return Promise.resolve()
    }
    return Router.routes(ctx).then(val=>{
        if(val){
            resCtx.statusCode=200;
            resCtx.headers=Object.assign(resCtx.headers,{
                "Content-Type":"application/json"
            })
            resCtx.body=JSON.stringify(val)
        }
    }).catch(err=>{
        resCtx.statusCode=400
        resCtx.body=`${err.name}+${err.stack}`;
    })
}