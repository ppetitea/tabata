import { v4 as uuidv4 } from "uuid";

export const canHandleInit = (state) => ({
  fromLastState: (lastState) => {
    Object.assign(state, lastState);
    return state;
  },
  re: (lastState) => {
    Object.assign(state, lastState);
    return state;
  },
  fromCollection: (collection, test) => {
    return state.re(collection.find((i) => test(state.re(i))));
  },
  fromCollectionById: (collection, id) => {
    const test = (state) => state.getId() === id;
    return state.fromCollection(collection, test);
  },
  fromCollectionByKey: (collection, key) => {
    const test = (state) => state.getKey() === key;
    return state.fromCollection(collection, test);
  },
});

export const canHandleTitle = (state) => ({
  getTitle: () => state.title,
  setTitle: (v) => {
    state.title = v;
    return state;
  },
});

export const canHandleId = (state) => ({
  getId: () => state.id,
  setId: (v = uuidv4()) => {
    state.id = v;
    return state;
  },
});

export const canHandleVisibility = (state) => ({
  setVisible: (v) => {
    state.visible = v;
    return state;
  },
  hide: () => state.setVisible(false),
  show: () => state.setVisible(true),
});

export const canHandleDuration = (state) => ({
  getDuration: () => state.duration,
  setDuration: (v) => {
    state.duration = v;
    return state;
  },
});

export const canHandleCollection = (state) => ({
  getCollection: (collection) => state[collection],
  getFirst: (collection) => {
    return state[collection].length >= 1 ? state[collection][0] : null;
  },
  getLast: (collection) => {
    const length = state[collection].length;
    return length >= 1 ? state[collection][length - 1] : null;
  },
  setCollection: (collection, items) => {
    state[collection] = items;
    return state;
  },
  getItemById: (collection, id) => {
    for (const item of state[collection]) if (item.getId() === id) return item;
  },
  getItemByKey: (collection, key) => {
    for (const item of state[collection]) {
      if (item.getKey() === key) return item;
    }
  },
  getItemIndexById: (collection, id) => {
    for (const index of state[collection].keys()) {
      if (state[collection][index].getId() === id) return index;
    }
  },
  addItem: (collection, item) => {
    if (state[collection]) {
      state[collection] = [...state[collection], item];
    } else state[collection] = [item];
    return state;
  },
  addItemStart: (collection, item) => {
    state[collection] = [item, ...state[collection]];
    return state;
  },
  addItemAfterAnother: (collection, item, another) => {
    const index = state.getItemIndexById(collection, another.id);
    state[collection].splice(index + 1, 0, item);
    return state;
  },
  delItemById: (collection, id) => {
    state[collection] = state[collection].filter((item) => item.getId() !== id);
    return state;
  },
  delItemByIndex: (collection, index) => {
    state[collection] = state[collection].filter((item, i) => i !== index);
    return state;
  },
  delItemByKey: (collection, key) => {
    state[collection] = state[collection].filter(
      (item) => item.getKey() !== key
    );
    return state;
  },
  modItemById: (collection, nextItem) => {
    state[collection] = state[collection].map((item) => {
      if (item.id === nextItem.id) return nextItem;
      else return item;
    });
    return state;
  },
  modItemByIndex: (collection, nextItem, index) => {
    state[collection] = state[collection].map((item, i) => {
      if (i === index) return nextItem;
      else return item;
    });
    return state;
  },
  modItemByKey: (collection, nextItem) => {
    state[collection] = state[collection].map((item) => {
      if (item.getKey() === nextItem.getKey()) return nextItem;
      else return item;
    });
    return state;
  },
  justReorder: (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  },
  reorder: (collection, startIndex, endIndex) => {
    state[collection] = state.justReorder(
      state[collection],
      startIndex,
      endIndex
    );
    return state;
  },
});

export const canHandleActions = (state) => ({
  getActions: () => state.actions,
  setActions: (actions = []) => {
    state.actions = actions;
    return state;
  },
  can: (action) => {
    if (state.actions && state.actions.find((i) => i === action)) return true;
    else return false;
  },
});

export const canHandleTimer = (state) => ({
  ...canHandleActions(state),
  initTimer: () => {
    state.time = 0;
    state.isRunning = false;
    state.actions = ["play"];
    return state;
  },
  setTime: (v) => {
    state.time = v;
    return state;
  },
  increment: (ms = 1000) => {
    if (isNaN(state.time)) state.time = 0;
    state.time += ms;
    return state;
  },
  decrement: (ms = 1000) => {
    if (state.time - ms >= 0) state.time -= ms;
    else state.time = 0;
    return state;
  },
  play: () => {
    state.isRunning = true;
    state.actions = ["pause", "stop"];
    return state;
  },
  replay: () => {
    state.time = 0;
    state.isRunning = true;
    state.actions = ["pause", "stop"];
    return state;
  },
  pause: () => {
    state.isRunning = false;
    state.actions = ["play", "replay"];
    return state;
  },
  stop: () => {
    state.time = 0;
    state.isRunning = false;
    state.actions = ["play"];
    return state;
  },
});
