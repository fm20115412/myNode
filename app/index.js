/**
 * Created by fm on 2017/3/20.
 * 主要核心逻辑
 */

const staticServer=require("./staticServer");
const apiServer=require("./api");
class App{
    constructor(){
    }
    initServer(){
        // 初始化工作
        return (request,response)=>{
            let {url}=request;
            let body="";
            let headers={};
            if(url.match(".action")){
                apiServer(url).then(val=>{
                    body=JSON.stringify(val);
                    headers={"Content-Type":"application/json"}
                    let finalHeaders=Object.assign(headers,{"X-powered-by":"Node.js"});
                    response.writeHead("200","it's ok now",finalHeaders);
                    response.end(body);
                });
            }
            else{
                staticServer(url).then((body)=>{
                    let finalHeaders=Object.assign(headers,{"X-powered-by":"Node.js"});
                    response.writeHead("200","it's ok now",finalHeaders);
                    response.end(body);
                });
            }

        }
    }
}
module.exports=App