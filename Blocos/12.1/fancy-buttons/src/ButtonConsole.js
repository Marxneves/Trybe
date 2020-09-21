import React from 'react';

class ButtonConsole extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      Btn1: 0,
      Btn2: 0,
      Btn3: 0,
    }
  }

  async handleClick({ target }) {

    await this.setState((estadoAnterior, props) => ({
      [props.text]: estadoAnterior[props.text] + 1
    }));
    if ((this.state[this.props.text]) % 2 === 0) {
      console.log("Color is green ");
      console.log(target);
      target.style.background = 'green';
    };
  }

  render() {
    return <button onClick={this.handleClick}>{this.state[this.props.text]}</button>
  }
}

export default ButtonConsole;