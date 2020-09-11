import React from 'react';

class PokemonsData extends React.Component {
  render() {
    return (
      <div className='container-pokemon'>
        <div className='container-border'>
          <div className='flex-poke'>
            <span>{this.props.name}</span>
            <span>{this.props.type}</span>
            <span>{this.props.averageWeight} {this.props.measurementUnit}</span>
          </div>
          <div>
            <img src={this.props.image} />
          </div>
        </div>
      </div>
    )
  }
}

export default PokemonsData;