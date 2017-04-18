
/**
 * Created by fm on 2017/3/19.
 */
const http=require("http");
const PORT=7000;
const App=require("./app");
const server=new App();

const staticServer = require("./app/staticServer");
const apiServer = require("./app/api");
const urlParser = require("./app/url-parser");
const viewServer=require("./app/view-server");
server.use(viewServer);

server.use(urlParser);
server.use(apiServer);
server.use(staticServer);


http.createServer(server.initServer()).listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`)
});