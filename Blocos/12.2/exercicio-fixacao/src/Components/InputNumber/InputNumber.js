import React from 'react';

class InputNumber extends React.Component {
  render() {
    return (
      <div>
        <input
          type="number"
          name="idade"
          value={this.props.value}
          onChange={this.props.handleChange}
        />
        <span>{this.props.value < 18 ? "Idade não pode ser menor que 18" : ""}</span>
        {/* <span>{this.props.value < 18 ? () => { this.props.handleError(true) } : () => { this.props.handleError(false) }}</span> */}
      </div>
    );
  }
}

export default InputNumber;