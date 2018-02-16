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
          points = 30;
        } else if (this.state.score[i][0] === 'X' && this.state.score[i - 1][0] === 'X') {
          points = 20;
        } else {
          points;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanMiXSwibmFtZXMiOlsiQm93bGluZyIsInByb3BzIiwic3RhdGUiLCJudW1iZXJQYWQiLCJzY29yZSIsImN1cnJlbnRGcmFtZSIsImN1cnJlbnRTY29yZSIsImZyYW1lQ291bnQiLCJzZXRTdGF0ZSIsImNvbWJpbmVkU2NvcmVzIiwiaSIsImxlbmd0aCIsImsiLCJwdXNoIiwic2NvcmVzIiwicmVkdWNlIiwic3VtIiwidmFsIiwiY29uc29sZSIsImxvZyIsInBvaW50cyIsImtleXMiLCJuZXdTY29yZSIsImZvckVhY2giLCJmcmFtZSIsImFkZGluZ1Njb3JlcyIsImFsZXJ0IiwiSlNPTiIsInN0cmluZ2lmeSIsImNoYW5nZUZyYW1lcyIsImluc2VydFNjb3JlIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiVG90YWxTY29yZSIsIlNlbGVjdFNjb3JlIiwiQm93bGluZ1Njb3JlIiwiTnVtcGFkIiwibWFwIiwicm93IiwiaW5kZXgiLCJSb3dzIiwia2V5IiwiS2V5cyIsIlNjb3JlIiwiRnJhbWVzIiwiYm94IiwiQm94IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBTUEsTzs7O0FBQ0osbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxrSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGlCQUFXLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBRCxFQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVosRUFBdUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBdkIsRUFBa0MsZUFBbEMsQ0FEQTtBQUVYQyxhQUFPLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixFQUF5QixFQUF6QixFQUE2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QUFLQSxLQUFWLEVBQWlCLEtBQUtNLEdBQXRCLEdBQVA7QUFDRCxLQUZBO0FBREgsR0FEYTtBQUFBLENBQWY7O0FBUUEsSUFBTUMsTUFBTSxTQUFOQSxHQUFNLENBQUM5QyxLQUFEO0FBQUEsU0FDVjtBQUFBO0FBQUEsTUFBSyxXQUFVLEtBQWY7QUFDR0EsVUFBTTZDO0FBRFQsR0FEVTtBQUFBLENBQVo7O0FBTUFFLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsT0FBRCxPQUFoQixFQUE2QkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUE3QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCb3dsaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG51bWJlclBhZDogW1sxLCAyLCAzXSwgWzQsIDUsIDZdLCBbNywgOCwgOV0sIFtgLWAsIGBYYCwgYC9gXV0sXG4gICAgICBzY29yZTogW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXSxcbiAgICAgIC8vIHNjb3JlOiBbW251bGwsIG51bGxdLCBbbnVsbCwgbnVsbF0sIFtudWxsLCBudWxsXSwgW251bGwsIG51bGxdLCBbbnVsbCwgbnVsbF0sIFtudWxsLCBudWxsXSwgW251bGwsIG51bGxdLCBbbnVsbCwgbnVsbF0sIFtudWxsLCBudWxsXSwgW251bGwsIG51bGwsIG51bGxdXSxcbiAgICAgIGN1cnJlbnRGcmFtZTogMCxcbiAgICAgIGN1cnJlbnRTY29yZTogMCAvL2NoZWNrcyB0byBzZWUgaWYgaXQncyB0aGUgZmlyc3QgdGhyb3cgPT4gaWYgZmlyc3QgPyB0cnVlIDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgY2hhbmdlRnJhbWVzKCkge1xuICAgIGxldCBmcmFtZUNvdW50ID0gdGhpcy5zdGF0ZS5jdXJyZW50RnJhbWU7XG4gICAgZnJhbWVDb3VudCArKztcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRGcmFtZTogZnJhbWVDb3VudFxuICAgIH0pO1xuICB9XG4gIC8vYWRkaW5nIHNjb3JlcyB0b2dldGhlclxuICBhZGRpbmdTY29yZXMoKSB7XG4gICAgbGV0IGNvbWJpbmVkU2NvcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnNjb3JlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMuc3RhdGUuc2NvcmVbaV0ubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2NvcmVbaV1ba10gPT09ICdYJykge1xuICAgICAgICAgIGNvbWJpbmVkU2NvcmVzLnB1c2goMTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbWJpbmVkU2NvcmVzLnB1c2godGhpcy5zdGF0ZS5zY29yZVtpXVtrXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHNjb3JlcyA9IGNvbWJpbmVkU2NvcmVzLnJlZHVjZSgoc3VtLCB2YWwpID0+IHtcbiAgICAgIHJldHVybiBzdW0gKyB2YWw7XG4gICAgfSwgMCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50U2NvcmU6IHNjb3Jlc1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdzY29yZXMnLCBzY29yZXMpO1xuICAgIGNvbnNvbGUubG9nKCdzdGF0ZScsIHRoaXMuc3RhdGUuY3VycmVudFNjb3JlKVxuICB9XG5cbiAgc3RyaWtlcygpIHtcbiAgICBsZXQgcG9pbnRzID0gMTA7XG4gICAgICAvL2luZm86IHdlIGtub3cgdGhhdCB0byBnZXQgdGhlIGZ1bGwgMzAgcG9pbnRzLCB5b3UgbmVlZCBhIHR1cmtleVxuICAgICAgLy9tZWFuaW5nIHdlIG5lZWQgdG8gb25seSBjaGVjayB0aHJlZSBpbmRleCBhdCB0aGUgdGltZSBpZiB0aGV5J3JlIHN0cmlrZXNcbiAgICAgIC8vaGFuZGxlIG9uZSBzdHJpa2VcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RhdGUuc2NvcmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNjb3JlW2ldWzBdID09PSAnWCcgJiYgdGhpcy5zdGF0ZS5zY29yZVtpIC0gMV1bMF0gPT09ICdYJyAmJiB0aGlzLnN0YXRlLnNjb3JlW2kgLSAyXSA9PT0gJ1gnKSB7XG4gICAgICAgIHBvaW50cyA9IDMwO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5zY29yZVtpXVswXSA9PT0gJ1gnICYmIHRoaXMuc3RhdGUuc2NvcmVbaSAtIDFdWzBdID09PSAnWCcpIHtcbiAgICAgICAgcG9pbnRzID0gMjA7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcG9pbnRzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBpbnNlcnRTY29yZShrZXlzKSB7XG4gIC8vICAgYWxlcnQoJ3RoaXMgd2FzIGNsaWNrZWQgZHVkZScpO1xuICAvLyAgIGxldCB2YWx1ZSA9IGtleXM7XG4gIC8vICAgbGV0IG5ld1Njb3JlID0gW107XG4gIC8vICAgdGhpcy5zdGF0ZS5zY29yZS5mb3JFYWNoKChmcmFtZSkgPT4ge1xuICAvLyAgICAgbmV3U2NvcmUucHVzaChbLi4uZnJhbWVdKTtcbiAgLy8gICB9KTtcbiAgLy8gICBkZWJ1Z2dlcjtcbiAgLy8gICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50RnJhbWUgIT09IDkpIHtcbiAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gIC8vICAgICAgIC8vY2hlY2sgZm9yIGEgdmFsdWUgYXQgaW5kZXggemVybyBvZiB0aGUgYm9hcmRcbiAgLy8gICAgICAgICAvL3RoZXJlIGFyZSBvbmx5IHRocmVlIHRocm93cyBtYXggZm9yIHRoZSBnYW1lXG4gIC8vICAgICAgIGlmIChuZXdTY29yZVt0aGlzLnN0YXRlLmN1cnJlbnRGcmFtZV1baV0gPT09IG51bGwpIHtcbiAgLy8gICAgICAgICBpZiAodGhpcy5zdGF0ZS5maXJzdFRocm93ID09PSB0cnVlKSB7IC8vaWYgdHJ1ZVxuICAvLyAgICAgICAgICAgbmV3U2NvcmVbdGhpcy5zdGF0ZS5jdXJyZW50RnJhbWVdLnNwbGljZShpLCAxLCB2YWx1ZSk7XG4gIC8vICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdTY29yZSk7XG4gIC8vICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgLy8gICAgICAgICAgICAgc2NvcmU6IG5ld1Njb3JlLFxuICAvLyAgICAgICAgICAgICBmaXJzdFRocm93OiBmYWxzZVxuICAvLyAgICAgICAgICAgfSk7XG4gIC8vICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNjb3JlKVxuICAvLyAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5maXJzdFRocm93KVxuICAvLyAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRTY29yZSA9PT0gJ1gnKSB7XG4gIC8vICAgICAgICAgICAgIGxldCBjb3VudCA9IHRoaXMuc3RhdGUuY3VycmVudEZyYW1lO1xuICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb3VudCk7XG4gIC8vICAgICAgICAgICAgIGNvdW50Kys7XG4gIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZnRlciBpbmNyZW1lbnQnLCBjb3VudCk7XG4gIC8vICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAvLyAgICAgICAgICAgICAgIGN1cnJlbnRGcmFtZTogY291bnRcbiAgLy8gICAgICAgICAgICAgfSk7XG4gIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuY3VycmVudEZyYW1lKVxuICAvLyAgICAgICAgICAgfVxuICAvLyAgICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgICBuZXdTY29yZVt0aGlzLnN0YXRlLmN1cnJlbnRGcmFtZV0uc3BsaWNlKGksIDEsIHZhbHVlKTtcbiAgLy8gICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAvLyAgICAgICAgICAgICBzY29yZTogbmV3U2NvcmUsXG4gIC8vICAgICAgICAgICAgIGZpcnN0VGhyb3c6IHRydWVcbiAgLy8gICAgICAgICAgIH0pO1xuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xuICAvLyAgICAgICBpZiAobmV3U2NvcmVbdGhpcy5zdGF0ZS5jdXJyZW50RnJhbWVdW2pdID09PSBudWxsKSB7XG4gIC8vICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZmlyc3RUaHJvdykgeyAvL2lmIHRydWVcbiAgLy8gICAgICAgICAgIG5ld1Njb3JlW3RoaXMuc3RhdGUuY3VycmVudEZyYW1lXS5zcGxpY2UoaSwgMSwgdmFsdWUpO1xuICAvLyAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gIC8vICAgICAgICAgICAgIHNjb3JlOiBuZXdTY29yZSxcbiAgLy8gICAgICAgICAgICAgZmlyc3RUaHJvdzogZmFsc2VcbiAgLy8gICAgICAgICAgIH0pO1xuICAvLyAgICAgICAgICAgLy8qKiogYWRkIGNhc2UgZm9yIG9wZW4gZnJhbWVzIGluIHRoZSB0ZW50aFxuICAvLyAgICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgICBuZXdTY29yZVt0aGlzLnN0YXRlLmN1cnJlbnRGcmFtZV0uc3BsaWNlKGksIDEsIHZhbHVlKTtcbiAgLy8gICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAvLyAgICAgICAgICAgICBzY29yZTogbmV3U2NvcmVcbiAgLy8gICAgICAgICAgIH0pO1xuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGluc2VydFNjb3JlKGtleXMpIHtcbiAgICBsZXQgbmV3U2NvcmUgPSBbXTtcbiAgICB0aGlzLnN0YXRlLnNjb3JlLmZvckVhY2goKGZyYW1lKSA9PiB7XG4gICAgICBuZXdTY29yZS5wdXNoKFsuLi5mcmFtZV0pO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRGcmFtZSA9PT0gOSkge1xuICAgICAgaWYgKG5ld1Njb3JlW3RoaXMuc3RhdGUuY3VycmVudEZyYW1lXS5sZW5ndGggIT09IDMpIHtcbiAgICAgICAgbmV3U2NvcmVbdGhpcy5zdGF0ZS5jdXJyZW50RnJhbWVdLnB1c2goa2V5cyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHNjb3JlOiBuZXdTY29yZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRpbmdTY29yZXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KCdnYW1lIGlzIG92ZXInKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KG5ld1Njb3JlW3RoaXMuc3RhdGUuY3VycmVudEZyYW1lXSkgPT09IEpTT04uc3RyaW5naWZ5KFsnWCddKSkge1xuICAgICAgICB0aGlzLmNoYW5nZUZyYW1lcygpXG4gICAgICAgIHRoaXMuYWRkaW5nU2NvcmVzKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChuZXdTY29yZVt0aGlzLnN0YXRlLmN1cnJlbnRGcmFtZV0ubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIG5ld1Njb3JlW3RoaXMuc3RhdGUuY3VycmVudEZyYW1lXS5wdXNoKGtleXMpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzY29yZTogbmV3U2NvcmVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkaW5nU2NvcmVzKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChuZXdTY29yZVt0aGlzLnN0YXRlLmN1cnJlbnRGcmFtZV0ubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlRnJhbWVzKClcbiAgICAgICAgdGhpcy5hZGRpbmdTY29yZXMoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gaWYgKG5ld1Njb3JlW3RoaXMuc3RhdGUuY3VycmVudEZyYW1lXS5sZW5ndGggPT09IDIgJiYgdGhpcy5zdGF0ZS5zY29yZVswXVswXSArIHRoaXMuc3RhdGUuc2NvcmVbMF1bMV0pIHtcbiAgICAvLyAgIGxldCByZXJlbmRlciA9IFt0aGlzLnN0YXRlLnNjb3JlWzBdWzBdLCAnLyddO1xuICAgIC8vICAgY29uc29sZS5sb2cocmVyZW5kZXIpO1xuICAgIC8vICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICAgIHNjb3JlOiByZXJlbmRlclxuICAgIC8vICAgfSk7XG4gICAgLy8gfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2VsZWN0U2NvcmUgLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TnVtcGFkIG51bWJlclBhZD17dGhpcy5zdGF0ZS5udW1iZXJQYWR9IGluc2VydFNjb3JlPXt0aGlzLmluc2VydFNjb3JlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEJvd2xpbmdTY29yZSAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTY29yZSBzY29yZT17dGhpcy5zdGF0ZS5zY29yZX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8VG90YWxTY29yZSBzY29yZT17dGhpcy5zdGF0ZS5jdXJyZW50U2NvcmV9Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuLy9hZGRpbmcgYSBiYW5uZXIgZm9yIHRoZSB0b3RhbCBzY29yZVxuY29uc3QgVG90YWxTY29yZSA9IChwcm9wcykgPT4gKFxuICA8aDI+e2BZb3UncmUgVG90YWwgU2NvcmUgaXMgOiAke3Byb3BzLnNjb3JlfWB9PC9oMj5cbilcbi8vYWRkaW5nIGEgYmFubmVyIGZvciBzY29yZSBzZWxlY3RvclxuY29uc3QgU2VsZWN0U2NvcmUgPSAocHJvcHMpID0+IChcbiAgPGgyPlNlbGVjdCBZb3VyIFJvbGwgSGVyZTo8L2gyPlxuKVxuLy9hZGRpbmcgYmFubmVyIGZvciBib3dsaW5nIHNjb3JlXG5jb25zdCBCb3dsaW5nU2NvcmUgPSAocHJvcHMpID0+IChcbiAgPGgyPkJvd2xpbmcgU2NvcmU6PC9oMj5cbilcbi8vY3JlYXRpbmcgbnVtcGFkXG5jb25zdCBOdW1wYWQgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJOdW1wYWRcIj5cbiAgICB7cHJvcHMubnVtYmVyUGFkLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIDxSb3dzIGtleT17aW5kZXh9IHJvdz17cm93fSBpbnNlcnRTY29yZT17cHJvcHMuaW5zZXJ0U2NvcmV9Lz5cbiAgICB9KX1cbiAgPC9kaXY+XG4pXG5cbmNvbnN0IFJvd3MgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICB7cHJvcHMucm93Lm1hcCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIDxLZXlzIGtleT17aW5kZXh9IGtleXM9e2tleX0gaW5zZXJ0U2NvcmU9e3Byb3BzLmluc2VydFNjb3JlfS8+XG4gICAgfSl9XG4gIDwvZGl2PlxuKVxuXG5jb25zdCBLZXlzID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwia2V5XCIgb25DbGljaz17ZnVuY3Rpb24oKSB7cHJvcHMuaW5zZXJ0U2NvcmUocHJvcHMua2V5cyk7fX0+XG4gICAge3Byb3BzLmtleXN9XG4gIDwvZGl2PlxuKVxuXG4vL2NyZWF0aW5nIHNjb3JlIGJvYXJkXG5jb25zdCBTY29yZSA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInNjb3JlXCI+XG4gICAge3Byb3BzLnNjb3JlLm1hcCgoZnJhbWUsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gPEZyYW1lcyBrZXk9e2luZGV4fSBmcmFtZT17ZnJhbWV9IC8+XG4gICAgfSl9XG4gIDwvZGl2PlxuKVxuXG5jb25zdCBGcmFtZXMgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJmcmFtZVwiPlxuICAgIHtwcm9wcy5mcmFtZS5tYXAoKGJveCwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiA8Qm94IGtleT17aW5kZXh9IGJveD17Ym94fSAvPlxuICAgIH0pfVxuICA8L2Rpdj5cbilcblxuY29uc3QgQm94ID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAge3Byb3BzLmJveH1cbiAgPC9kaXY+XG4pXG5cblJlYWN0RE9NLnJlbmRlcig8Qm93bGluZyAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiJdfQ==