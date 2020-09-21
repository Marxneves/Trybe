import React from 'react';

class InputNumber extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    let error = undefined;
    if (value < 18) error = "Idade não pode ser menor que 18"

    return (
      <div>
        <input
          type="number"
          name="idade"
          value={this.props.value}
          onChange={this.props.handleChange}
        />
        <span>{error ? error : ''}</span>
        {/* <span>{this.props.value < 18 ? () => { this.props.handleError(true) } : () => { this.props.handleError(false) }}</span> */}
      </div>
    );
  }
}

export default InputNumber;