/**
 * Created by fm on 2017/3/20.
 * 主要核心逻辑
 */

const staticServer=require("./staticServer");
class App{
    constructor(){
    }
    initServer(){
        // 初始化工作
        return (request,response)=>{
            let {url}=request;
            let body=staticServer(url);
            response.writeHead("200","it's ok now",{"X-powered-by":"Node.js"});
            response.end(body);
        }
    }
}
module.exports=App