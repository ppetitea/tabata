import {
  ENV_DEV,
  ENV_PROD,
  TIMER_INCREMENT,
  TIMER_DECREMENT,
} from "../constants/constants";

const Config = (lastState = {}) => {
  let state = {
    env: ENV_DEV,
    timeDirection: TIMER_DECREMENT,
    timerBeep: "https://lasonotheque.org/UPLOAD/mp3/2061.mp3",
    ...lastState,
  };

  const behavior = (state) => ({
    ...canHandleConfig(state),
  });
  Object.assign(state, behavior(state));
  return state;
};

export const canHandleConfig = (state) => ({
  isDevEnv: () => state.env === ENV_DEV,
  isProdEnv: () => state.env === ENV_PROD,
  setDevEnv: () => {
    state.env = ENV_DEV;
    return state;
  },
  setProdEnv: () => {
    state.env = ENV_PROD;
    return state;
  },
  setTimeDirection: (v) => {
    state.timeDirection = v;
    return state;
  },
  setTimeDirectionIncrement: () => state.setTimeDirection(TIMER_INCREMENT),
  setTimeDirectionDecrement: () => state.setTimeDirection(TIMER_DECREMENT),
  isTimerIncrement: () => state.timeDirection === TIMER_INCREMENT,
  isTimerDecrement: () => state.timeDirection === TIMER_DECREMENT,
  setTimerBeep: (v) => {
    state.timerBeep = v;
    return state;
  },
  init: (init = {}) => {
    if (init.env) state.env = init.env;
    if (init.timeDirection) state.timeDirection = init.timeDirection;
    return state;
  },
});

export default Config;
