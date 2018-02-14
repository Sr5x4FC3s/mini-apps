const express = require(`express`);
const parser = require(`body-parser`);
// const helper = require(`helper.js`);
// const router = require('./router.js');
const app = express();

var values = [];
var properties = (object) => {
  var keys = Object.keys(object);
  keys.pop();
  return keys;
};

var values = [];

var recurse = function(object) {
  if (object !== undefined || null) {
    values.push(Object.values(object));
    values.pop();
  }
  if (object.children) {
    for (var i = 0; i < object['children'].length; i++) {
      recurse(object.children[i]);
    }
  }
  return values;
}

var removeChildren = (array) => {
  array.forEach(element => {
    element.pop();
  });
  return array;
}

module.exports.app = app;

//port we're listening on
app.set(`port`, 3000);

//parsing
app.use(parser.json());

//server the client files
app.use(express.static('client'));

app.post(`/`, (req, res) => {
  let data = req.body;
  console.log('data', data);
  console.log('typeof:', typeof data);
  var values = [];
  var property = properties(data);
  console.log(property);
  recurse(data);
  // removeChildren(values)
  res.status(200);
  res.send('success dawg');
})

if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}
