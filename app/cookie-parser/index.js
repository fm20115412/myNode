/**
 * Created by fm on 2017/4/20.
 */
const cookie_parser=require("cookie");
// 设置白名单
const whiteNameList=["/name_babybear"]
module.exports=(ctx)=>{
    let {pathname}=ctx.reqCtx;
    let {cookie}=ctx.req.headers;
    let {res,resCtx}=ctx;
    let cookieObj=cookie_parser.parse(cookie);
    debugger
    return Promise.resolve({
        then:(resolve,reject)=>{
            let cookieStr=time=>`user=babybear;Max-Age=${time}`;
            if(cookieObj["user"]){
                resCtx.hasUser=true;
                res.setHeader("Set-Cookie",cookieStr(3600));
            }
            if(whiteNameList.indexOf(pathname)>-1){
                res.setHeader("Set-Cookie",cookieStr(3600))
            }
            if(pathname=="/logout"){
                res.setHeader("Set-Cookie",cookieStr(0));
            }
            resolve();
        }
    })
}