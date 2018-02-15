'use strict';

var express = require('express');
var parser = require('body-parser');
var app = express();

module.exports.app = app;

app.set('port', 3001);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsInBhcnNlciIsImFwcCIsIm1vZHVsZSIsImV4cG9ydHMiLCJzZXQiLCJ1c2UiLCJqc29uIiwic3RhdGljIiwicGFyZW50IiwibGlzdGVuIiwiZ2V0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxVQUFVQyxrQkFBaEI7QUFDQSxJQUFNQyxTQUFTRCxRQUFRLGFBQVIsQ0FBZjtBQUNBLElBQU1FLE1BQU1ILFNBQVo7O0FBRUFJLE9BQU9DLE9BQVAsQ0FBZUYsR0FBZixHQUFxQkEsR0FBckI7O0FBRUFBLElBQUlHLEdBQUosU0FBZ0IsSUFBaEI7O0FBRUE7QUFDQUgsSUFBSUksR0FBSixDQUFRTCxPQUFPTSxJQUFQLEVBQVI7O0FBRUFMLElBQUlJLEdBQUosQ0FBUVAsUUFBUVMsTUFBUixDQUFlLEdBQWYsQ0FBUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksQ0FBQ0wsT0FBT00sTUFBWixFQUFvQjtBQUNsQlAsTUFBSVEsTUFBSixDQUFXUixJQUFJUyxHQUFKLENBQVEsTUFBUixDQUFYO0FBQ0FDLFVBQVFDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCWCxJQUFJUyxHQUFKLENBQVEsTUFBUixDQUE1QjtBQUNEIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKGBleHByZXNzYCk7XG5jb25zdCBwYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5tb2R1bGUuZXhwb3J0cy5hcHAgPSBhcHA7XG5cbmFwcC5zZXQoYHBvcnRgLCAzMDAxKTtcblxuLy9yZW1lbWJlciB0aGF0IHNlbWktY29sb25zIGFyZSBub3QganNvblxuYXBwLnVzZShwYXJzZXIuanNvbigpKTtcblxuYXBwLnVzZShleHByZXNzLnN0YXRpYygnLicpKTtcbi8vIGFwcC5nZXQoJy8nLCAocmVxLCByZXMsIG5leHQpID0+IHtcbi8vICAgbGV0IGRhdGEgPSByZXEuYm9keTtcbi8vICAgcmVzLnN0YXR1cygpO1xuLy8gICByZXMuc2VuZChgc3VjY2Vzc2Z1bCBnZXQhYCk7XG4vLyB9KTtcbi8vXG4vLyBhcHAucG9zdCgnLycsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuLy8gICByZXMuc3RhdHVzKDIwMCk7XG4vLyAgIHJlcy5zZW5kKGBzdWNjZXNzZnVsIHBvc3QhYClcbi8vIH0pO1xuXG5pZiAoIW1vZHVsZS5wYXJlbnQpIHtcbiAgYXBwLmxpc3RlbihhcHAuZ2V0KCdwb3J0JykpO1xuICBjb25zb2xlLmxvZygnTGlzdGVuaW5nIG9uJywgYXBwLmdldCgncG9ydCcpKTtcbn1cbiJdfQ==