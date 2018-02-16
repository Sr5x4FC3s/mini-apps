'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bowling = function (_React$Component) {
  _inherits(Bowling, _React$Component);

  function Bowling(props) {
    _classCallCheck(this, Bowling);

    var _this = _possibleConstructorReturn(this, (Bowling.__proto__ || Object.getPrototypeOf(Bowling)).call(this, props));

    _this.state = {
      numberPad: [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['-', 'X', '/']],
      score: [[], [], [], [], [], [], [], [], [], []],
      // score: [[null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null, null]],
      currentFrame: 0,
      currentScore: 0 //checks to see if it's the first throw => if first ? true : false
    };
    return _this;
  }

  _createClass(Bowling, [{
    key: 'changeFrames',
    value: function changeFrames() {
      var frameCount = this.state.currentFrame;
      frameCount++;
      this.setState({
        currentFrame: frameCount
      });
    }
    //adding scores together

  }, {
    key: 'addingScores',
    value: function addingScores() {
      var combinedScores = [];
      for (var i = 0; i < this.state.score.length; i++) {
        for (var k = 0; k < this.state.score[i].length; k++) {
          if (this.state.score[i][k] === 'X') {
            combinedScores.push(10);
          } else {
            combinedScores.push(this.state.score[i][k]);
          }
        }
      }
      var scores = combinedScores.reduce(function (sum, val) {
        return sum + val;
      }, 0);
      this.setState({
        currentScore: scores
      });
      console.log('scores', scores);
      console.log('state', this.state.currentScore);
    }
  }, {
    key: 'strikes',
    value: function strikes() {
      var points = 10;
      //info: we know that to get the full 30 points, you need a turkey
      //meaning we need to only check three index at the time if they're strikes
      //handle one strike
      for (var i = 0; i < this.state.score.length; i++) {
        if (this.state.score[i][0] === 'X' && this.state.score[i - 1][0] === 'X' && this.state.score[i - 2] === 'X') {
          points += 20;
        } else if (this.state.score[i][0] === 'X' && this.state.score[i - 1][0] === 'X') {
          points += 10;
        } else {
          points;
        }
      }
    }
  }, {
    key: 'substractPoints',
    value: function substractPoints() {}
    //subtract points from missed spares
    //subtract points from missed strikes etc...

    //adding spare conditions

  }, {
    key: 'spares',
    value: function spares() {
      var points = 10;
      for (var i = 0; i < this.state.score.length; i++) {
        if (this.state.score[i][0] === '9' && this.state.score[i][1] === '1') {
          //points are dependent on what is rolled on the subsequent frame
          point += 10;
        }
      }
    }
    // insertScore(keys) {
    //   alert('this was clicked dude');
    //   let value = keys;
    //   let newScore = [];
    //   this.state.score.forEach((frame) => {
    //     newScore.push([...frame]);
    //   });
    //   debugger;
    //   if (this.state.currentFrame !== 9) {
    //     for (let i = 0; i < 2; i++) {
    //       //check for a value at index zero of the board
    //         //there are only three throws max for the game
    //       if (newScore[this.state.currentFrame][i] === null) {
    //         if (this.state.firstThrow === true) { //if true
    //           newScore[this.state.currentFrame].splice(i, 1, value);
    //           console.log(newScore);
    //           this.setState({
    //             score: newScore,
    //             firstThrow: false
    //           });
    //           console.log(this.state.score)
    //           console.log(this.state.firstThrow)
    //           if (this.state.selectedScore === 'X') {
    //             let count = this.state.currentFrame;
    //             console.log(count);
    //             count++;
    //             console.log('after increment', count);
    //             this.setState({
    //               currentFrame: count
    //             });
    //             console.log(this.state.currentFrame)
    //           }
    //         } else {
    //           newScore[this.state.currentFrame].splice(i, 1, value);
    //           this.setState({
    //             score: newScore,
    //             firstThrow: true
    //           });
    //         }
    //       }
    //     }
    //   } else {
    //     for (let j = 0; j < 3; j++) {
    //       if (newScore[this.state.currentFrame][j] === null) {
    //         if (this.state.firstThrow) { //if true
    //           newScore[this.state.currentFrame].splice(i, 1, value);
    //           this.setState({
    //             score: newScore,
    //             firstThrow: false
    //           });
    //           //*** add case for open frames in the tenth
    //         } else {
    //           newScore[this.state.currentFrame].splice(i, 1, value);
    //           this.setState({
    //             score: newScore
    //           });
    //         }
    //       }
    //     }
    //   }
    // }

  }, {
    key: 'insertScore',
    value: function insertScore(keys) {
      var newScore = [];
      this.state.score.forEach(function (frame) {
        newScore.push([].concat(_toConsumableArray(frame)));
      });
      if (this.state.currentFrame === 9) {
        if (newScore[this.state.currentFrame].length !== 3) {
          newScore[this.state.currentFrame].push(keys);
          this.setState({
            score: newScore
          });
          this.addingScores();
        } else {
          alert('game is over');
        }
      } else {
        if (JSON.stringify(newScore[this.state.currentFrame]) === JSON.stringify(['X'])) {
          this.changeFrames();
          this.addingScores();
        } else if (newScore[this.state.currentFrame].length !== 2) {
          newScore[this.state.currentFrame].push(keys);
          this.setState({
            score: newScore
          });
          this.addingScores();
        } else if (newScore[this.state.currentFrame].length === 2) {
          this.changeFrames();
          this.addingScores();
        }
      }
      // if (newScore[this.state.currentFrame].length === 2 && this.state.score[0][0] + this.state.score[0][1]) {
      //   let rerender = [this.state.score[0][0], '/'];
      //   console.log(rerender);
      //   this.setState({
      //     score: rerender
      //   });
      // }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(SelectScore, null),
        React.createElement(
          'div',
          null,
          React.createElement(Numpad, { numberPad: this.state.numberPad, insertScore: this.insertScore.bind(this) })
        ),
        React.createElement(BowlingScore, null),
        React.createElement(
          'div',
          null,
          React.createElement(Score, { score: this.state.score })
        ),
        React.createElement(TotalScore, { score: this.state.currentScore })
      );
    }
  }]);

  return Bowling;
}(React.Component);
//adding a banner for the total score


