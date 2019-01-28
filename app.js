const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const output = {
    name: 'Cristian',
    age: 23,
    url: req.url
  };

  res.write(JSON.stringify(output));
  // res.write('Hola mundo');
  res.end();
}).listen(3000);

console.log('Escuchando puerto 3000');