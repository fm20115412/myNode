/**
 * Created by fm on 2017/3/26.
 */
const fs=require("fs");
const path=require("path");
let getPath=url=>path.resolve(process.cwd(),"public",`.${url}`);
let staticFunc=(ctx)=>{
    let {url}=ctx.req;
    let {resCtx}=ctx;
    return new Promise((resolve,reject)=>{
        if(!url.match("action")){
            if(url=="/"){
                url="/index.html";
            }
            let _path=getPath(url);
            fs.readFile(_path,(err,data)=>{
                if(err){
                    resCtx.body=`Not Found${err.stack}`;
                }else{
                    resCtx.body=data;
                    resolve();
                }
            });
        }else{
            resolve();
        }
    })
}
module.exports=staticFunc;