//const http = require('http');
//const json5 = require('json5');

const PORT = 3000;
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// GET /
app.get('/', (req, res) => {
res.send('Hello, world!'); // default: 200, text/html
});

app.post('/', (req, res) => {
console.log(JSON.stringify(req.body, null, 2));
res.json({ok: true});
});

app.get('/ping', (req, res) => {
res.json({status: 'ok'});
//res.status(201).json({status: 'ok'});
});

app.listen(PORT), (err)=>{
if (err){
console.log.apply('Error!');
throw err;
} else{
  console.log(`Node server is running on port ${PORT}`)
}

};



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