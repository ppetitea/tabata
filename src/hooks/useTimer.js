import React, { useEffect, useState } from "react";
import Timer from "../models/Timer";

const useTimer = () => {
  const [state, setState] = useState(Timer().initTimer());

  const play = () => setState({ ...Timer(state).play() });
  const replay = () => setState({ ...Timer(state).replay() });
  const pause = () => setState({ ...Timer(state).pause() });
  const stop = () => setState({ ...Timer(state).stop() });
  const increment = () => setState({ ...Timer(state).increment() });
  const setTime = (v) => setState({ ...Timer(state).setTime(v) });

  useEffect(() => {
    const timer = setInterval(() => {
      if (state && state.isRunning) increment();
    }, 1000);
    return () => clearInterval(timer);
  }, [state]);

  return {
    timer: state,
    play,
    replay,
    pause,
    stop,
    setTime,
  };
};

export default useTimer;
