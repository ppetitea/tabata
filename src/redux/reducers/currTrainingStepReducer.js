import Training, { TrainingStep } from "../../models/Training";
import { CURR_TRAINING_STEP_SET } from "../constants";

const initialState = () => {
  return TrainingStep().setId().setTitle("Bidibou <3").setDuration(30);
};

const currTrainingStepReducer = (state = initialState(), action) => {
  switch (action.type) {
    case CURR_TRAINING_STEP_SET: {
      const nextState = { ...action.payload };
      return nextState;
    }
    default:
      return state;
  }
};

export { currTrainingStepReducer };
