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
// console.log(values)
var removeChildren = (array) => {
  array.forEach(element => {
    element.pop();
  });
  return array;
}


module.exports.properties = properties;
module.exports.recurse = recurse;
module.exports.removeChildren = removeChildren;
