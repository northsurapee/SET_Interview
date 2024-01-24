/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function Timer({ time, isRun, isReset, resetTimer, setEnd }) {
  const [sec, setSec] = useState(time.sec);
  const [min, setMin] = useState(time.min);
  const [hour, setHour] = useState(time.hour);

  // Function for calculate other time units
  function calTime() {
    setMin((prevMin) => {
      if (prevMin === 0) {
        setHour((prevHour) => (prevHour === 0 ? 0 : prevHour - 1));
        return 59;
      }
      return prevMin - 1;
    });
  }

  // Use Effect for counting down seconds
  useEffect(() => {
    let countdown;
    if (isRun) {
      countdown = setInterval(() => {
        setSec((prevSec) => {
          if (prevSec === 0) {
            calTime();
            return 59;
          }
          return prevSec - 1;
        });
      }, 1000);
    }

    // Cleanup countdown
    return () => {
      clearInterval(countdown);
    };
  }, [isRun]);

  // Use Effect for reset timer
  useEffect(() => {
    setSec(time.sec);
    setMin(time.min);
    setHour(time.hour);
  }, [isReset]);

  // Use Effect for stop timer
  useEffect(() => {
    if (isRun && sec === 0 && min === 0 && hour === 0) {
      resetTimer();
      setEnd(true);
    }
  }, [sec]);

  return (
    <div className="timer-container">
      <h2>
        Timer {hour.toString().padStart(2, "0")} :{" "}
        {min.toString().padStart(2, "0")} : {sec.toString().padStart(2, "0")}
      </h2>
    </div>
  );
}
