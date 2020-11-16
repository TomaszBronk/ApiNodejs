const http = require('http');
const json5 = require('json5');

const PORT = 3000;

http.createServer(function(request, response){
const responseData = {
status: 'ok!'

};
response.writeHead(201, {
  'Content-Type': 'application/json'
});
response.end(JSON.stringify(responseData));
}).listen(PORT);

console.log(`Node server is running on port ${PORT}`);