import { useState, useRef } from 'react'
// import './App.css'

function App() {
  const [sec, setSec] = useState(0);
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("0");
  const [running, setRunning] = useState(false);
  let intervalID = useRef(null);

  const start = () => {
    setRunning(true);
    intervalID.current = setInterval(() => {
      setSec((prev) => prev + 1);

    }, 1000);
  }

  const stop = () => {
    setRunning(false);
    clearInterval(intervalID.current);
  }

  const reset = () => {
    setRunning(false);
    clearInterval(intervalID.current);
    setSec(0);
  }

  return (
    <>
      <h1>Stopwatch</h1>
      <div style={{marginBottom: '20px'}}>Time: {Math.floor(sec/60)}:{('0' + (sec % 60)).slice(-2)}</div>
      {!running ?
        <button onClick={start}>Start</button>
        :
        <button onClick={stop}>Stop</button>
      }
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
