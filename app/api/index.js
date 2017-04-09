/**
 * Created by fm on 2017/3/27.
 */
module.exports=(ctx)=>{
    let {url,method}=ctx.req;
    let { reqCtx,resCtx,res } =ctx;
    let apiMap={
        "/fruit.action":["apple","orange","pear"],
        "/color.action":["blue","green","red"]
    }
    method=method.toLowerCase();
    if(url.match("action")){
        if(method=='get'){
            resCtx.body=JSON.stringify(apiMap[url]);
        }else{
            resCtx.body=JSON.stringify(reqCtx.body);
        }
        resCtx.headers=Object.assign(resCtx.headers,{
            "Content-Type":"application/json",
        })
    }
    return Promise.resolve();
}