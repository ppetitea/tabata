import { canHandleInit, canHandleTimer } from "./handlers/handlers";

const Timer = (lastState) => {
  let state = {};

  const behavior = (state) => ({
    ...canHandleInit(state),
    ...canHandleTimer(state),
  });
  Object.assign(state, behavior(state));
  if (lastState) state.fromLastState(lastState);
  return state;
};

export default Timer;
