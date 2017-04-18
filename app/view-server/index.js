/**
 * Created by fm on 2017/4/18.
 */
const ejs=require("ejs");
const fs=require("fs");
const path=require("path");
const mime=require("mime");

module.exports=(ctx)=>{
    let {req, resCtx} =ctx;
    let { url } =req;
    return  Promise.resolve({
        then:(resolve,reject)=>{
            let urlMap={
                "/":{viewName:"index.html"},
                "/about":{viewName:"about.html"}
            };
            let viewPath=path.resolve(process.cwd(),"public");
            if(urlMap[url]){
                let {viewName} =urlMap[url];
                let htmlpath=path.resolve(viewPath,viewName);
                resCtx.headers=Object.assign(resCtx.headers,
                    {
                        "Content-Type": mime.lookup(htmlpath)
                    })
                let render=ejs.compile(fs.readFileSync(htmlpath,"utf8"),{
                    compileDebug:true
                })
                resCtx.body=render({name:"lily"});
                resolve();
            }else{
                resolve();
            }
        }
    })

}
