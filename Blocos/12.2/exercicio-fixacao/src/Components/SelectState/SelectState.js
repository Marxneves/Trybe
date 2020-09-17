import React from 'react';

class SelectState extends React.Component {
  render() {
    return (
      <div>
        <select name="estado" id="" onChange={this.props.handleChange}>
          <option value="" hidden={true}>Estado onde mora</option>
          <option value="SP">SP</option>
          <option value="RJ">RJ</option>
          <option value="MG">MG</option>
        </select>
      </div>
    );
  }
}

export default SelectState;