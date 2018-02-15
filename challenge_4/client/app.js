class Bowling extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberPad: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [`-`, `X`, `/`]],
      score: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0, 0]],
      currentFrame: 1,
      firstThrow: true, //checks to see if it's the first throw => if first ? true : false
      selectedScore: null
    };
  }
  //need make numberPad clickable to get it's value and translate
  //that to the score
  //check to see if it's strike else, fill out the first index of the array
  //if both fields are filled out then move on to the score frame

  checkThrow() {
    // return this.state.firstThrow ? 
  }

  //when numberPad is clicked, select score
  selectScore(keys) {
    let value = keys;
    //need to get value from numberpad and move that value to the selectedScore
    //then that will change the state of the score
    alert('this was clicked');
    this.setState({
      selectedScore: value //state seems to change everytime something is clicked again

    });
  }

  render() {
    return (
      <div>
        <SelectScore />
        <div>
          <Numpad numberPad={this.state.numberPad} selectScore={this.selectScore.bind(this)}/>
        </div>
          <BowlingScore />
        <div>
          <Score score={this.state.score}/>
        </div>
      </div>
    )
  }
}
//adding a banner for score selector
const SelectScore = (props) => (
  <h2>SELECT YOUR SCORE HERE</h2>
)
//adding banner for bowling score
const BowlingScore = (props) => (
  <h2>BOWLING SCORE</h2>
)
//creating numpad
const Numpad = (props) => (
  <div className="Numpad">
    {props.numberPad.map((row, index) => {
      return <Rows key={index} row={row} selectScore={props.selectScore}/>
    })}
  </div>
)

const Rows = (props) => (
  <div className="row">
    {props.row.map((key, index) => {
      return <Keys key={index} keys={key} selectScore={props.selectScore}/>
    })}
  </div>
)

const Keys = (props) => (
  <div className="key" onClick={function() {props.selectScore(props.keys);}}>
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