var TotalScore = function TotalScore(props) {
  return React.createElement(
    'h2',
    null,
    'You\'re Total Score is : ' + props.score
  );
};
//adding a banner for score selector
var SelectScore = function SelectScore(props) {
  return React.createElement(
    'h2',
    null,
    'Select Your Roll Here:'
  );
};
//adding banner for bowling score
var BowlingScore = function BowlingScore(props) {
  return React.createElement(
    'h2',
    null,
    'Bowling Score:'
  );
};
//creating numpad
var Numpad = function Numpad(props) {
  return React.createElement(
    'div',
    { className: 'Numpad' },
    props.numberPad.map(function (row, index) {
      return React.createElement(Rows, { key: index, row: row, insertScore: props.insertScore });
    })
  );
};

var Rows = function Rows(props) {
  return React.createElement(
    'div',
    { className: 'row' },
    props.row.map(function (key, index) {
      return React.createElement(Keys, { key: index, keys: key, insertScore: props.insertScore });
    })
  );
};

var Keys = function Keys(props) {
  return React.createElement(
    'div',
    { className: 'key', onClick: function onClick() {
        props.insertScore(props.keys);
      } },
    props.keys
  );
};

//creating score board
var Score = function Score(props) {
  return React.createElement(
    'div',
    { className: 'score' },
    props.score.map(function (frame, index) {
      return React.createElement(Frames, { key: index, frame: frame });
    })
  );
};

var Frames = function Frames(props) {
  return React.createElement(
    'div',
    { className: 'frame' },
    props.frame.map(function (box, index) {
      return React.createElement(Box, { key: index, box: box });
    })
  );
};

var Box = function Box(props) {
  return React.createElement(
    'div',
    { className: 'box' },
    props.box
  );
};

