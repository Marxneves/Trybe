import React from 'react';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}
const compromissos = ['Estudar', 'Trabalhar', 'Outra coisas'];

function App() {
  return (
    <div>
      {compromissos.map(compromisso => task(compromisso))}
    </div>
  );
}

export default App;
