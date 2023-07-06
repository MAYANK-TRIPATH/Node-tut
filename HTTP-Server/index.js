 // Basic Web

 const http = require("http");

 const myServer = http.createServer((req, res) => {
    console.log("New req");
    res.end("Hello Server")
 });

 myServer.listen(8000, () => console.log("Server Started!"));



 // Making a log of request with time in server. 
const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: New Req Received\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
           case "/":
           res.end("HomePage");
           break;
           case "/about":
            res.end("I am Mayank");
            break;
            default:
                res.end("404 Not Found"); 
        }
    });
});

myServer.listen(8000, () => console.log("Server Started!"));