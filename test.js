/**
 * Created by fm on 2017/3/28.
 */
/*
function timeout(ms) {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms,"done");
    });
}
timeout(100).then(value=>console.log(value));*/
let p=new Promise((resolve,reject)=>{
    setTimeout(reject,1000,"hello world");
});
console.log(p);
p.then(val=>console.log(`resolve val is ${val}`),
    val=>console.log(`reject val is ${val}`));
setTimeout(()=>p.catch(val=>console.log(`catch val is ${val}`)),7000)
