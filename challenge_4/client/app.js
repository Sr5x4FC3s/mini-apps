class Bowling extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberPad: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [`-`, `X`, `/`]]
    };
  }
  render() {
    return (
      <div>
        <bowling numberPad={this.state.numberPad} />
      </div>
    )
  }
}

const Numpad = (props) => (
  <div className="numpad">
    {props.numberPad.map((row, index) => {
      return <Rows id={index} row={row} />
    })}
  </div>
)

const Row = (props) => (
  <div className="row">
    {props.row.map((key, index) => {
      return <Keys id={index} key={key} />
    })}
  </div>
)

const Key = (props) => (
  <div className="key">
    {props.key}
  </div>
)


ReactDOM.render(<Bowling />, document.getElementById('app'));
