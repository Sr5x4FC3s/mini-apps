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
      numberPad: [[1, 2, 3], [4, 5, 6], [7, 8, 9], ["-", "X", "/"]],
      score: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0, 0]],
      currentFrame: 1,
      firstThrow: true, //checks to see if it's the first throw => if first ? true : false
      selectedScore: null
    };
    return _this;
  }
  //need make numberPad clickable to get it's value and translate
  //that to the score
  //check to see if it's strike else, fill out the first index of the array
  //if both fields are filled out then move on to the score frame

  _createClass(Bowling, [{
    key: "checkThrow",
    value: function checkThrow() {}
    // return this.state.firstThrow ? 


    //when numberPad is clicked, select score

  }, {
    key: "selectScore",
    value: function selectScore(keys) {
      var value = keys;
      //need to get value from numberpad and move that value to the selectedScore
      //then that will change the state of the score
      alert('this was clicked');
      this.setState({
        selectedScore: value //state seems to change everytime something is clicked again

      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(SelectScore, null),
        React.createElement(
          "div",
          null,
          React.createElement(Numpad, { numberPad: this.state.numberPad, selectScore: this.selectScore.bind(this) })
        ),
        React.createElement(BowlingScore, null),
        React.createElement(
          "div",
          null,
          React.createElement(Score, { score: this.state.score })
        )
      );
    }
  }]);

  return Bowling;
}(React.Component);
//adding a banner for score selector


var SelectScore = function SelectScore(props) {
  return React.createElement(
    "h2",
    null,
    "SELECT YOUR SCORE HERE"
  );
};
//adding banner for bowling score
var BowlingScore = function BowlingScore(props) {
  return React.createElement(
    "h2",
    null,
    "BOWLING SCORE"
  );
};
//creating numpad
var Numpad = function Numpad(props) {
  return React.createElement(
    "div",
    { className: "Numpad" },
    props.numberPad.map(function (row, index) {
      return React.createElement(Rows, { key: index, row: row, selectScore: props.selectScore });
    })
  );
};

var Rows = function Rows(props) {
  return React.createElement(
    "div",
    { className: "row" },
    props.row.map(function (key, index) {
      return React.createElement(Keys, { key: index, keys: key, selectScore: props.selectScore });
    })
  );
};

var Keys = function Keys(props) {
  return React.createElement(
    "div",
    { className: "key", onClick: function onClick() {
        props.selectScore(props.keys);
      } },
    props.keys
  );
};

//creating score board
var Score = function Score(props) {
  return React.createElement(
    "div",
    { className: "score" },
    props.score.map(function (frame, index) {
      return React.createElement(Frames, { key: index, frame: frame });
    })
  );
};

var Frames = function Frames(props) {
  return React.createElement(
    "div",
    { className: "frame" },
    props.frame.map(function (box, index) {
      return React.createElement(Box, { key: index, box: box });
    })
  );
};

var Box = function Box(props) {
  return React.createElement(
    "div",
    { className: "box" },
    props.box
  );
};

