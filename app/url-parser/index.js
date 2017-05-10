/**
 * Created by fm on 2017/4/3.
 */
const URL=require("url")
module.exports=(ctx)=>{
    let {req,reqCtx}=ctx;
    let {method,url}=ctx.req;
    method=method.toLowerCase();
    Object.assign(reqCtx,URL.parse(url,true),method)
    debugger
    return Promise.resolve({
        then:(resolve,reject)=>{
            if(method =="post"){
                let data=[];
                req.on("data",chunk=>{
                    data.push(chunk);
                }).on("end",()=>{
                    reqCtx.body=JSON.parse(Buffer.concat(data).toString());
                    resolve();
                })
            }else{
                resolve();
            }
        }
    })
}