const express = require('express');
const parser = require('body-parser');
// const router = require('./router.js');
const app = express();

module.exports.app = app;

//port we're listening on
app.set('port', 3000);

//parsing
app.use(parser.json());

//setting the routes
// app.get('/', (req, res) => {
//   res.send();
// });
//
// app.post('/', (req, res) => {
//   res.send();
// });

//server the client files
app.use(express.static('client'));

app.post('/', (req, res) => {
  res.status(200);
  res.send();
})

if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}
