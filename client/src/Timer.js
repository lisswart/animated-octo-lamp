import { useState, useEffect, useRef } from 'react';
import Session from './Session';
import Break from './Break';
import './Timer.css';

function Timer() {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [timerLabel, setTimerLabel] = useState('Session');
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [timerRunning, setTimerRunning] = useState(false);
  const myAudio = useRef();
  const context = new AudioContext();

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
      myAudio.current.play();
      handleSwitch();
    } else {
      clearInterval(intervalID);
    }
    return () => clearInterval(intervalID);
  }, [timerRunning, secondsLeft, timerLabel, breakLength, sessionLength, myAudio]);

  function handleStart() {
    context.resume();
    setTimerRunning(true);
  }

  function handleStop() {
    setTimerRunning(false);
  }

  function handleReset() {
    setSessionLength(25);
    setBreakLength(5);
    setSecondsLeft(25 * 60);
    setTimerLabel('Session');
    setTimerRunning(false);
    myAudio.current.pause();
    myAudio.current.currentTimer = 0;
  }

  return (
    <div className="timer-component">
      <div className="label-container">
        <Session sessionLength={sessionLength} />
        <Break breakLength={breakLength} />
      </div>
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

      <audio
        id="beep"
        ref={myAudio}
        src="https://www.soundjay.com/misc/sounds/hohner-melodica-2.mp3"
        type="audio"
      ></audio>
    </div>
  );
}

export default Timer;
