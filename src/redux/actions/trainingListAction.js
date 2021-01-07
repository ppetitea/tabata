import {
  TRAINING_LIST_SET,
  TRAINING_ADD,
  TRAINING_MOD,
  TRAINING_DEL,
  TRAINING_MOVE,
} from "../constants";

export const setTrainingList = (payload) => {
  return { type: TRAINING_LIST_SET, payload };
};
export const addTraining = (payload) => {
  return { type: TRAINING_ADD, payload };
};
export const modTraining = (payload) => {
  return { type: TRAINING_MOD, payload };
};
export const delTraining = (payload) => {
  return { type: TRAINING_DEL, payload };
};
export const moveTraining = (payload) => {
  return { type: TRAINING_MOVE, payload };
};
