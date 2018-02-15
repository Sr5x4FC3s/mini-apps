'use strict';

var express = require('express');
var parser = require('body-parser');
var app = express();

module.exports.app = app;

app.set('port', 3000);

app.use(parser.json());

app.use(express.static('.'));

if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsInBhcnNlciIsImFwcCIsIm1vZHVsZSIsImV4cG9ydHMiLCJzZXQiLCJ1c2UiLCJqc29uIiwic3RhdGljIiwicGFyZW50IiwibGlzdGVuIiwiZ2V0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxVQUFVQyxrQkFBaEI7QUFDQSxJQUFNQyxTQUFTRCxzQkFBZjtBQUNBLElBQU1FLE1BQU1ILFNBQVo7O0FBRUFJLE9BQU9DLE9BQVAsQ0FBZUYsR0FBZixHQUFxQkEsR0FBckI7O0FBRUFBLElBQUlHLEdBQUosU0FBZ0IsSUFBaEI7O0FBRUFILElBQUlJLEdBQUosQ0FBUUwsT0FBT00sSUFBUCxFQUFSOztBQUVBTCxJQUFJSSxHQUFKLENBQVFQLFFBQVFTLE1BQVIsQ0FBZSxHQUFmLENBQVI7O0FBRUEsSUFBRyxDQUFDTCxPQUFPTSxNQUFYLEVBQW1CO0FBQ2pCUCxNQUFJUSxNQUFKLENBQVdSLElBQUlTLEdBQUosUUFBWDtBQUNBQyxVQUFRQyxHQUFSLGlCQUE0QlgsSUFBSVMsR0FBSixRQUE1QjtBQUNEIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKGBleHByZXNzYCk7XG5jb25zdCBwYXJzZXIgPSByZXF1aXJlKGBib2R5LXBhcnNlcmApO1xuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5tb2R1bGUuZXhwb3J0cy5hcHAgPSBhcHA7XG5cbmFwcC5zZXQoYHBvcnRgLCAzMDAwKTtcblxuYXBwLnVzZShwYXJzZXIuanNvbigpKTtcblxuYXBwLnVzZShleHByZXNzLnN0YXRpYygnLicpKTtcblxuaWYoIW1vZHVsZS5wYXJlbnQpIHtcbiAgYXBwLmxpc3RlbihhcHAuZ2V0KGBwb3J0YCkpO1xuICBjb25zb2xlLmxvZyhgTGlzdGVuaW5nIG9uYCwgYXBwLmdldChgcG9ydGApKTtcbn1cbiJdfQ==