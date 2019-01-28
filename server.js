const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

// Handlebars view engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  // res.send('Hello World');

  // const output = {
  //   name: 'Cristian',
  //   age: 23,
  //   url: req.url
  // };

  // res.send(output);
  res.render('home', {
    name: 'cristian'
  });
});

app.get('/about', (req, res) => {
  res.render('about');
})

app.listen(3000, () => {
  console.log('Escuchando en el puerto 3000');
});
