/**
 * Created by fm on 2017/3/27.
 */
let Router=require("./ajax")
module.exports=(ctx)=>{
    let {pathname,method}=ctx.reqCtx
    let { reqCtx,resCtx,res } =ctx;
    return Promise.resolve({
        then:(resolve,reject)=>{
            if(pathname.match("action")) {
                return Router.routes(ctx).then(val=>{
                    resCtx.body=JSON.stringify(val)
                    resCtx.headers=Object.assign(resCtx.headers,{
                        "Content-Type":"application/json"
                    })
                    resolve()
                })
            }
                resolve();
            }
    })

}