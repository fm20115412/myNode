/**
 * Created by fm on 2017/4/3.
 */
module.exports=(request)=>{
    let {method,url,contxt}=request;
    method=method.toLowerCase();
    return new Promise((resolve,reject)=>{
        if(method =="post"){
            contxt.method=method;
            let data="";
            request.on("data",chunk=>{
                data+=chunk;
            }).on("end",()=>{
                contxt.body=JSON.parse(data);
                resolve();
            })
        }else{
            resolve();
        }
    })
}