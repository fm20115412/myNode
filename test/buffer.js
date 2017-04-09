/**
 * Created by fm on 2017/4/5.
 */
const fs=require("fs");
let data=fs.createReadStream("./test/tmp",{
    highWaterMark:11,
});
let out=[];
data.on("data",(chunk)=>{
    out.push(chunk);
}).on("end",()=>{
    var buf=Buffer.concat(out);
    console.log(buf.toString());
});