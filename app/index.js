/**
 * Created by fm on 2017/3/20.
 * 主要核心逻辑
 */

const staticServer=require("./staticServer");
const apiServer=require("./api");
const urlParser=require("./url-parser");
class App{
    constructor(){
    }
    initServer(){
        // 初始化工作
        return (request,response)=>{
            request.contxt={
                body:"",
                query:{},
                method:"get"
            };
            urlParser(request).then(()=>{
                 return apiServer(request).then(val=>{
                    if(!val){
                        return staticServer(request);
                    }
                    else{
                        return val;
                    }
                }).then(val=>{
                    let base={"X-powered-by":"Node.js"};
                    let body="";
                    if(val instanceof Buffer){
                        body=val;
                    }else{
                        body=JSON.stringify(val);
                        let finalHeader=Object.assign(base,{"Content-Type":"application/json"});
                        response.writeHead(200,"ok",finalHeader);
                    };
                    response.end(body);
                })
            })


        }
    }
}
module.exports=App