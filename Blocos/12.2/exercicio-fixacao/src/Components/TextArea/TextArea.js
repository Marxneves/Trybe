import React from 'react';

class TextArea extends React.Component {
  render() {
    return (
      <div>
        <label>
          Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
            <br />
          <textarea name="estadoFavorito" value={this.props.estadoFavorito} onChange={this.props.handleChange} />
        </label>
      </div>
    );
  }
}

export default TextArea;