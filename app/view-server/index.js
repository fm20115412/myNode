/**
 * Created by fm on 2017/4/18.
 */
const ejs=require("ejs");
const fs=require("fs");
const path=require("path");
const mime=require("mime");
const urlrewriteMap=require("./urlrewrite");

module.exports=(ctx)=>{
    let {req, resCtx} =ctx;
    let { url } =req;
    return  Promise.resolve({
        then:(resolve,reject)=>{
           if(url.match(".action")|| url.match(/\./)){
               resolve()
           }
           else{
               const viewPath=path.resolve(__dirname,"ejs");
               let ejsName=urlrewriteMap[url];
               if(ejsName){
                   let layoutPath=path.resolve(viewPath,"layout.ejs")
                   let layoutHtml=fs.readFileSync(layoutPath,"utf8");
                   let render=ejs.compile(layoutHtml,{
                       compileDebug:true,
                       filename:layoutPath
                   })
                   resCtx.headers=Object.assign(resCtx.headers,{
                       "Content-Type":"text/html"
                   })
                   resCtx.body=render({
                       templateName:ejsName,
                       hasUser:resCtx.hasUser
                   });
                   resolve();
               }
               else{
                   resCtx.headers=Object.assign(resCtx.headers,{
                       "Location":"/"
                   })
                   resCtx.statusCode=302;
                   resCtx.statusMessage="Found";
                   resCtx.body="";
                   resolve();
               }
           }
        }
    })
}
