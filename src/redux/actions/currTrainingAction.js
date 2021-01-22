import { CURR_TRAINING_SET } from "../constants";

export const setCurrTraining = (payload) => {
  return { type: CURR_TRAINING_SET, payload };
};
