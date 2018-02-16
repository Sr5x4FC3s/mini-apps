'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      gameData: [[{ id: 1, t: false, val: null }, { id: 2, t: false, val: null }, { id: 3, t: false, val: null }, { id: 4, t: false, val: null }, { id: 5, t: false, val: null }, { id: 6, t: false, val: null }, { id: 7, t: false, val: null }], [{ id: 1, t: false, val: null }, { id: 2, t: false, val: null }, { id: 3, t: false, val: null }, { id: 4, t: false, val: null }, { id: 5, t: false, val: null }, { id: 6, t: false, val: null }, { id: 7, t: false, val: null }], [{ id: 1, t: false, val: null }, { id: 2, t: false, val: null }, { id: 3, t: false, val: null }, { id: 4, t: false, val: null }, { id: 5, t: false, val: null }, { id: 6, t: false, val: null }, { id: 7, t: false, val: null }], [{ id: 1, t: false, val: null }, { id: 2, t: false, val: null }, { id: 3, t: false, val: null }, { id: 4, t: false, val: null }, { id: 5, t: false, val: null }, { id: 6, t: false, val: null }, { id: 7, t: false, val: null }], [{ id: 1, t: false, val: null }, { id: 2, t: false, val: null }, { id: 3, t: false, val: null }, { id: 4, t: false, val: null }, { id: 5, t: false, val: null }, { id: 6, t: false, val: null }, { id: 7, t: false, val: null }], [{ id: 1, t: false, val: null }, { id: 2, t: false, val: null }, { id: 3, t: false, val: null }, { id: 4, t: false, val: null }, { id: 5, t: false, val: null }, { id: 6, t: false, val: null }, { id: 7, t: false, val: null }]], // we can push toggled pieces into this array with an id
      length: 7,
      height: 6
    };
    return _this;
  }
  // need to change the state of something of something in row and each box
  //each index will need to be able to handle a onclick handler that will change the state
  //each state will need to be able two different colors
  //toggle state will be on and off to change
  //on toggle() that will change the state of null to red/black piece

  _createClass(App, [{
    key: 'handleClick',
    value: function handleClick() {
      alert('this has been clicked');
      //change the state on click
      // this.setState({
      //   this.gameData = ,
      //
      // });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      //create the rows and columns of the table
      // let rows = [];
      // //style stuff
      var rowStyles = {
        height: '100px',
        width: '100px',
        border: '1px solid #222'
        // const columnStyles = {
        //   width: '700px',
        //   height: '100px',
        //   border: '1px solid #222'
        // }
        // for (var i = 0; i < this.state.length; i++){
        //   let rowID = `row${i}`
        //   let cell = []
        //   for (var j = 0; j < this.state.height; j++){
        //     let cellID = `cell${i}-${j}`
        //     cell.push(<td key={cellID} id={cellID} onClick={this.handleClick} style={rowStyles}></td>)
        //   }
        //   rows.push(<tr key={i} id={rowID} style={rowStyles}>{cell}</tr>)
        //style={columnStyles} // for issaboard style
      };return React.createElement(
        'div',
        null,
        React.createElement(
          'table',
          { id: 'issaBoard' },
          React.createElement(
            'tbody',
            null,
            this.state.gameData.map(function (row, index) {
              return React.createElement('tr', { key: index.toString(), id: index.toString(), rows: row, onClick: _this2.state.handleClick, style: rowStyles });
            })
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

var individualBox = function individualBox(props) {
  React.createElement(
    'tr',
    null,
    undefined.state.rows.map(function (box, index) {
      return React.createElement('td', { key: index.toString(), id: index.toString(), boxs: box });
    })
  );
};
//for each row, we need to add 7 cells

// var renderBoard = (props) => (
//   <tbody>
//     {props.gameData.map((row, index) => {
//       return <tr key={row.toString()} rows={row} />
//     })}
//   </tbody>
// )

// var renderBoard = (props) => {
//   var data = props.gameData;
//   var mappedCells = data.map(row => {
//     <tr key={row.toString()} rows={row} />
//   });
//   return (
//   <tbody>{mappedCells}</tbody>
//   )
// }


// var individualBox = (props) => {
//
// }

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanMiXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImdhbWVEYXRhIiwiaWQiLCJ0IiwidmFsIiwibGVuZ3RoIiwiaGVpZ2h0IiwiYWxlcnQiLCJyb3dTdHlsZXMiLCJ3aWR0aCIsImJvcmRlciIsIm1hcCIsInJvdyIsImluZGV4IiwidG9TdHJpbmciLCJoYW5kbGVDbGljayIsIlJlYWN0IiwiQ29tcG9uZW50IiwiaW5kaXZpZHVhbEJveCIsInJvd3MiLCJib3giLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUdqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVUsQ0FDUixDQUFDLEVBQUNDLElBQUksQ0FBTCxFQUFRQyxHQUFHLEtBQVgsRUFBa0JDLEtBQUssSUFBdkIsRUFBRCxFQUErQixFQUFDRixJQUFJLENBQUwsRUFBUUMsR0FBRyxLQUFYLEVBQWtCQyxLQUFLLElBQXZCLEVBQS9CLEVBQTZELEVBQUNGLElBQUksQ0FBTCxFQUFRQyxHQUFHLEtBQVgsRUFBa0JDLEtBQUssSUFBdkIsRUFBN0QsRUFBMkYsRUFBQ0YsSUFBSSxDQUFMLEVBQVFDLEdBQUcsS0FBWCxFQUFrQkMsS0FBSyxJQUF2QixFQUEzRixFQUF5SCxFQUFDRixJQUFJLENBQUwsRUFBUUMsR0FBRyxLQUFYLEVBQWtCQyxLQUFLLElBQXZCLEVBQXpILEVBQXVKLEVBQUNGLElBQUksQ0FBTCxFQUFRQyxHQUFHLEtBQVgsRUFBa0JDLEtBQUssSUFBdkIsRUFBdkosRUFBcUwsRUFBQ0YsSUFBSSxDQUFMLEVBQVFDLEdBQUcsS0FBWCxFQUFrQkMsS0FBSyxJQUF2QixFQUFyTCxDQURRLEVBRVIsQ0FBQyxFQUFDRixJQUFJLENBQUwsRUFBUUMsR0FBRyxLQUFYLEVB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QU1GLEdBQXZELEVBQTRELFNBQVMsT0FBS1osS0FBTCxDQUFXZSxXQUFoRixFQUE2RixPQUFPUCxTQUFwRyxHQUFQO0FBQ0QsYUFGQTtBQURIO0FBREY7QUFERixPQURGO0FBV0Q7Ozs7RUFsRWVRLE1BQU1DLFM7O0FBc0V4QixJQUFJQyxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUNuQixLQUFELEVBQVc7QUFDN0I7QUFBQTtBQUFBO0FBQ0csY0FBS0MsS0FBTCxDQUFXbUIsSUFBWCxDQUFnQlIsR0FBaEIsQ0FBb0IsVUFBQ1MsR0FBRCxFQUFNUCxLQUFOLEVBQWdCO0FBQ25DLGFBQU8sNEJBQUksS0FBS0EsTUFBTUMsUUFBTixFQUFULEVBQTJCLElBQUlELE1BQU1DLFFBQU4sRUFBL0IsRUFBaUQsTUFBTU0sR0FBdkQsR0FBUDtBQUNELEtBRkE7QUFESDtBQUtELENBTkQ7QUFPQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQUMsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGdhbWVEYXRhOiBbXG4gICAgICAgIFt7aWQ6IDEsIHQ6IGZhbHNlLCB2YWw6IG51bGx9LCB7aWQ6IDIsIHQ6IGZhbHNlLCB2YWw6IG51bGx9LCB7aWQ6IDMsIHQ6IGZhbHNlLCB2YWw6IG51bGx9LCB7aWQ6IDQsIHQ6IGZhbHNlLCB2YWw6IG51bGx9LCB7aWQ6IDUsIHQ6IGZhbHNlLCB2YWw6IG51bGx9LCB7aWQ6IDYsIHQ6IGZhbHNlLCB2YWw6IG51bGx9LCB7aWQ6IDcsIHQ6IGZhbHNlLCB2YWw6IG51bGx9XSxcbiAgICAgICAgW3tpZDogMSwgdDogZmFsc2UsIHZhbDogbnVsbH0sIHtpZDogMiwgdDogZmFsc2UsIHZhbDogbnVsbH0sIHtpZDogMywgdDogZmFsc2UsIHZhbDogbnVsbH0sIHtpZDogNCwgdDogZmFsc2UsIHZhbDogbnVsbH0sIHtpZDogNSwgdDogZmFsc2UsIHZhbDogbnVsbH0sIHtpZDogNiwgdDogZmFsc2UsIHZhbDogbnVsbH0sIHtpZDogNywgdDogZmFsc2UsIHZhbDogbnVsbH1dLFxuICAgICAgICBbe2lkOiAxLCB0OiBmYWxzZSwgdmFsOiBudWxsfSwge2lkOiAyLCB0OiBmYWxzZSwgdmFsOiBudWxsfSwge2lkOiAzLCB0OiBmYWxzZSwgdmFsOiBudWxsfSwge2lkOiA0LCB0OiBmYWxzZSwgdmFsOiBudWxsfSwge2lkOiA1LCB0OiBmYWxzZSwgdmFsOiBudWxsfSwge2lkOiA2LCB0OiBmYWxzZSwgdmFsOiBudWxsfSwge2lkOiA3LCB0OiBmYWxzZSwgdmFsOiBudWxsfV0sXG4gICAgICAgIFt7aWQ6IDEsIHQ6IGZhbHNlLCB2YWw6IG51bGx9LCB7aWQ6IDIsIHQ6IGZhbHNlLCB2YWw6IG51bGx9LCB7aWQ6IDMsIHQ6IGZhbHNlLCB2YWw6IG51bGx9LCB7aWQ6IDQsIHQ6IGZhbHNlLCB2YWw6IG51bGx9LCB7aWQ6IDUsIHQ6IGZhbHNlLCB2YWw6IG51bGx9LCB7aWQ6IDYsIHQ6IGZhbHNlLCB2YWw6IG51bGx9LCB7aWQ6IDcsIHQ6IGZhbHNlLCB2YWw6IG51bGx9XSxcbiAgICAgICAgW3tpZDogMSwgdDogZmFsc2UsIHZhbDogbnVsbH0sIHtpZDogMiwgdDogZmFsc2UsIHZhbDogbnVsbH0sIHtpZDogMywgdDogZmFsc2UsIHZhbDogbnVsbH0sIHtpZDogNCwgdDogZmFsc2UsIHZhbDogbnVsbH0sIHtpZDogNSwgdDogZmFsc2UsIHZhbDogbnVsbH0sIHtpZDogNiwgdDogZmFsc2UsIHZhbDogbnVsbH0sIHtpZDogNywgdDogZmFsc2UsIHZhbDogbnVsbH1dLFxuICAgICAgICBbe2lkOiAxLCB0OiBmYWxzZSwgdmFsOiBudWxsfSwge2lkOiAyLCB0OiBmYWxzZSwgdmFsOiBudWxsfSwge2lkOiAzLCB0OiBmYWxzZSwgdmFsOiBudWxsfSwge2lkOiA0LCB0OiBmYWxzZSwgdmFsOiBudWxsfSwge2lkOiA1LCB0OiBmYWxzZSwgdmFsOiBudWxsfSwge2lkOiA2LCB0OiBmYWxzZSwgdmFsOiBudWxsfSwge2lkOiA3LCB0OiBmYWxzZSwgdmFsOiBudWxsfV1cbiAgICAgIF0sIC8vIHdlIGNhbiBwdXNoIHRvZ2dsZWQgcGllY2VzIGludG8gdGhpcyBhcnJheSB3aXRoIGFuIGlkXG4gICAgICBsZW5ndGg6IDcsXG4gICAgICBoZWlnaHQ6IDZcbiAgICB9O1xuICB9XG4gIC8vIG5lZWQgdG8gY2hhbmdlIHRoZSBzdGF0ZSBvZiBzb21ldGhpbmcgb2Ygc29tZXRoaW5nIGluIHJvdyBhbmQgZWFjaCBib3hcbiAgLy9lYWNoIGluZGV4IHdpbGwgbmVlZCB0byBiZSBhYmxlIHRvIGhhbmRsZSBhIG9uY2xpY2sgaGFuZGxlciB0aGF0IHdpbGwgY2hhbmdlIHRoZSBzdGF0ZVxuICAvL2VhY2ggc3RhdGUgd2lsbCBuZWVkIHRvIGJlIGFibGUgdHdvIGRpZmZlcmVudCBjb2xvcnNcbiAgLy90b2dnbGUgc3RhdGUgd2lsbCBiZSBvbiBhbmQgb2ZmIHRvIGNoYW5nZVxuICAvL29uIHRvZ2dsZSgpIHRoYXQgd2lsbCBjaGFuZ2UgdGhlIHN0YXRlIG9mIG51bGwgdG8gcmVkL2JsYWNrIHBpZWNlXG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgYWxlcnQoJ3RoaXMgaGFzIGJlZW4gY2xpY2tlZCcpO1xuICAgIC8vY2hhbmdlIHRoZSBzdGF0ZSBvbiBjbGlja1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgdGhpcy5nYW1lRGF0YSA9ICxcbiAgICAvL1xuICAgIC8vIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vY3JlYXRlIHRoZSByb3dzIGFuZCBjb2x1bW5zIG9mIHRoZSB0YWJsZVxuICAgIC8vIGxldCByb3dzID0gW107XG4gICAgLy8gLy9zdHlsZSBzdHVmZlxuICAgIGNvbnN0IHJvd1N0eWxlcyA9IHtcbiAgICAgIGhlaWdodDogJzEwMHB4JyxcbiAgICAgIHdpZHRoOiAnMTAwcHgnLFxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICMyMjInXG4gICAgfVxuICAgIC8vIGNvbnN0IGNvbHVtblN0eWxlcyA9IHtcbiAgICAvLyAgIHdpZHRoOiAnNzAwcHgnLFxuICAgIC8vICAgaGVpZ2h0OiAnMTAwcHgnLFxuICAgIC8vICAgYm9yZGVyOiAnMXB4IHNvbGlkICMyMjInXG4gICAgLy8gfVxuICAgIC8vIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5sZW5ndGg7IGkrKyl7XG4gICAgLy8gICBsZXQgcm93SUQgPSBgcm93JHtpfWBcbiAgICAvLyAgIGxldCBjZWxsID0gW11cbiAgICAvLyAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5zdGF0ZS5oZWlnaHQ7IGorKyl7XG4gICAgLy8gICAgIGxldCBjZWxsSUQgPSBgY2VsbCR7aX0tJHtqfWBcbiAgICAvLyAgICAgY2VsbC5wdXNoKDx0ZCBrZXk9e2NlbGxJRH0gaWQ9e2NlbGxJRH0gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gc3R5bGU9e3Jvd1N0eWxlc30+PC90ZD4pXG4gICAgLy8gICB9XG4gICAgLy8gICByb3dzLnB1c2goPHRyIGtleT17aX0gaWQ9e3Jvd0lEfSBzdHlsZT17cm93U3R5bGVzfT57Y2VsbH08L3RyPilcbiAgICAvL3N0eWxlPXtjb2x1bW5TdHlsZXN9IC8vIGZvciBpc3NhYm9hcmQgc3R5bGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHRhYmxlIGlkPVwiaXNzYUJvYXJkXCI+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge3RoaXMuc3RhdGUuZ2FtZURhdGEubWFwKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8dHIga2V5PXtpbmRleC50b1N0cmluZygpfSBpZD17aW5kZXgudG9TdHJpbmcoKX0gcm93cz17cm93fSBvbkNsaWNrPXt0aGlzLnN0YXRlLmhhbmRsZUNsaWNrfSBzdHlsZT17cm93U3R5bGVzfS8+XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxudmFyIGluZGl2aWR1YWxCb3ggPSAocHJvcHMpID0+IHtcbiAgPHRyPlxuICAgIHt0aGlzLnN0YXRlLnJvd3MubWFwKChib3gsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gPHRkIGtleT17aW5kZXgudG9TdHJpbmcoKX0gaWQ9e2luZGV4LnRvU3RyaW5nKCl9IGJveHM9e2JveH0gLz5cbiAgICB9KX1cbiAgPC90cj5cbn1cbi8vZm9yIGVhY2ggcm93LCB3ZSBuZWVkIHRvIGFkZCA3IGNlbGxzXG5cbi8vIHZhciByZW5kZXJCb2FyZCA9IChwcm9wcykgPT4gKFxuLy8gICA8dGJvZHk+XG4vLyAgICAge3Byb3BzLmdhbWVEYXRhLm1hcCgocm93LCBpbmRleCkgPT4ge1xuLy8gICAgICAgcmV0dXJuIDx0ciBrZXk9e3Jvdy50b1N0cmluZygpfSByb3dzPXtyb3d9IC8+XG4vLyAgICAgfSl9XG4vLyAgIDwvdGJvZHk+XG4vLyApXG5cbi8vIHZhciByZW5kZXJCb2FyZCA9IChwcm9wcykgPT4ge1xuLy8gICB2YXIgZGF0YSA9IHByb3BzLmdhbWVEYXRhO1xuLy8gICB2YXIgbWFwcGVkQ2VsbHMgPSBkYXRhLm1hcChyb3cgPT4ge1xuLy8gICAgIDx0ciBrZXk9e3Jvdy50b1N0cmluZygpfSByb3dzPXtyb3d9IC8+XG4vLyAgIH0pO1xuLy8gICByZXR1cm4gKFxuLy8gICA8dGJvZHk+e21hcHBlZENlbGxzfTwvdGJvZHk+XG4vLyAgIClcbi8vIH1cblxuXG4vLyB2YXIgaW5kaXZpZHVhbEJveCA9IChwcm9wcykgPT4ge1xuLy9cbi8vIH1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iXX0=