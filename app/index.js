/**
 * Created by fm on 2017/3/20.
 * 主要核心逻辑
 */
class App{
    constructor(){
        this.middlewareArr=[];
        this.middlewareChain=Promise.resolve();
    }
    use(middleware){
        this.middlewareArr.push(middleware);
    }
    composeMiddleWare(context){
        let {middlewareArr}=this;
        for(let middleware of middlewareArr){
            this.middlewareChain=this.middlewareChain.then(()=>
                middleware(context)
            );
        }
        return this.middlewareChain;
    }
    initServer(){
        // 初始化工作
        return (request,response)=>{
            let context={
                req:request,
                reqCtx:{
                    body:"",   //post请求的数据
                    query:{}   // 处理客户端get请求
                },
                res:response,
                resCtx:{
                    hasUser:false,
                    statusMessage:"ok",
                    statusCode:"200",
                    headers:{},   //response的返回报文
                    body:"",      // 返回给前端的内容区域
                }
            }
            this.composeMiddleWare(context)
                .then(()=> {
                    let {headers,body,statusCode,statusMessage}=context.resCtx;
                    let base={"X-powered-by":"Node.js"};
                    context.res.writeHead(statusCode,statusMessage,Object.assign(base,headers));
                    context.res.end(body);
            })
        }
    }
}
module.exports=App