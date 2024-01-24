import {useState } from "react";
import Timer from "./Timer";
import Setter from "./Setter";
import "./App.css";

function App() {
  // STATES
  const [isRun, setIsRun] = useState(false);
  const [isReset, setReset] = useState(true);
  const [time, setTime] = useState({
    sec: 0,
    min: 0,
    hour: 0
  });

  // TIMER CONTROLLER
  const startTimer = () => {
    setIsRun(true);
    setReset(false);
  };

  const pauseTimer = () => {
    setIsRun(false);
  };

  const resetTimer = () => {
    setReset(true);
    setIsRun(false);
  };

  // SETTER HANDLER
  function onSetterChange(e) {
    const { name, value } = e.target;
    setTime((prevTime) => {
      return {
        ...prevTime,
        [name]:[value]
      }
    });
  }

  return (
    <div className="app-container">
      <h1>(( REACT COUNTDOWN ))</h1>
      <Setter 
        time = {time}
        onChange= {onSetterChange}
      />
      <Timer 
        time = {time}
        isRunning = {isRun}
        isReset = {isReset}
        isStart = {isRun}
      />
      <div className="button-container">
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default App;
