
/**
 * Created by fm on 2017/3/19.
 */
const http=require("http");
const PORT=7000;
const App=require("./app");
const server=new App();
http.createServer(server.initServer()).listen(PORT,()=>{
    debugger;
    console.log(server.initServer);
    console.log(`server listening on port ${PORT}`)
});