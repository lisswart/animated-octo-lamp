import { useState, useEffect } from 'react';
import './Timer.css';

function Timer() {
  const [sessionLength, setSessionLength] = useState(2);
  const [breakLength, setBreakLength] = useState(1);
  const [timerLabel, setTimerLabel] = useState('Session');
  const [secondsLeft, setSecondsLeft] = useState(2 * 60);
  const [timerRunning, setTimerRunning] = useState(false);

  let minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;

  useEffect(() => {
    function handleSwitch() {
      if (timerLabel === 'Session') {
        setTimerLabel('Break');
        setSecondsLeft(breakLength * 60);
      } else if (timerLabel === 'Break') {
        setTimerLabel('Session');
        setSecondsLeft(sessionLength * 60);
      }
    }

    let intervalID = null;
    if (timerRunning && secondsLeft > 0) {
      intervalID = setInterval(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
    } else if (timerRunning && secondsLeft === 0) {
      intervalID = setInterval(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      handleSwitch();
    } else {
      clearInterval(intervalID);
    }
    return () => clearInterval(intervalID);
  }, [timerRunning, secondsLeft, timerLabel, breakLength, sessionLength]);

  function handleStart() {
    setTimerRunning(true);
  }

  function handleStop() {
    setTimerRunning(false);
  }

  function handleReset() {
    setSessionLength(2);
    setBreakLength(1);
    setSecondsLeft(2 * 60);
    setTimerLabel('Session');
    setTimerRunning(false);
  }

  return (      
    <div className="timer-component">
      <div className="timer-container">
        <h2 id="timer-label">{timerLabel}</h2>
        <h3 id="time-left">
          {
            minutes < 10 
            ? ("0" + minutes).slice(-2)
            : minutes
          } : {
            seconds < 10
            ? ("0" + seconds).slice(-2)
            : seconds
          }
        </h3>

        <div className="button-container">
          <button id="start-stop" 
            onClick={timerRunning ? handleStop : handleStart}
          >
            Start/Stop
          </button>

          <button id="reset"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
