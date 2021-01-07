export const canHandleTitle = (state) => ({
  getTitle: () => state.title,

  setTitle: (v) => {
    state.title = v;
    return state;
  },
});

export const canHandleId = (state) => ({
  getId: () => state.id,

  setId: (v) => {
    state.id = v;
    return state;
  },
});

export const canHandleCollection = (state) => ({
  getCollection: (collection) => state[collection],
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
  addItem: (collection, item) => {
    state[collection] = [...state[collection], item];
    return state;
  },
  addItemStart: (collection, item) => {
    state[collection] = [item, ...state[collection]];
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
      if (item.getId() === nextItem.getId()) return nextItem;
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
});
