/**
 * Created by fm on 2017/4/3.
 */
module.exports=(ctx)=>{
    let {req,reqCtx}=ctx;
    let {method}=ctx.req;
    method=method.toLowerCase();
    return new Promise((resolve,reject)=>{
        if(method =="post"){
            let data="";
            req.on("data",chunk=>{
                data+=chunk;
            }).on("end",()=>{
                reqCtx.body=JSON.parse(data);
                resolve();
            })
        }else{
            resolve();
        }
    })
}