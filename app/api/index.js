/**
 * Created by fm on 2017/3/27.
 */
module.exports=(ctx)=>{
    let {pathname,method}=ctx.reqCtx
    let { reqCtx,resCtx,res } =ctx;
    let apiMap={
        "/fruit.action":["apple","orange","pear"],
        "/color.action":["blue","green","red"]
    }
    debugger
    return Promise.resolve({
        then:(resolve,reject)=>{
            if(pathname.match("action")) {
                if (method == 'get') {
                    resCtx.body = JSON.stringify(apiMap[pathname]);
                } else {
                    resCtx.body = JSON.stringify(reqCtx.body);
                }
                resCtx.headers = Object.assign(resCtx.headers, {
                    "Content-Type": "application/json",
                })
            }
                resolve();
            }
    })

}