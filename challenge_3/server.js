const express = require(`express`);
const parser = require('body-parser');
const app = express();

module.exports.app = app;

app.set(`port`, 3001);

//remember that semi-colons are not json
app.use(parser.json());

app.use(express.static('.'));
// app.get('/', (req, res, next) => {
//   let data = req.body;
//   res.status();
//   res.send(`successful get!`);
// });
//
// app.post('/', (req, res, next) => {
//   res.status(200);
//   res.send(`successful post!`)
// });

if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}
