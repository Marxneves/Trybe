import React from 'react';
import './button.css';

class Button extends React.Component {
  constructor() {
    super();

    this.handleState = this.handleState.bind(this);
  }

  handleState() {
    this.props.stateCallback({ type: this.props.children })
  }

  render() {
    return <button onClick={this.handleState}>{this.props.children}</button>
  }
}

export default Button;