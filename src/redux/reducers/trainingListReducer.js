import Training from "../../models/Training";
import {
  TRAINING_LIST_SET,
  TRAINING_ADD,
  TRAINING_MOD,
  TRAINING_DEL,
  TRAINING_MOVE,
} from "../constants";

let initialTraining = Training();
initialTraining.setId("default").setCollection("items", []);

const initialState = () => ({
  list: [initialTraining],
});

const trainingListReducer = (state = initialState(), action) => {
  switch (action.type) {
    case TRAINING_LIST_SET: {
      const nextState = { ...state, list: [...action.payload] };
      return nextState;
    }
    case TRAINING_ADD: {
      const nextList = [...state.list, action.payload];
      const nextState = { ...state, list: nextList };
      return nextState;
    }
    case TRAINING_MOD: {
      const nextTraining = { ...action.payload };
      const nextList = state.list.map((i) => {
        const inner = Training(i);
        return inner.getId() === nextTraining.getId() ? nextTraining : inner;
      });
      const nextState = { ...state, list: nextList };
      return nextState;
    }
    case TRAINING_DEL: {
      const nextTraining = { ...action.payload };
      const nextList = state.list.filter((i) => {
        const inner = Training(i);
        return inner.getId() !== nextTraining.getId();
      });
      const nextState = { ...state, list: nextList };
      return nextState;
    }
    case TRAINING_MOVE: {
      const { indexA, indexB } = action.payload;

      let nextList = [...state.list];
      const tmp = nextList[indexA];
      nextList[indexA] = nextList[indexB];
      nextList[indexB] = tmp;
      const nextState = { ...state, list: nextList };
      return nextState;
    }
    default:
      return state;
  }
};

export { trainingListReducer };
