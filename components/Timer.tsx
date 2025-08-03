"use client";
import { useState, useRef } from "react";

export const Timer = () => {
  const [time, setTime] = useState(0);
  const [pause, setPause] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const startTimer = () => {
    if (intervalRef.current) {
      return;
    }

    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const pauseTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  };

  const resetTimer = () => {
    pauseTimer();
    setTime(0);
  };

  return (
    <div>
      <div className="flex-col gap-y-2">
        <span>{time} </span>
        <button
          className="px-2 py-2"
          onClick={() => {
            {
              pause ? startTimer() : pauseTimer();
            }
            setPause((prev) => !prev);
          }}
        >
          {pause ? "Start" : "Stop"}
        </button>

        <button
          className="px-2 py-2"
          onClick={() => {
            resetTimer();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
