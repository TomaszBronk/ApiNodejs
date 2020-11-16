//const http = require('http');
//const json5 = require('json5');

const PORT = 3000;
const express = require('express');

const app = express();

// GET /
app.get('/', (req, res) => {
res.send('Hello, world!') // default: 200, text/html
});

app.get('/ping', (req, res) => {
res.json({status: 'ok'});
//res.status(201).json({status: 'ok'});
});



app.listen(PORT);



/*http.createServer(function(request, response){
const responseData = {
status: 'ok!'

};
response.writeHead(200, {
  'Content-Type': 'application/json'
});
response.end(JSON.stringify(responseData));
}).listen(PORT);

console.log(`Node server is running on port ${PORT}`);*/