import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addAssignment } from './actions';

const states = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO']

class Form extends Component {
  render() {
    const { change, value } = this.props;
    return (
      <form>
        <h1>Resume Application Form</h1>
        <fieldset>
          <label>Name: </label>
          <input name="name" type="name" value={ value.name } onChange={ ({ target }) => { change(target.value, target.name) } } maxLength="40" required />
          <br />

          <label>Email: </label>
          <input name="email" type="text" value={ value.email } onChange={ ({ target }) => { change(target.value, target.name) } } maxLength="50" placeholder="email@email.com" required />
          <br />

          <label>CPF: </label>
          <input name="cpf" type="text" value={ value.cpf } onChange={ ({ target }) => { change(target.value, target.name) } } maxLength="11" required />
          <br />

          <label>Adress: </label>
          <input name="address" type="text" value={ value.address } onChange={ ({ target }) => { change(target.value, target.name) } } maxLength="200" required />
          <br />

          <label>City: </label>
          <input name="city" type="text" value={ value.city } onChange={ ({ target }) => { change(target.value, target.name) } }
            onBlur={ this.handleOnBlur }
            maxLength="28" required />
          <br />

          <label>State:
        <select name="countryState" value={ value.countryState } onChange={ ({ target }) => { change(target.value, target.name) } } required >
              { states.map((value) => <option value={ value } key={ value }>{ value }</option>) }
            </select>
          </label>
          <br />

          {/* <div required>
            <label>Complement: </label>
            <input name="complement" type="radio" value="House" checked={ this.state.complement === "House" } onChange={ this.handleChange } required /> House
          <input name="complement" type="radio" value="Apartment" checked={ this.state.complement === "Apartment" } onChange={ this.handleChange } required /> Apartment
        </div> */}
        </fieldset>

        <fieldset>
          Curriculum summary:
        <textarea name="curriculumSummary" value={ value.curriculumSummary } onChange={ ({ target }) => { change(target.value, target.name) } } maxLength="1000" required />
          <br />
        Job position:
        <textarea name="jobPosition" value={ value.jobPosition } onChange={ ({ target }) => { change(target.value, target.name) } } maxLength="40" required />
          <br />
        Job description:
        <textarea name="jobDescription" value={ value.jobDescription } onChange={ ({ target }) => { change(target.value, target.name) } } maxLength="500" required />
        </fieldset>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.listReducer,
})

const mapDispatchToProps = (dispatch) => ({
  change: (value, name) => dispatch(addAssignment(value, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);