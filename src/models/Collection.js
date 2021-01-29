import {
  canHandleId,
  canHandleTitle,
  canHandleCollection,
  canHandleInit,
  canHandleDuration,
  canHandleVisibility,
} from "./handlers/handlers";
import maths from "./Maths";

const Collection = (lastState = []) => {
  let state = { items: [...lastState] };

  const behavior = (state) => ({
    ...canHandleCollection(state),
  });
  Object.assign(state, behavior(state));
  return state;
};

export { Training, TrainingStep };
export default Training;
