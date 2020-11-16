import { useState } from 'react';
import Timer from './Timer';

function App() {
  const [timer, setTimer] = useState(true);
  return (
    <div>
      {timer && <Timer /> }
      <button type='button' onClick={() => (setTimer(!timer))}>{timer?'Desabilitar':'Habilitar'}</button>
    </div>
  );
}

export default App;
