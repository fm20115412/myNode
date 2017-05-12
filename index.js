
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
const cookieServer=require("./app/cookie-parser");

server.use(urlParser);
server.use(cookieServer);
server.use(apiServer);
server.use(staticServer);
server.use(viewServer);

const mongoose = require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/blogDB');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('we are connected')
});

http.createServer(server.initServer()).listen(PORT,()=>{
    console.log('server listening on port 7000')
});