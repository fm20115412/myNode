/**
 * Created by fm on 2017/3/26.
 */
const fs=require("fs");
const path=require("path");
let getPath=url=>path.resolve(process.cwd(),"public",`.${url}`);
let staticFunc=(request)=>{
    let {url}=request;
    return new Promise((resolve,reject)=>{
        if(url=="/"){
            url="/index.html";
        }
        let _path=getPath(url);
        let body=fs.readFile(_path,(err,data)=>{
            if(err){
                reject(`Not Found${err.stack}`)
            }
            resolve(data);
        });
    })
}
module.exports=staticFunc;