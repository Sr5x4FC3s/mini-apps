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
              console.log(_this2.state.gameData[0]);
              return React.createElement('tr', { key: index.toString(), id: index.toString(), rows: row, onClick: _this2.state.handleClick, style: rowStyles,
                func: individualBox() });
            })
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

var individualBox = function individualBox(props) {
  console.log(props);
  // <tr>
  //   {console.log(props)}
  //   {this.state.rows.map((box, index) => {
  //     return <td key={index.toString()} id={index.toString()} boxs={box} />
  //   })}
  // </tr>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanMiXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImdhbWVEYXRhIiwiaWQiLCJ0IiwidmFsIiwibGVuZ3RoIiwiaGVpZ2h0IiwiYWxlcnQiLCJyb3dTdHlsZXMiLCJ3aWR0aCIsImJvcmRlciIsIm1hcCIsInJvdyIsImluZGV4IiwiY29uc29sZSIsImxvZyIsInRvU3RyaW5nIiwiaGFuZGxlQ2xpY2siLCJpbmRpdmlkdWFsQm94IiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUdqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVUsQ0FDUixDQUFDLEVBQUNDLElBQUksQ0FBTCxFQUFRQyxHQUFHLEtBQVgsRUFBa0JDLEtBQUssSUFBdkIsRUFBRCxFQUErQixFQUFDRixJQUFJLENBQUwsRUFBUUMsR0FBRyxLQUFYLEVBQWtCQyxLQUFLLElBQXZCLEVBQS9CLEVBQTZELEVBQUNGLElBQUksQ0FBTCxFQUFRQyxHQUFHLEtBQVgsRUFBa0JDLEtBQUssSUFBdkIsRUFBN0QsRUFBMkYsRUFBQ0YsSUFBSSxDQUFMLEVBQVFDLEdBQUcsS0FBWCxFQUFrQkMsS0FBSyxJQUF2QixFQUEzRixFQUF5SCxFQUFDRixJQUFJLENBQUwsRUFBUUMsR0FBRyxLQUFYLEVBQWtCQyxLQUFLLElBQXZCLEVBQXpILEVBQXVKLEVBQUNGLElBQUksQ0FBTCxFQUFRQyxHQUFHLEtBQVgsRUFBa0JDLEtBQUssSUFBdkIsRUFBdkosRUFBcUwsRUFBQ0YsSUFBSSxDQUFMLEVBQVFDLEdBQUcsS0FBWCxFQUFrQkMsS0FBSyxJQUF2QixFQUFyTCxDQURRLEVBRVIsQ0FBQyxFQUFDRixJQUFJLENBQUwsRUFBUUMsR0FBRyxLQUFY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NEJBQUksS0FBS1ksTUFBTUcsUUFBTixFQUFULEVBQTJCLElBQUlILE1BQU1HLFFBQU4sRUFBL0IsRUFBaUQsTUFBTUosR0FBdkQsRUFBNEQsU0FBUyxPQUFLWixLQUFMLENBQVdpQixXQUFoRixFQUE2RixPQUFPVCxTQUFwRztBQUNQLHNCQUFNVSxlQURDLEdBQVA7QUFFRCxhQUpBO0FBREg7QUFERjtBQURGLE9BREY7QUFhRDs7OztFQXBFZUMsTUFBTUMsUzs7QUF3RXhCLElBQUlGLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ25CLEtBQUQsRUFBVztBQUM3QmUsVUFBUUMsR0FBUixDQUFZaEIsS0FBWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELENBUkQ7QUFTQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQXNCLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBnYW1lRGF0YTogW1xuICAgICAgICBbe2lkOiAxLCB0OiBmYWxzZSwgdmFsOiBudWxsfSwge2lkOiAyLCB0OiBmYWxzZSwgdmFsOiBudWxsfSwge2lkOiAzLCB0OiBmYWxzZSwgdmFsOiBudWxsfSwge2lkOiA0LCB0OiBmYWxzZSwgdmFsOiBudWxsfSwge2lkOiA1LCB0OiBmYWxzZSwgdmFsOiBudWxsfSwge2lkOiA2LCB0OiBmYWxzZSwgdmFsOiBudWxsfSwge2lkOiA3LCB0OiBmYWxzZSwgdmFsOiBudWxsfV0sXG4gICAgICAgIFt7aWQ6IDEsIHQ6IGZhbHNlLCB2YWw6IG51bGx9LCB7aWQ6IDIsIHQ6IGZhbHNlLCB2YWw6IG51bGx9LCB7aWQ6IDMsIHQ6IGZhbHNlLCB2YWw6IG51bGx9LCB7aWQ6IDQsIHQ6IGZhbHNlLCB2YWw6IG51bGx9LCB7aWQ6IDUsIHQ6IGZhbHNlLCB2YWw6IG51bGx9LCB7aWQ6IDYsIHQ6IGZhbHNlLCB2YWw6IG51bGx9LCB7aWQ6IDcsIHQ6IGZhbHNlLCB2YWw6IG51bGx9XSxcbiAgICAgICAgW3tpZDogMSwgdDogZmFsc2UsIHZhbDogbnVsbH0sIHtpZDogMiwgdDogZmFsc2UsIHZhbDogbnVsbH0sIHtpZDogMywgdDogZmFsc2UsIHZhbDogbnVsbH0sIHtpZDogNCwgdDogZmFsc2UsIHZhbDogbnVsbH0sIHtpZDogNSwgdDogZmFsc2UsIHZhbDogbnVsbH0sIHtpZDogNiwgdDogZmFsc2UsIHZhbDogbnVsbH0sIHtpZDogNywgdDogZmFsc2UsIHZhbDogbnVsbH1dLFxuICAgICAgICBbe2lkOiAxLCB0OiBmYWxzZSwgdmFsOiBudWxsfSwge2lkOiAyLCB0OiBmYWxzZSwgdmFsOiBudWxsfSwge2lkOiAzLCB0OiBmYWxzZSwgdmFsOiBudWxsfSwge2lkOiA0LCB0OiBmYWxzZSwgdmFsOiBudWxsfSwge2lkOiA1LCB0OiBmYWxzZSwgdmFsOiBudWxsfSwge2lkOiA2LCB0OiBmYWxzZSwgdmFsOiBudWxsfSwge2lkOiA3LCB0OiBmYWxzZSwgdmFsOiBudWxsfV0sXG4gICAgICAgIFt7aWQ6IDEsIHQ6IGZhbHNlLCB2YWw6IG51bGx9LCB7aWQ6IDIsIHQ6IGZhbHNlLCB2YWw6IG51bGx9LCB7aWQ6IDMsIHQ6IGZhbHNlLCB2YWw6IG51bGx9LCB7aWQ6IDQsIHQ6IGZhbHNlLCB2YWw6IG51bGx9LCB7aWQ6IDUsIHQ6IGZhbHNlLCB2YWw6IG51bGx9LCB7aWQ6IDYsIHQ6IGZhbHNlLCB2YWw6IG51bGx9LCB7aWQ6IDcsIHQ6IGZhbHNlLCB2YWw6IG51bGx9XSxcbiAgICAgICAgW3tpZDogMSwgdDogZmFsc2UsIHZhbDogbnVsbH0sIHtpZDogMiwgdDogZmFsc2UsIHZhbDogbnVsbH0sIHtpZDogMywgdDogZmFsc2UsIHZhbDogbnVsbH0sIHtpZDogNCwgdDogZmFsc2UsIHZhbDogbnVsbH0sIHtpZDogNSwgdDogZmFsc2UsIHZhbDogbnVsbH0sIHtpZDogNiwgdDogZmFsc2UsIHZhbDogbnVsbH0sIHtpZDogNywgdDogZmFsc2UsIHZhbDogbnVsbH1dXG4gICAgICBdLCAvLyB3ZSBjYW4gcHVzaCB0b2dnbGVkIHBpZWNlcyBpbnRvIHRoaXMgYXJyYXkgd2l0aCBhbiBpZFxuICAgICAgbGVuZ3RoOiA3LFxuICAgICAgaGVpZ2h0OiA2XG4gICAgfTtcbiAgfVxuICAvLyBuZWVkIHRvIGNoYW5nZSB0aGUgc3RhdGUgb2Ygc29tZXRoaW5nIG9mIHNvbWV0aGluZyBpbiByb3cgYW5kIGVhY2ggYm94XG4gIC8vZWFjaCBpbmRleCB3aWxsIG5lZWQgdG8gYmUgYWJsZSB0byBoYW5kbGUgYSBvbmNsaWNrIGhhbmRsZXIgdGhhdCB3aWxsIGNoYW5nZSB0aGUgc3RhdGVcbiAgLy9lYWNoIHN0YXRlIHdpbGwgbmVlZCB0byBiZSBhYmxlIHR3byBkaWZmZXJlbnQgY29sb3JzXG4gIC8vdG9nZ2xlIHN0YXRlIHdpbGwgYmUgb24gYW5kIG9mZiB0byBjaGFuZ2VcbiAgLy9vbiB0b2dnbGUoKSB0aGF0IHdpbGwgY2hhbmdlIHRoZSBzdGF0ZSBvZiBudWxsIHRvIHJlZC9ibGFjayBwaWVjZVxuXG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIGFsZXJ0KCd0aGlzIGhhcyBiZWVuIGNsaWNrZWQnKTtcbiAgICAvL2NoYW5nZSB0aGUgc3RhdGUgb24gY2xpY2tcbiAgICAvLyB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgIHRoaXMuZ2FtZURhdGEgPSAsXG4gICAgLy9cbiAgICAvLyB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvL2NyZWF0ZSB0aGUgcm93cyBhbmQgY29sdW1ucyBvZiB0aGUgdGFibGVcbiAgICAvLyBsZXQgcm93cyA9IFtdO1xuICAgIC8vIC8vc3R5bGUgc3R1ZmZcbiAgICBjb25zdCByb3dTdHlsZXMgPSB7XG4gICAgICBoZWlnaHQ6ICcxMDBweCcsXG4gICAgICB3aWR0aDogJzEwMHB4JyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMjIyJ1xuICAgIH1cbiAgICAvLyBjb25zdCBjb2x1bW5TdHlsZXMgPSB7XG4gICAgLy8gICB3aWR0aDogJzcwMHB4JyxcbiAgICAvLyAgIGhlaWdodDogJzEwMHB4JyxcbiAgICAvLyAgIGJvcmRlcjogJzFweCBzb2xpZCAjMjIyJ1xuICAgIC8vIH1cbiAgICAvLyBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RhdGUubGVuZ3RoOyBpKyspe1xuICAgIC8vICAgbGV0IHJvd0lEID0gYHJvdyR7aX1gXG4gICAgLy8gICBsZXQgY2VsbCA9IFtdXG4gICAgLy8gICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuc3RhdGUuaGVpZ2h0OyBqKyspe1xuICAgIC8vICAgICBsZXQgY2VsbElEID0gYGNlbGwke2l9LSR7an1gXG4gICAgLy8gICAgIGNlbGwucHVzaCg8dGQga2V5PXtjZWxsSUR9IGlkPXtjZWxsSUR9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IHN0eWxlPXtyb3dTdHlsZXN9PjwvdGQ+KVxuICAgIC8vICAgfVxuICAgIC8vICAgcm93cy5wdXNoKDx0ciBrZXk9e2l9IGlkPXtyb3dJRH0gc3R5bGU9e3Jvd1N0eWxlc30+e2NlbGx9PC90cj4pXG4gICAgLy9zdHlsZT17Y29sdW1uU3R5bGVzfSAvLyBmb3IgaXNzYWJvYXJkIHN0eWxlXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDx0YWJsZSBpZD1cImlzc2FCb2FyZFwiPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmdhbWVEYXRhLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmdhbWVEYXRhWzBdKTtcbiAgICAgICAgICAgICAgcmV0dXJuIDx0ciBrZXk9e2luZGV4LnRvU3RyaW5nKCl9IGlkPXtpbmRleC50b1N0cmluZygpfSByb3dzPXtyb3d9IG9uQ2xpY2s9e3RoaXMuc3RhdGUuaGFuZGxlQ2xpY2t9IHN0eWxlPXtyb3dTdHlsZXN9XG4gICAgICAgICAgICAgIGZ1bmM9e2luZGl2aWR1YWxCb3goKX0vPlxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cbnZhciBpbmRpdmlkdWFsQm94ID0gKHByb3BzKSA9PiB7XG4gIGNvbnNvbGUubG9nKHByb3BzKVxuICAvLyA8dHI+XG4gIC8vICAge2NvbnNvbGUubG9nKHByb3BzKX1cbiAgLy8gICB7dGhpcy5zdGF0ZS5yb3dzLm1hcCgoYm94LCBpbmRleCkgPT4ge1xuICAvLyAgICAgcmV0dXJuIDx0ZCBrZXk9e2luZGV4LnRvU3RyaW5nKCl9IGlkPXtpbmRleC50b1N0cmluZygpfSBib3hzPXtib3h9IC8+XG4gIC8vICAgfSl9XG4gIC8vIDwvdHI+XG59XG4vL2ZvciBlYWNoIHJvdywgd2UgbmVlZCB0byBhZGQgNyBjZWxsc1xuXG4vLyB2YXIgcmVuZGVyQm9hcmQgPSAocHJvcHMpID0+IChcbi8vICAgPHRib2R5PlxuLy8gICAgIHtwcm9wcy5nYW1lRGF0YS5tYXAoKHJvdywgaW5kZXgpID0+IHtcbi8vICAgICAgIHJldHVybiA8dHIga2V5PXtyb3cudG9TdHJpbmcoKX0gcm93cz17cm93fSAvPlxuLy8gICAgIH0pfVxuLy8gICA8L3Rib2R5PlxuLy8gKVxuXG4vLyB2YXIgcmVuZGVyQm9hcmQgPSAocHJvcHMpID0+IHtcbi8vICAgdmFyIGRhdGEgPSBwcm9wcy5nYW1lRGF0YTtcbi8vICAgdmFyIG1hcHBlZENlbGxzID0gZGF0YS5tYXAocm93ID0+IHtcbi8vICAgICA8dHIga2V5PXtyb3cudG9TdHJpbmcoKX0gcm93cz17cm93fSAvPlxuLy8gICB9KTtcbi8vICAgcmV0dXJuIChcbi8vICAgPHRib2R5PnttYXBwZWRDZWxsc308L3Rib2R5PlxuLy8gICApXG4vLyB9XG5cblxuLy8gdmFyIGluZGl2aWR1YWxCb3ggPSAocHJvcHMpID0+IHtcbi8vXG4vLyB9XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIl19