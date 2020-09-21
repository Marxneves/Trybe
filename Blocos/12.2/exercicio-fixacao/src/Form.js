import React, { Component } from 'react'
import InputNumber from './Componentes/InputNumber/InputNumber';
import InputRadio from './Componentes/InputRadio/InputRadio';
import SelectState from './Componentes/SelectState/SelectState';
import TextArea from './Componentes/TextArea/TextArea';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      estadoFavorito: '',
      idade: 18,
      vaiComparecer: false,
      estado: '',
      comentarios: '',
      formularioComErros: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleError(boolean) {
    console.log(boolean)
    this.setState({
      formularioComErros: boolean,
    });
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <TextArea handleChange={this.handleChange} value={this.state.estadoFavorito} />

          <br />

          <InputNumber handleChange={this.handleChange} value={this.state.idade} handleError={this.handleError} />

          <br />

          <InputRadio handleChange={this.handleChange} />

          <br />

          <SelectState handleChange={this.handleChange} />

          <br />

          <label htmlFor="coments">
            Comentários:
          <input id="coments" name="comentarios" type="text" onChange={this.handleChange} value={this.state.comentarios}></input>
          </label>
          <span>{this.state.comentarios.length > 20 ? "Comentário muito grande" : ""}</span>

          <br />

          <input type="file"></input>

        </form>
      </div>
    );
  }
};

export default Form;