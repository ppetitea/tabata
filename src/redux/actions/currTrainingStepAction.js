import { CURR_TRAINING_STEP_SET } from "../constants";

export const setCurrTrainingStep = (payload) => {
  return { type: CURR_TRAINING_STEP_SET, payload };
};
