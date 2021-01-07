import { canHandleId, canHandleTitle } from "./handlers/handlers";

const Exercise = () => {
  let state = {};

  const behavior = (state) => ({
    ...canHandleTitle(state),
    ...canHandleId(state),
  });
  Object.assign(state, behavior(state));
  return state;
};

export default Exercise;
