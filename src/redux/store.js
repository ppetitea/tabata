import { createStore, combineReducers } from "@reduxjs/toolkit";
import { trainingListReducer } from "./reducers/trainingListReducer";

const rootReducer = combineReducers({
  trainingList: trainingListReducer,
});

const store = createStore(rootReducer);

export { store };
