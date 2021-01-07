import {
  canHandleId,
  canHandleTitle,
  canHandleCollection,
} from "./handlers/handlers";

const Training = () => {
  let state = {};

  const behavior = (state) => ({
    ...canHandleId(state),
    ...canHandleTitle(state),
    ...canHandleCollection(state),
  });
  Object.assign(state, behavior(state));
  return state;
};

export default Training;
