/**
 * Created by fm on 2017/3/27.
 */
module.exports=url=>{
    let apiMap={
        "/fruit.action":["apple","orange","pear"],
        "/color.action":["blue","green","red"]
    }
    return Promise.resolve(apiMap[url]);
}