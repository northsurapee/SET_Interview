/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Timer from "./Timer";
import Setter from "./Setter";
import "./App.css";

function App() {
  // STATES
  const [isEnd, setEnd] = useState(false);
  const [isRun, setIsRun] = useState(false);
  const [isReset, setReset] = useState(true);
  const [time, setTime] = useState({
    sec: 0,
    min: 0,
    hour: 0,
  });

  // TIMER CONTROLLER
  const startTimer = () => {
    if (time.sec === 0 && time.min === 0 && time.hour === 0) return;
    setIsRun(true);
    setReset(false);
    setEnd(false);
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
        [name]: [value],
      };
    });
  }

  return (
    <div className="app-container">
      {isEnd ? <h1>(( Time's up! ))</h1> : <h1>(( REACT COUNTDOWN ))</h1>}

      <Setter time={time} onChange={onSetterChange} />
      <div className="button-container">
        <button onClick={startTimer} id="start-button">
          start
        </button>
        <button onClick={pauseTimer} id="stop-button">
          stop
        </button>
        <button onClick={resetTimer} id="reset-button">
          reset
        </button>
      </div>
      <Timer
        time={time}
        isRun={isRun}
        isReset={isReset}
        isStart={isRun}
        resetTimer={resetTimer}
        setEnd={setEnd}
      />
    </div>
  );
}

export default App;
