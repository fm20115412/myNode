/**
 * Created by fm on 2017/3/28.
 */
// sh ./db.sh
/*
var p1=new Promise(function (resolve,reject) {
    setTimeout(()=>reject(new Error("fail")),3000)
})
var p2=new Promise(function (resolve,reject) {
    setTimeout(()=>resolve(p1),1000)
})

p2.then(result=> {
    console.log(result)
    console.log(p1);
    console.log(p2);
}
);

p2.catch(error=>{
    console.log(error)
    console.log(p1);
    console.log(p2);
});*/
/*
var p=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"hello world");
})
console.log(p);
var another=p.then(val=>{console.log(val);
return "great"});
setTimeout(()=>console.log(another),5000);*/
var a=["hello","world"];
console.log(a);
var b=JSON.stringify(a);
console.log(b);
var c=JSON.parse(b);
console.log(c);