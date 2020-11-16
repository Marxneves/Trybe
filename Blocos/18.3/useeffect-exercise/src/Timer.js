import { useEffect, useState } from 'react'

function Timer() {
  const [number, setNumber] = useState(0);
  const [rightNumber, setRightNumber] = useState(false);

  const geraNum = () => Math.floor((Math.random() * 100) + 1);

  useEffect(() => {
    const timer = setInterval(() => {
      setNumber(geraNum());
      console.log('tempo')
    }, 10000);

    return () => clearInterval(timer);
  }, [])

  useEffect(() => {
    if (number % 3 === 0 || number % 5 === 0) {
      setRightNumber(true);
      setTimeout(() => {
        setRightNumber(false);
      }, 4000)
    }
  }, [number])

  return (
    <div>
      { number }
      {rightNumber && <p>Acertou</p> }
    </div>
  );
}

export default Timer;