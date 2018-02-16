class Bowling extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberPad: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [`-`, `X`, `/`]],
      score: [[], [], [], [], [], [], [], [], [], []],
      // score: [[null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null, null]],
      currentFrame: 0,
      currentScore: 0 //checks to see if it's the first throw => if first ? true : false
    };
  }

  changeFrames() {
    let frameCount = this.state.currentFrame;
    frameCount ++;
    this.setState({
      currentFrame: frameCount
    });
  }
  //adding scores together
  addingScores() {
    let combinedScores = [];
    for (var i = 0; i < this.state.score.length; i++) {
      for (var k = 0; k < this.state.score[i].length; k++) {
        if (this.state.score[i][k] === 'X') {
          combinedScores.push(10);
        } else {
          combinedScores.push(this.state.score[i][k]);
        }
      }
    }
    let scores = combinedScores.reduce((sum, val) => {
      return sum + val;
    }, 0);
    this.setState({
      currentScore: scores
    });
    console.log('scores', scores);
    console.log('state', this.state.currentScore)
  }

  strikes() {
    let points = 10;
      //info: we know that to get the full 30 points, you need a turkey
      //meaning we need to only check three index at the time if they're strikes
      //handle one strike
    for (var i = 0; i < this.state.score.length; i++) {
      if (this.state.score[i][0] === 'X' && this.state.score[i - 1][0] === 'X' && this.state.score[i - 2] === 'X') {
        points += 20;
      }
      else if (this.state.score[i][0] === 'X' && this.state.score[i - 1][0] === 'X') {
        points += 10;
      }
      else {
        points;
      }
    }
  }
  substractPoints() {
    //subtract points from missed spares
    //subtract points from missed strikes etc...
  }
  //adding spare conditions
  spares() {
    let points = 10;
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

  insertScore(keys) {
    let newScore = [];
    this.state.score.forEach((frame) => {
      newScore.push([...frame]);
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
        this.changeFrames()
        this.addingScores();
      }
      else if (newScore[this.state.currentFrame].length !== 2) {
        newScore[this.state.currentFrame].push(keys);
        this.setState({
          score: newScore
        });
        this.addingScores();
      }
      else if (newScore[this.state.currentFrame].length === 2) {
        this.changeFrames()
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

  render() {
    return (
      <div>
        <SelectScore />
        <div>
          <Numpad numberPad={this.state.numberPad} insertScore={this.insertScore.bind(this)}/>
        </div>
          <BowlingScore />
        <div>
          <Score score={this.state.score}/>
        </div>
          <TotalScore score={this.state.currentScore}/>
      </div>
    )
  }
}
//adding a banner for the total score
const TotalScore = (props) => (
  <h2>{`You're Total Score is : ${props.score}`}</h2>
)
//adding a banner for score selector
const SelectScore = (props) => (
  <h2>Select Your Roll Here:</h2>
)
//adding banner for bowling score
const BowlingScore = (props) => (
  <h2>Bowling Score:</h2>
)
//creating numpad
const Numpad = (props) => (
  <div className="Numpad">
    {props.numberPad.map((row, index) => {
      return <Rows key={index} row={row} insertScore={props.insertScore}/>
    })}
  </div>
)

const Rows = (props) => (
  <div className="row">
    {props.row.map((key, index) => {
      return <Keys key={index} keys={key} insertScore={props.insertScore}/>
    })}
  </div>
)

const Keys = (props) => (
  <div className="key" onClick={function() {props.insertScore(props.keys);}}>
    {props.keys}
  </div>
)

//creating score board
const Score = (props) => (
  <div className="score">
    {props.score.map((frame, index) => {
      return <Frames key={index} frame={frame} />
    })}
  </div>
)

const Frames = (props) => (
  <div className="frame">
    {props.frame.map((box, index) => {
      return <Box key={index} box={box} />
    })}
  </div>
)

const Box = (props) => (
  <div className="box">
    {props.box}
  </div>
)

ReactDOM.render(<Bowling />, document.getElementById('app'));
