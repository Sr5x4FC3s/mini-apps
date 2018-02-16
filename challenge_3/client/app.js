class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameData: [
        [{id: 1, t: false, val: null}, {id: 2, t: false, val: null}, {id: 3, t: false, val: null}, {id: 4, t: false, val: null}, {id: 5, t: false, val: null}, {id: 6, t: false, val: null}, {id: 7, t: false, val: null}],
        [{id: 1, t: false, val: null}, {id: 2, t: false, val: null}, {id: 3, t: false, val: null}, {id: 4, t: false, val: null}, {id: 5, t: false, val: null}, {id: 6, t: false, val: null}, {id: 7, t: false, val: null}],
        [{id: 1, t: false, val: null}, {id: 2, t: false, val: null}, {id: 3, t: false, val: null}, {id: 4, t: false, val: null}, {id: 5, t: false, val: null}, {id: 6, t: false, val: null}, {id: 7, t: false, val: null}],
        [{id: 1, t: false, val: null}, {id: 2, t: false, val: null}, {id: 3, t: false, val: null}, {id: 4, t: false, val: null}, {id: 5, t: false, val: null}, {id: 6, t: false, val: null}, {id: 7, t: false, val: null}],
        [{id: 1, t: false, val: null}, {id: 2, t: false, val: null}, {id: 3, t: false, val: null}, {id: 4, t: false, val: null}, {id: 5, t: false, val: null}, {id: 6, t: false, val: null}, {id: 7, t: false, val: null}],
        [{id: 1, t: false, val: null}, {id: 2, t: false, val: null}, {id: 3, t: false, val: null}, {id: 4, t: false, val: null}, {id: 5, t: false, val: null}, {id: 6, t: false, val: null}, {id: 7, t: false, val: null}]
      ], // we can push toggled pieces into this array with an id
      length: 7,
      height: 6
    };
  }
  // need to change the state of something of something in row and each box
  //each index will need to be able to handle a onclick handler that will change the state
  //each state will need to be able two different colors
  //toggle state will be on and off to change
  //on toggle() that will change the state of null to red/black piece

  handleClick() {
    alert('this has been clicked');
    //change the state on click
    // this.setState({
    //   this.gameData = ,
    //
    // });
  }

  render() {
    //create the rows and columns of the table
    // let rows = [];
    // //style stuff
    const rowStyles = {
      height: '100px',
      width: '100px',
      border: '1px solid #222'
    }
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
    return (
      <div>
        <table id="issaBoard">
          <tbody>
            {this.state.gameData.map((row, index) => {
              return <tr key={index.toString()} id={index.toString()} rows={row} onClick={this.state.handleClick} style={rowStyles}/>
            })}
          </tbody>
        </table>
      </div>
    )
  }
}


var individualBox = (props) => {
  <tr>
    {this.state.rows.map((box, index) => {
      return <td key={index.toString()} id={index.toString()} boxs={box} />
    })}
  </tr>
}
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

ReactDOM.render(<App />, document.getElementById('app'));
