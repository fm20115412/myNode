/**
 * Created by fm on 2017/3/26.
 */
const fs=require("fs");
const path=require("path");
let getPath=url=>path.resolve(process.cwd(),"public",`.${url}`);
let staticFunc=(url)=>{
    if(url=="/"){
        url="/index.html";
    }
    let _path=getPath(url);
    let body="";
    try{
        body=fs.readFileSync(_path);
    }catch(error){
        body="Not found";
    }
    return body;
}
module.exports=staticFunc;