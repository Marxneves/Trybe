import React from 'react';

class InputRadio extends React.Component {
  render() {
    return (
      <fieldset>
        <legend>Comparecer no evento</legend>
        <label htmlFor="comparecer">
          <input
            id="comparecer"
            type="radio"
            name="vaiComparecer"
            value="Sim"
            onChange={this.props.handleChange}
          />
        Sim
      </label>
        <label htmlFor="naoComparecer">
          <input
            id="naoComparecer"
            type="radio"
            name="vaiComparecer"
            value="Nao"
            onChange={this.props.handleChange}
          />
        Não
      </label>
      </fieldset>
    );
  }
};

export default InputRadio;
