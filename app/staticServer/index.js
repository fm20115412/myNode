/**
 * Created by fm on 2017/3/26.
 */
const fs=require("fs");
const path=require("path");
const mime=require("mime");
let getPath=pathname=>path.resolve(process.cwd(),"public",`.${pathname}`);
let staticFunc=(ctx)=>{
    let {pathname}=ctx.reqCtx;
    let {resCtx}=ctx;
    debugger
    return new Promise((resolve,reject)=>{
        if(pathname.match(/\./) && !pathname.match("action")){
            let _path=getPath(pathname);
            resCtx.headers=Object.assign(resCtx.headers,
                {
                    "Content-Type":mime.lookup(_path)
                })
            fs.readFile(_path,(err,data)=>{
                if(err){
                    resCtx.body=`Not Found${err.stack}`;
                }
                    resCtx.body=data;
                    resolve();
            });
        }else{
            resolve();
        }
    })
}
module.exports=staticFunc;