/**
 * Created by fm on 2017/4/20.
 */
const cookie_parser=require("cookie");
// 设置白名单
const whiteNameList=["/name_babybear"]
module.exports=(ctx)=>{
    let {url}=ctx.req;
    let {cookie}=ctx.req.headers;
    let {res,resCtx}=ctx;
    let cookieObj=cookie_parser.parse(cookie);
    return Promise.resolve({
        then:(resolve,reject)=>{
            let cookieStr=time=>`user=babybear;Max-Age=${time}`;
            if(cookieObj["user"]){
                resCtx.hasUser=true;
                res.setHeader("Set-Cookie",cookieStr(3600));
            }

            if(whiteNameList.indexOf(url)>-1){
                res.setHeader("Set-Cookie",cookieStr(3600))
            }
            if(url=="/logout"){
                res.setHeader("Set-Cookie",cookieStr(0));
            }
            resolve();
        }
    })
}