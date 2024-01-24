/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"

export default function Timer({time, isRun, isReset}) {
    const [sec, setSec] = useState(time.sec);
    const [min, setMin] = useState(time.min);
    const [hour, setHour] = useState(time.hour);

    function calTime() {
        setMin((prevMin) => {
          if (prevMin === 0) {
            setHour((prevHour) => (prevHour === 0 ? 0 : prevHour - 1));
            return 59;
          }
          return prevMin - 1;
        });
      }
    
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
    
        return () => {
          clearInterval(countdown);
        };
      }, [isRun]);

      useEffect(() => {
        setSec(time.sec);
        setMin(time.min)
        setHour(time.hour)
      }, [isReset])

    return (
        <div className="timer-container">
            <h2>Timer {hour} : {min} : {sec}</h2>
        </div>
    )
}
