/**
 * Created by fm on 2017/3/27.
 */
module.exports=(request)=>{
    let {url,method,contxt}=request;
    let apiMap={
        "/fruit.action":["apple","orange","pear"],
        "/color.action":["blue","green","red"]
    }
    method=method.toLowerCase();
    if(method=='get'){
        return Promise.resolve(apiMap[url]);
    }else{
        return Promise.resolve(contxt.body);
    }

}