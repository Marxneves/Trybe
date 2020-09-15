import React from 'react';
import './App.css';
import ButtonConsole from './ButtonConsole';

class App extends React.Component {
  render() {
    return (
      <div>
        <ButtonConsole text={'Btn1'} />
        <ButtonConsole text={'Btn2'} />
        <ButtonConsole text={'Btn3'} />
      </div>
    );
  }
}

export default App;
