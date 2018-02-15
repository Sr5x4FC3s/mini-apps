const express = require(`express`);
const parser = require(`body-parser`);
const app = express();

module.exports.app = app;

app.set(`port`, 3000);

app.use(parser.json());

app.use(express.static('.'));

if(!module.parent) {
  app.listen(app.get(`port`));
  console.log(`Listening on`, app.get(`port`));
}