ReactDOM.render(React.createElement(Bowling, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanMiXSwibmFtZXMiOlsiQm93bGluZyIsInByb3BzIiwic3RhdGUiLCJudW1iZXJQYWQiLCJzY29yZSIsImN1cnJlbnRGcmFtZSIsImZpcnN0VGhyb3ciLCJzZWxlY3RlZFNjb3JlIiwia2V5cyIsInZhbHVlIiwiYWxlcnQiLCJzZXRTdGF0ZSIsInNlbGVjdFNjb3JlIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiU2VsZWN0U2NvcmUiLCJCb3dsaW5nU2NvcmUiLCJOdW1wYWQiLCJtYXAiLCJyb3ciLCJpbmRleCIsIlJvd3MiLCJrZXkiLCJLZXlzIiwiU2NvcmUiLCJmcmFtZSIsIkZyYW1lcyIsImJveCIsIkJveCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxPOzs7QUFDSixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsaUJBQVcsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFELEVBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBWixFQUF1QixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUF2QixFQUFrQyxlQUFsQyxDQURBO0FBRVhDLGFBQU8sQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQUQsRUFBUyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVQsRUFBaUIsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFqQixFQUF5QixDQUFDLENBQUQsRUFBSSxDQUFKLENBQXpCLEVBQWlDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBakMsRUFBeUMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUF6QyxFQUFpRCxDQUFDLENBQUQsRUFBSSxDQUFKLENBQWpELEVBQXlELENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBekQs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QUFVLE9BQWY7QUFDR0EsVUFBTXlCLEtBQU4sQ0FBWVAsR0FBWixDQUFnQixVQUFDUyxHQUFELEVBQU1QLEtBQU4sRUFBZ0I7QUFDL0IsYUFBTyxvQkFBQyxHQUFELElBQUssS0FBS0EsS0FBVixFQUFpQixLQUFLTyxHQUF0QixHQUFQO0FBQ0QsS0FGQTtBQURILEdBRGE7QUFBQSxDQUFmOztBQVFBLElBQU1DLE1BQU0sU0FBTkEsR0FBTSxDQUFDNUIsS0FBRDtBQUFBLFNBQ1Y7QUFBQTtBQUFBLE1BQUssV0FBVSxLQUFmO0FBQ0dBLFVBQU0yQjtBQURULEdBRFU7QUFBQSxDQUFaOztBQU1BRSxTQUFTQyxNQUFULENBQWdCLG9CQUFDLE9BQUQsT0FBaEIsRUFBNkJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBN0IiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQm93bGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBudW1iZXJQYWQ6IFtbMSwgMiwgM10sIFs0LCA1LCA2XSwgWzcsIDgsIDldLCBbYC1gLCBgWGAsIGAvYF1dLFxuICAgICAgc2NvcmU6IFtbMCwgMF0sIFswLCAwXSwgWzAsIDBdLCBbMCwgMF0sIFswLCAwXSwgWzAsIDBdLCBbMCwgMF0sIFswLCAwXSwgWzAsIDBdLCBbMCwgMCwgMF1dLFxuICAgICAgY3VycmVudEZyYW1lOiAxLFxuICAgICAgZmlyc3RUaHJvdzogdHJ1ZSwgLy9jaGVja3MgdG8gc2VlIGlmIGl0J3MgdGhlIGZpcnN0IHRocm93ID0+IGlmIGZpcnN0ID8gdHJ1ZSA6IGZhbHNlXG4gICAgICBzZWxlY3RlZFNjb3JlOiBudWxsXG4gICAgfTtcbiAgfVxuICAvL25lZWQgbWFrZSBudW1iZXJQYWQgY2xpY2thYmxlIHRvIGdldCBpdCdzIHZhbHVlIGFuZCB0cmFuc2xhdGVcbiAgLy90aGF0IHRvIHRoZSBzY29yZVxuICAvL2NoZWNrIHRvIHNlZSBpZiBpdCdzIHN0cmlrZSBlbHNlLCBmaWxsIG91dCB0aGUgZmlyc3QgaW5kZXggb2YgdGhlIGFycmF5XG4gIC8vaWYgYm90aCBmaWVsZHMgYXJlIGZpbGxlZCBvdXQgdGhlbiBtb3ZlIG9uIHRvIHRoZSBzY29yZSBmcmFtZVxuXG4gIGNoZWNrVGhyb3coKSB7XG4gICAgLy8gcmV0dXJuIHRoaXMuc3RhdGUuZmlyc3RUaHJvdyA/IFxuICB9XG5cbiAgLy93aGVuIG51bWJlclBhZCBpcyBjbGlja2VkLCBzZWxlY3Qgc2NvcmVcbiAgc2VsZWN0U2NvcmUoa2V5cykge1xuICAgIGxldCB2YWx1ZSA9IGtleXM7XG4gICAgLy9uZWVkIHRvIGdldCB2YWx1ZSBmcm9tIG51bWJlcnBhZCBhbmQgbW92ZSB0aGF0IHZhbHVlIHRvIHRoZSBzZWxlY3RlZFNjb3JlXG4gICAgLy90aGVuIHRoYXQgd2lsbCBjaGFuZ2UgdGhlIHN0YXRlIG9mIHRoZSBzY29yZVxuICAgIGFsZXJ0KCd0aGlzIHdhcyBjbGlja2VkJyk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RlZFNjb3JlOiB2YWx1ZSAvL3N0YXRlIHNlZW1zIHRvIGNoYW5nZSBldmVyeXRpbWUgc29tZXRoaW5nIGlzIGNsaWNrZWQgYWdhaW5cblxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2VsZWN0U2NvcmUgLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TnVtcGFkIG51bWJlclBhZD17dGhpcy5zdGF0ZS5udW1iZXJQYWR9IHNlbGVjdFNjb3JlPXt0aGlzLnNlbGVjdFNjb3JlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEJvd2xpbmdTY29yZSAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTY29yZSBzY29yZT17dGhpcy5zdGF0ZS5zY29yZX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuLy9hZGRpbmcgYSBiYW5uZXIgZm9yIHNjb3JlIHNlbGVjdG9yXG5jb25zdCBTZWxlY3RTY29yZSA9IChwcm9wcykgPT4gKFxuICA8aDI+U0VMRUNUIFlPVVIgU0NPUkUgSEVSRTwvaDI+XG4pXG4vL2FkZGluZyBiYW5uZXIgZm9yIGJvd2xpbmcgc2NvcmVcbmNvbnN0IEJvd2xpbmdTY29yZSA9IChwcm9wcykgPT4gKFxuICA8aDI+Qk9XTElORyBTQ09SRTwvaDI+XG4pXG4vL2NyZWF0aW5nIG51bXBhZFxuY29uc3QgTnVtcGFkID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiTnVtcGFkXCI+XG4gICAge3Byb3BzLm51bWJlclBhZC5tYXAoKHJvdywgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiA8Um93cyBrZXk9e2luZGV4fSByb3c9e3Jvd30gc2VsZWN0U2NvcmU9e3Byb3BzLnNlbGVjdFNjb3JlfS8+XG4gICAgfSl9XG4gIDwvZGl2PlxuKVxuXG5jb25zdCBSb3dzID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAge3Byb3BzLnJvdy5tYXAoKGtleSwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiA8S2V5cyBrZXk9e2luZGV4fSBrZXlzPXtrZXl9IHNlbGVjdFNjb3JlPXtwcm9wcy5zZWxlY3RTY29yZX0vPlxuICAgIH0pfVxuICA8L2Rpdj5cbilcblxuY29uc3QgS2V5cyA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImtleVwiIG9uQ2xpY2s9e2Z1bmN0aW9uKCkge3Byb3BzLnNlbGVjdFNjb3JlKHByb3BzLmtleXMpO319PlxuICAgIHtwcm9wcy5rZXlzfVxuICA8L2Rpdj5cbilcblxuLy9jcmVhdGluZyBzY29yZSBib2FyZFxuY29uc3QgU2NvcmUgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzY29yZVwiPlxuICAgIHtwcm9wcy5zY29yZS5tYXAoKGZyYW1lLCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIDxGcmFtZXMga2V5PXtpbmRleH0gZnJhbWU9e2ZyYW1lfSAvPlxuICAgIH0pfVxuICA8L2Rpdj5cbilcblxuY29uc3QgRnJhbWVzID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiZnJhbWVcIj5cbiAgICB7cHJvcHMuZnJhbWUubWFwKChib3gsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gPEJveCBrZXk9e2luZGV4fSBib3g9e2JveH0gLz5cbiAgICB9KX1cbiAgPC9kaXY+XG4pXG5cbmNvbnN0IEJveCA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuICAgIHtwcm9wcy5ib3h9XG4gIDwvZGl2PlxuKVxuXG5SZWFjdERPTS5yZW5kZXIoPEJvd2xpbmcgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iXX0=