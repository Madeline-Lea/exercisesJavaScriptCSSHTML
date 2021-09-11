let http = require("http")
const { endianness } = require("os")

http.createServer((req, res) => {
res.writeHead(200, {"Content-type":"text/plain"})

switch(req.url){
    case "/":
        res.end("You are in our home page!")
        break;
        case "/contact":
        res.end("You are in our contact page!")
        break;
        default: 
        res.end("You are in our server... you found a secret! Oh gosh! You are amazing")
        break;
}}).listen(3000)