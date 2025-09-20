import { useState, useEffect, useRef } from "react";

const CountDownTimer = () => {
  const [inputTime, setInputTime] = useState(0);   
  const [timeLeft, setTimeLeft] = useState(0);     
  const [isRunning, setIsRunning] = useState(false); 
  const timerRef = useRef(null); 

 
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    
    return () => clearInterval(timerRef.current);
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    if (inputTime > 0) {
      setTimeLeft(inputTime); 
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  const handleReset = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    setTimeLeft(inputTime);
  };

  return (
    <div>
      <p>
        Set Time (seconds):{" "}
        <input
          type="number"
          min="0"
          value={inputTime}
          onChange={(e) => setInputTime(Number(e.target.value))}
          disabled={isRunning} 
        />
      </p>

      <p>Time Left: {timeLeft} seconds</p>

      <div>
        <button onClick={handleStart} disabled={isRunning || inputTime <= 0}>
          Start
        </button>
        <button onClick={handleStop} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default CountDownTimer;
