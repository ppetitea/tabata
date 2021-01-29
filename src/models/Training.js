import {
  canHandleId,
  canHandleTitle,
  canHandleCollection,
  canHandleInit,
  canHandleDuration,
  canHandleVisibility,
} from "./handlers/handlers";
import maths from "../models/Maths";

const TrainingStep = (lastState = {}) => {
  let state = { ...lastState };

  const behavior = (state) => ({
    ...canHandleId(state),
    ...canHandleTitle(state),
    ...canHandleDuration(state),
    ...canHandleVisibility(state),
    ...canHandleInit(state),
  });
  Object.assign(state, behavior(state));
  return state;
};

const canHandleTrainingSteps = (state) => ({
  getStepByTimeWithRange: (time) => {
    let min = 0;
    let max = 0;
    let index = 0;
    let item = state.items.find((item) => {
      min = max;
      max += item.duration;
      index++;
      return maths.belongRangeMin(min, max, time);
    });
    if (!item) item = state.items[state.items.length - 1];
    return { item, min, max, index };
  },
  getStepByTime: (time) => state.getStepByTimeWithRange(time).item,
  getStepIndex: (time) => state.getStepByTimeWithRange(time).index,
  getStepInstant: (time) => {
    const { item, min } = state.getStepByTimeWithRange(time);
    const stepTime = min ? time - min : time;
    const percent = item ? stepTime / item.duration : 0;
    return { item, time: stepTime, percent };
  },
  getStepTime: (time) => state.getStepInstant(time).time,
  getStepTimeDecrement: (timerTime) => {
    const { item, time } = state.getStepInstant(timerTime);
    const decrement = item.duration - time;
    return decrement;
  },
  getStepPercent: (time) => state.getStepInstant(time).percent,
  getDuration: () => {
    let duration = 0;
    state.items.map((item) => (duration += item.duration));
    return duration;
  },
  getPercent: (time) => time / state.getDuration(),
  isEnded: (time) => time >= state.getDuration(),
  getRemainingSteps: (time) => {
    const index = state.getStepByTimeWithRange(time).index;
    const remainings = state.items.filter((item, i) => i >= index);
    return remainings;
  },
  getStepStartTime: (id) => {
    let start = 0;
    for (const item of state.items) {
      if (item.id === id) break;
      start += item.duration;
    }
    return start;
  },
  isStepEnded: (time) => {
    const step = state.getStepInstant(time);
    return step.time === step.item.duration;
  },
  isStepStarted: (time) => {
    const step = state.getStepInstant(time);
    return step.time === 0;
  },
});

const Training = (lastState = {}) => {
  let state = { ...lastState };

  const behavior = (state) => ({
    ...canHandleId(state),
    ...canHandleTitle(state),
    ...canHandleCollection(state),
    ...canHandleTrainingSteps(state),
    ...canHandleInit(state),
  });
  Object.assign(state, behavior(state));
  return state;
};

const TrainingList = (lastState = {}) => {
  let state = { ...lastState };

  const behavior = (state) => ({
    ...canHandleId(state),
    ...canHandleCollection(state),
  });
  Object.assign(state, behavior(state));
  return state;
};

export { Training, TrainingStep, TrainingList };
export default Training;