ReactDOM.render(React.createElement(Bowling, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanMiXSwibmFtZXMiOlsiQm93bGluZyIsInByb3BzIiwic3RhdGUiLCJudW1iZXJQYWQiLCJzY29yZSIsImN1cnJlbnRGcmFtZSIsImN1cnJlbnRTY29yZSIsImZyYW1lQ291bnQiLCJzZXRTdGF0ZSIsImNvbWJpbmVkU2NvcmVzIiwiaSIsImxlbmd0aCIsImsiLCJwdXNoIiwic2NvcmVzIiwicmVkdWNlIiwic3VtIiwidmFsIiwiY29uc29sZSIsImxvZyIsInBvaW50cyIsInBvaW50Iiwia2V5cyIsIm5ld1Njb3JlIiwiZm9yRWFjaCIsImZyYW1lIiwiYWRkaW5nU2NvcmVzIiwiYWxlcnQiLCJKU09OIiwic3RyaW5naWZ5IiwiY2hhbmdlRnJhbWVzIiwiaW5zZXJ0U2NvcmUiLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJUb3RhbFNjb3JlIiwiU2VsZWN0U2NvcmUiLCJCb3dsaW5nU2NvcmUiLCJOdW1wYWQiLCJtYXAiLCJyb3ciLCJpbmRleCIsIlJvd3MiLCJrZXkiLCJLZXlzIiwiU2NvcmUiLCJGcmFtZXMiLCJib3giLCJCb3giLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFNQSxPOzs7QUFDSixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsaUJBQVcsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFELEVBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBWixFQUF1QixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUF2QixFQUFrQyxlQUFsQyxDQURBO0FBRVhDLGFBQU8sQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEVBQXJCLEVBQXlCLEVB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QSxNQUFLLFdBQVUsT0FBZjtBQUNHQSxVQUFNRyxLQUFOLENBQVltQyxHQUFaLENBQWdCLFVBQUNkLEtBQUQsRUFBUWdCLEtBQVIsRUFBa0I7QUFDakMsYUFBTyxvQkFBQyxNQUFELElBQVEsS0FBS0EsS0FBYixFQUFvQixPQUFPaEIsS0FBM0IsR0FBUDtBQUNELEtBRkE7QUFESCxHQURZO0FBQUEsQ0FBZDs7QUFRQSxJQUFNcUIsU0FBUyxTQUFUQSxNQUFTLENBQUM3QyxLQUFEO0FBQUEsU0FDYjtBQUFBO0FBQUEsTUFBSyxXQUFVLE9BQWY7QUFDR0EsVUFBTXdCLEtBQU4sQ0FBWWMsR0FBWixDQUFnQixVQUFDUSxHQUFELEVBQU1OLEtBQU4sRUFBZ0I7QUFDL0IsYUFBTyxvQkFBQyxHQUFELElBQUssS0FBS0EsS0FBVixFQUFpQixLQUFLTSxHQUF0QixHQUFQO0FBQ0QsS0FGQTtBQURILEdBRGE7QUFBQSxDQUFmOztBQVFBLElBQU1DLE1BQU0sU0FBTkEsR0FBTSxDQUFDL0MsS0FBRDtBQUFBLFNBQ1Y7QUFBQTtBQUFBLE1BQUssV0FBVSxLQUFmO0FBQ0dBLFVBQU04QztBQURULEdBRFU7QUFBQSxDQUFaOztBQU1BRSxTQUFTQyxNQUFULENBQWdCLG9CQUFDLE9BQUQsT0FBaEIsRUFBNkJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBN0IiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQm93bGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBudW1iZXJQYWQ6IFtbMSwgMiwgM10sIFs0LCA1LCA2XSwgWzcsIDgsIDldLCBbYC1gLCBgWGAsIGAvYF1dLFxuICAgICAgc2NvcmU6IFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0sXG4gICAgICAvLyBzY29yZTogW1tudWxsLCBudWxsXSwgW251bGwsIG51bGxdLCBbbnVsbCwgbnVsbF0sIFtudWxsLCBudWxsXSwgW251bGwsIG51bGxdLCBbbnVsbCwgbnVsbF0sIFtudWxsLCBudWxsXSwgW251bGwsIG51bGxdLCBbbnVsbCwgbnVsbF0sIFtudWxsLCBudWxsLCBudWxsXV0sXG4gICAgICBjdXJyZW50RnJhbWU6IDAsXG4gICAgICBjdXJyZW50U2NvcmU6IDAgLy9jaGVja3MgdG8gc2VlIGlmIGl0J3MgdGhlIGZpcnN0IHRocm93ID0+IGlmIGZpcnN0ID8gdHJ1ZSA6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIGNoYW5nZUZyYW1lcygpIHtcbiAgICBsZXQgZnJhbWVDb3VudCA9IHRoaXMuc3RhdGUuY3VycmVudEZyYW1lO1xuICAgIGZyYW1lQ291bnQgKys7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50RnJhbWU6IGZyYW1lQ291bnRcbiAgICB9KTtcbiAgfVxuICAvL2FkZGluZyBzY29yZXMgdG9nZXRoZXJcbiAgYWRkaW5nU2NvcmVzKCkge1xuICAgIGxldCBjb21iaW5lZFNjb3JlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5zY29yZS5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLnN0YXRlLnNjb3JlW2ldLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNjb3JlW2ldW2tdID09PSAnWCcpIHtcbiAgICAgICAgICBjb21iaW5lZFNjb3Jlcy5wdXNoKDEwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb21iaW5lZFNjb3Jlcy5wdXNoKHRoaXMuc3RhdGUuc2NvcmVbaV1ba10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBzY29yZXMgPSBjb21iaW5lZFNjb3Jlcy5yZWR1Y2UoKHN1bSwgdmFsKSA9PiB7XG4gICAgICByZXR1cm4gc3VtICsgdmFsO1xuICAgIH0sIDApO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudFNjb3JlOiBzY29yZXNcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZygnc2NvcmVzJywgc2NvcmVzKTtcbiAgICBjb25zb2xlLmxvZygnc3RhdGUnLCB0aGlzLnN0YXRlLmN1cnJlbnRTY29yZSlcbiAgfVxuXG4gIHN0cmlrZXMoKSB7XG4gICAgbGV0IHBvaW50cyA9IDEwO1xuICAgICAgLy9pbmZvOiB3ZSBrbm93IHRoYXQgdG8gZ2V0IHRoZSBmdWxsIDMwIHBvaW50cywgeW91IG5lZWQgYSB0dXJrZXlcbiAgICAgIC8vbWVhbmluZyB3ZSBuZWVkIHRvIG9ubHkgY2hlY2sgdGhyZWUgaW5kZXggYXQgdGhlIHRpbWUgaWYgdGhleSdyZSBzdHJpa2VzXG4gICAgICAvL2hhbmRsZSBvbmUgc3RyaWtlXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnNjb3JlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zY29yZVtpXVswXSA9PT0gJ1gnICYmIHRoaXMuc3RhdGUuc2NvcmVbaSAtIDFdWzBdID09PSAnWCcgJiYgdGhpcy5zdGF0ZS5zY29yZVtpIC0gMl0gPT09ICdYJykge1xuICAgICAgICBwb2ludHMgKz0gMjA7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnNjb3JlW2ldWzBdID09PSAnWCcgJiYgdGhpcy5zdGF0ZS5zY29yZVtpIC0gMV1bMF0gPT09ICdYJykge1xuICAgICAgICBwb2ludHMgKz0gMTA7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcG9pbnRzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzdWJzdHJhY3RQb2ludHMoKSB7XG4gICAgLy9zdWJ0cmFjdCBwb2ludHMgZnJvbSBtaXNzZWQgc3BhcmVzXG4gICAgLy9zdWJ0cmFjdCBwb2ludHMgZnJvbSBtaXNzZWQgc3RyaWtlcyBldGMuLi5cbiAgfVxuICAvL2FkZGluZyBzcGFyZSBjb25kaXRpb25zXG4gIHNwYXJlcygpIHtcbiAgICBsZXQgcG9pbnRzID0gMTA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnNjb3JlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zY29yZVtpXVswXSA9PT0gJzknICYmIHRoaXMuc3RhdGUuc2NvcmVbaV1bMV0gPT09ICcxJykge1xuICAgICAgICAvL3BvaW50cyBhcmUgZGVwZW5kZW50IG9uIHdoYXQgaXMgcm9sbGVkIG9uIHRoZSBzdWJzZXF1ZW50IGZyYW1lXG4gICAgICAgIHBvaW50ICs9IDEwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBpbnNlcnRTY29yZShrZXlzKSB7XG4gIC8vICAgYWxlcnQoJ3RoaXMgd2FzIGNsaWNrZWQgZHVkZScpO1xuICAvLyAgIGxldCB2YWx1ZSA9IGtleXM7XG4gIC8vICAgbGV0IG5ld1Njb3JlID0gW107XG4gIC8vICAgdGhpcy5zdGF0ZS5zY29yZS5mb3JFYWNoKChmcmFtZSkgPT4ge1xuICAvLyAgICAgbmV3U2NvcmUucHVzaChbLi4uZnJhbWVdKTtcbiAgLy8gICB9KTtcbiAgLy8gICBkZWJ1Z2dlcjtcbiAgLy8gICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50RnJhbWUgIT09IDkpIHtcbiAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gIC8vICAgICAgIC8vY2hlY2sgZm9yIGEgdmFsdWUgYXQgaW5kZXggemVybyBvZiB0aGUgYm9hcmRcbiAgLy8gICAgICAgICAvL3RoZXJlIGFyZSBvbmx5IHRocmVlIHRocm93cyBtYXggZm9yIHRoZSBnYW1lXG4gIC8vICAgICAgIGlmIChuZXdTY29yZVt0aGlzLnN0YXRlLmN1cnJlbnRGcmFtZV1baV0gPT09IG51bGwpIHtcbiAgLy8gICAgICAgICBpZiAodGhpcy5zdGF0ZS5maXJzdFRocm93ID09PSB0cnVlKSB7IC8vaWYgdHJ1ZVxuICAvLyAgICAgICAgICAgbmV3U2NvcmVbdGhpcy5zdGF0ZS5jdXJyZW50RnJhbWVdLnNwbGljZShpLCAxLCB2YWx1ZSk7XG4gIC8vICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdTY29yZSk7XG4gIC8vICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgLy8gICAgICAgICAgICAgc2NvcmU6IG5ld1Njb3JlLFxuICAvLyAgICAgICAgICAgICBmaXJzdFRocm93OiBmYWxzZVxuICAvLyAgICAgICAgICAgfSk7XG4gIC8vICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNjb3JlKVxuICAvLyAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5maXJzdFRocm93KVxuICAvLyAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRTY29yZSA9PT0gJ1gnKSB7XG4gIC8vICAgICAgICAgICAgIGxldCBjb3VudCA9IHRoaXMuc3RhdGUuY3VycmVudEZyYW1lO1xuICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb3VudCk7XG4gIC8vICAgICAgICAgICAgIGNvdW50Kys7XG4gIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZnRlciBpbmNyZW1lbnQnLCBjb3VudCk7XG4gIC8vICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAvLyAgICAgICAgICAgICAgIGN1cnJlbnRGcmFtZTogY291bnRcbiAgLy8gICAgICAgICAgICAgfSk7XG4gIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuY3VycmVudEZyYW1lKVxuICAvLyAgICAgICAgICAgfVxuICAvLyAgICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgICBuZXdTY29yZVt0aGlzLnN0YXRlLmN1cnJlbnRGcmFtZV0uc3BsaWNlKGksIDEsIHZhbHVlKTtcbiAgLy8gICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAvLyAgICAgICAgICAgICBzY29yZTogbmV3U2NvcmUsXG4gIC8vICAgICAgICAgICAgIGZpcnN0VGhyb3c6IHRydWVcbiAgLy8gICAgICAgICAgIH0pO1xuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xuICAvLyAgICAgICBpZiAobmV3U2NvcmVbdGhpcy5zdGF0ZS5jdXJyZW50RnJhbWVdW2pdID09PSBudWxsKSB7XG4gIC8vICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZmlyc3RUaHJvdykgeyAvL2lmIHRydWVcbiAgLy8gICAgICAgICAgIG5ld1Njb3JlW3RoaXMuc3RhdGUuY3VycmVudEZyYW1lXS5zcGxpY2UoaSwgMSwgdmFsdWUpO1xuICAvLyAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gIC8vICAgICAgICAgICAgIHNjb3JlOiBuZXdTY29yZSxcbiAgLy8gICAgICAgICAgICAgZmlyc3RUaHJvdzogZmFsc2VcbiAgLy8gICAgICAgICAgIH0pO1xuICAvLyAgICAgICAgICAgLy8qKiogYWRkIGNhc2UgZm9yIG9wZW4gZnJhbWVzIGluIHRoZSB0ZW50aFxuICAvLyAgICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgICBuZXdTY29yZVt0aGlzLnN0YXRlLmN1cnJlbnRGcmFtZV0uc3BsaWNlKGksIDEsIHZhbHVlKTtcbiAgLy8gICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAvLyAgICAgICAgICAgICBzY29yZTogbmV3U2NvcmVcbiAgLy8gICAgICAgICAgIH0pO1xuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGluc2VydFNjb3JlKGtleXMpIHtcbiAgICBsZXQgbmV3U2NvcmUgPSBbXTtcbiAgICB0aGlzLnN0YXRlLnNjb3JlLmZvckVhY2goKGZyYW1lKSA9PiB7XG4gICAgICBuZXdTY29yZS5wdXNoKFsuLi5mcmFtZV0pO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRGcmFtZSA9PT0gOSkge1xuICAgICAgaWYgKG5ld1Njb3JlW3RoaXMuc3RhdGUuY3VycmVudEZyYW1lXS5sZW5ndGggIT09IDMpIHtcbiAgICAgICAgbmV3U2NvcmVbdGhpcy5zdGF0ZS5jdXJyZW50RnJhbWVdLnB1c2goa2V5cyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHNjb3JlOiBuZXdTY29yZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRpbmdTY29yZXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KCdnYW1lIGlzIG92ZXInKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KG5ld1Njb3JlW3RoaXMuc3RhdGUuY3VycmVudEZyYW1lXSkgPT09IEpTT04uc3RyaW5naWZ5KFsnWCddKSkge1xuICAgICAgICB0aGlzLmNoYW5nZUZyYW1lcygpXG4gICAgICAgIHRoaXMuYWRkaW5nU2NvcmVzKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChuZXdTY29yZVt0aGlzLnN0YXRlLmN1cnJlbnRGcmFtZV0ubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIG5ld1Njb3JlW3RoaXMuc3RhdGUuY3VycmVudEZyYW1lXS5wdXNoKGtleXMpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzY29yZTogbmV3U2NvcmVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkaW5nU2NvcmVzKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChuZXdTY29yZVt0aGlzLnN0YXRlLmN1cnJlbnRGcmFtZV0ubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlRnJhbWVzKClcbiAgICAgICAgdGhpcy5hZGRpbmdTY29yZXMoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gaWYgKG5ld1Njb3JlW3RoaXMuc3RhdGUuY3VycmVudEZyYW1lXS5sZW5ndGggPT09IDIgJiYgdGhpcy5zdGF0ZS5zY29yZVswXVswXSArIHRoaXMuc3RhdGUuc2NvcmVbMF1bMV0pIHtcbiAgICAvLyAgIGxldCByZXJlbmRlciA9IFt0aGlzLnN0YXRlLnNjb3JlWzBdWzBdLCAnLyddO1xuICAgIC8vICAgY29uc29sZS5sb2cocmVyZW5kZXIpO1xuICAgIC8vICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICAgIHNjb3JlOiByZXJlbmRlclxuICAgIC8vICAgfSk7XG4gICAgLy8gfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2VsZWN0U2NvcmUgLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TnVtcGFkIG51bWJlclBhZD17dGhpcy5zdGF0ZS5udW1iZXJQYWR9IGluc2VydFNjb3JlPXt0aGlzLmluc2VydFNjb3JlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEJvd2xpbmdTY29yZSAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTY29yZSBzY29yZT17dGhpcy5zdGF0ZS5zY29yZX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8VG90YWxTY29yZSBzY29yZT17dGhpcy5zdGF0ZS5jdXJyZW50U2NvcmV9Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuLy9hZGRpbmcgYSBiYW5uZXIgZm9yIHRoZSB0b3RhbCBzY29yZVxuY29uc3QgVG90YWxTY29yZSA9IChwcm9wcykgPT4gKFxuICA8aDI+e2BZb3UncmUgVG90YWwgU2NvcmUgaXMgOiAke3Byb3BzLnNjb3JlfWB9PC9oMj5cbilcbi8vYWRkaW5nIGEgYmFubmVyIGZvciBzY29yZSBzZWxlY3RvclxuY29uc3QgU2VsZWN0U2NvcmUgPSAocHJvcHMpID0+IChcbiAgPGgyPlNlbGVjdCBZb3VyIFJvbGwgSGVyZTo8L2gyPlxuKVxuLy9hZGRpbmcgYmFubmVyIGZvciBib3dsaW5nIHNjb3JlXG5jb25zdCBCb3dsaW5nU2NvcmUgPSAocHJvcHMpID0+IChcbiAgPGgyPkJvd2xpbmcgU2NvcmU6PC9oMj5cbilcbi8vY3JlYXRpbmcgbnVtcGFkXG5jb25zdCBOdW1wYWQgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJOdW1wYWRcIj5cbiAgICB7cHJvcHMubnVtYmVyUGFkLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIDxSb3dzIGtleT17aW5kZXh9IHJvdz17cm93fSBpbnNlcnRTY29yZT17cHJvcHMuaW5zZXJ0U2NvcmV9Lz5cbiAgICB9KX1cbiAgPC9kaXY+XG4pXG5cbmNvbnN0IFJvd3MgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICB7cHJvcHMucm93Lm1hcCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIDxLZXlzIGtleT17aW5kZXh9IGtleXM9e2tleX0gaW5zZXJ0U2NvcmU9e3Byb3BzLmluc2VydFNjb3JlfS8+XG4gICAgfSl9XG4gIDwvZGl2PlxuKVxuXG5jb25zdCBLZXlzID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwia2V5XCIgb25DbGljaz17ZnVuY3Rpb24oKSB7cHJvcHMuaW5zZXJ0U2NvcmUocHJvcHMua2V5cyk7fX0+XG4gICAge3Byb3BzLmtleXN9XG4gIDwvZGl2PlxuKVxuXG4vL2NyZWF0aW5nIHNjb3JlIGJvYXJkXG5jb25zdCBTY29yZSA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInNjb3JlXCI+XG4gICAge3Byb3BzLnNjb3JlLm1hcCgoZnJhbWUsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gPEZyYW1lcyBrZXk9e2luZGV4fSBmcmFtZT17ZnJhbWV9IC8+XG4gICAgfSl9XG4gIDwvZGl2PlxuKVxuXG5jb25zdCBGcmFtZXMgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJmcmFtZVwiPlxuICAgIHtwcm9wcy5mcmFtZS5tYXAoKGJveCwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiA8Qm94IGtleT17aW5kZXh9IGJveD17Ym94fSAvPlxuICAgIH0pfVxuICA8L2Rpdj5cbilcblxuY29uc3QgQm94ID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAge3Byb3BzLmJveH1cbiAgPC9kaXY+XG4pXG5cblJlYWN0RE9NLnJlbmRlcig8Qm93bGluZyAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiJdfQ==