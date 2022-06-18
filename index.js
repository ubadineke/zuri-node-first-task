const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    // Build File Path
// let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html': req.url);

let filePath = './public/';
switch(req.url){
     case '/':
         filePath += 'index.html';
         break;
    case '/contact-me':
        filePath += 'contact.html';
        break;
     case '/about':
        filePath += 'about.html';
        break;
    case '/home':
        res.statusCode = 301;
        res.setHeader('location', '/');
        res.end();
 }

// Read and Render File
fs.readFile(filePath, (err, data) => {
    if(err){
        console.log(err);
        res.end();
    } else{
        res.end(data);
    }
});
});

server.listen(3000, 'localhost' , () => {
    console.log("Server running on PORT")
});