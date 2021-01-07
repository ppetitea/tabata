const initState = (state = {}, source = {}) => {
  for (const [key, v] of Object.entries(state)) {
    if (source[key] !== undefined) state[key] = source[key];
  }
  return state;
};

export { initState };
