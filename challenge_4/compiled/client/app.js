"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bowling = function (_React$Component) {
  _inherits(Bowling, _React$Component);

  function Bowling(props) {
    _classCallCheck(this, Bowling);

    var _this = _possibleConstructorReturn(this, (Bowling.__proto__ || Object.getPrototypeOf(Bowling)).call(this, props));

    _this.state = {
      numberPad: [[1, 2, 3], [4, 5, 6], [7, 8, 9], ["-", "X", "/"]]
    };
    return _this;
  }

  _createClass(Bowling, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement("bowling", { numberPad: this.state.numberPad })
      );
    }
  }]);

  return Bowling;
}(React.Component);

var Numpad = function Numpad(props) {
  return React.createElement(
    "div",
    { className: "numpad" },
    props.numberPad.map(function (row, index) {
      return React.createElement(Rows, { id: index, row: row });
    })
  );
};

var Row = function Row(props) {
  return React.createElement(
    "div",
    { className: "row" },
    props.row.map(function (key, index) {
      return React.createElement(Keys, { id: index, key: key });
    })
  );
};

var Key = function Key(props) {
  return React.createElement(
    "div",
    { className: "key" },
    props.key
  );
};

ReactDOM.render(React.createElement(Bowling, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanMiXSwibmFtZXMiOlsiQm93bGluZyIsInByb3BzIiwic3RhdGUiLCJudW1iZXJQYWQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIk51bXBhZCIsIm1hcCIsInJvdyIsImluZGV4IiwiUm93Iiwia2V5IiwiS2V5IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE87OztBQUNKLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxpQkFBVyxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQUQsRUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFaLEVBQXVCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQXZCLEVBQWtDLGVBQWxDO0FBREEsS0FBYjtBQUZpQjtBQUtsQjs7Ozs2QkFDUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UseUNBQVMsV0FBVyxLQUFLRCxLQUFMLENBQVdDLFNBQS9CO0FBREYsT0FERjtBQUtEOzs7O0VBYm1CQyxNQUFNQyxTOztBQWdCNUIsSUFBTUMsU0FBUyxTQUFUQSxNQUFTLENBQUNMLEtBQUQ7QUFBQSxTQUNiO0FBQUE7QUFBQSxNQUFLLFdBQVUsUUFBZjtBQUNHQSxVQUFNRSxTQUFOLENBQWdCSSxHQUFoQixDQUFvQixVQUFDQyxHQUFELEVBQU1DLEtBQU4sRUFBZ0I7QUFDbkMsYUFBTyxvQkFBQyxJQUFELElBQU0sSUFBSUEsS0FBVixFQUFpQixLQUFLRCxHQUF0QixHQUFQO0FBQ0QsS0FGQTtBQURILEdBRGE7QUFBQSxDQUFmOztBQVFBLElBQU1FLE1BQU0sU0FBTkEsR0FBTSxDQUFDVCxLQUFEO0FBQUEsU0FDVjtBQUFBO0FBQUEsTUFBSyxXQUFVLEtBQWY7QUFDR0EsVUFBTU8sR0FBTixDQUFVRCxHQUFWLENBQWMsVUFBQ0ksR0FBRCxFQUFNRixLQUFOLEVBQWdCO0FBQzdCLGFBQU8sb0JBQUMsSUFBRCxJQUFNLElBQUlBLEtBQVYsRUFBaUIsS0FBS0UsR0FBdEIsR0FBUDtBQUNELEtBRkE7QUFESCxHQURVO0FBQUEsQ0FBWjs7QUFRQSxJQUFNQyxNQUFNLFNBQU5BLEdBQU0sQ0FBQ1gsS0FBRDtBQUFBLFNBQ1Y7QUFBQTtBQUFBLE1BQUssV0FBVSxLQUFmO0FBQ0dBLFVBQU1VO0FBRFQsR0FEVTtBQUFBLENBQVo7O0FBT0FFLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsT0FBRCxPQUFoQixFQUE2QkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUE3QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCb3dsaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG51bWJlclBhZDogW1sxLCAyLCAzXSwgWzQsIDUsIDZdLCBbNywgOCwgOV0sIFtgLWAsIGBYYCwgYC9gXV1cbiAgICB9O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGJvd2xpbmcgbnVtYmVyUGFkPXt0aGlzLnN0YXRlLm51bWJlclBhZH0gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBOdW1wYWQgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJudW1wYWRcIj5cbiAgICB7cHJvcHMubnVtYmVyUGFkLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIDxSb3dzIGlkPXtpbmRleH0gcm93PXtyb3d9IC8+XG4gICAgfSl9XG4gIDwvZGl2PlxuKVxuXG5jb25zdCBSb3cgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICB7cHJvcHMucm93Lm1hcCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIDxLZXlzIGlkPXtpbmRleH0ga2V5PXtrZXl9IC8+XG4gICAgfSl9XG4gIDwvZGl2PlxuKVxuXG5jb25zdCBLZXkgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJrZXlcIj5cbiAgICB7cHJvcHMua2V5fVxuICA8L2Rpdj5cbilcblxuXG5SZWFjdERPTS5yZW5kZXIoPEJvd2xpbmcgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iXX0=