import Training from "../../models/Training";
import { CURR_TRAINING_SET } from "../constants";

const initialState = () => {
  return Training().setId("default").setCollection("items", []);
};

const currTrainingReducer = (state = initialState(), action) => {
  switch (action.type) {
    case CURR_TRAINING_SET: {
      const nextState = { ...action.payload };
      return nextState;
    }
    default: {
      return state;
    }
  }
};

export { currTrainingReducer };
