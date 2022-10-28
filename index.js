const http = require('http')
const fs= require("fs");
let homeContent="";
let fileContent="";
let reg="";
fs.readFile("home.html",
(err,home) => {
if(err){
    throw err;
}
homeContent=home;
});

fs.readFile("project.html",
(err,fil) => {
    if(err)
    {
        throw err;
    }
   fileContent=fil;
})
fs.readFile("registration.html",
(err,regf) => {
    if(err)
    {
        throw err;
    }
 reg=regf;
})
let args=require("minimist")(process.argv.slice(2));
http.createServer((request,response) =>{
    let url =request.url
    response.writeHeader(200,{"Content-type":"text/html"})
    switch (url)
    {
        case "/project":
            response.write(fileContent)
            response.end();
            break
        case "/registration":
            response.write(reg)
            response.end();
            break;
        default:
            response.write(homeContent)
            response.end();
            break;
    }
}).listen(args["port"]);
