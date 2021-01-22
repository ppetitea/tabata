const Maths = () => {
  let state = {};

  const behavior = (state) => ({
    ...canHandleRange(state),
  });
  Object.assign(state, behavior(state));
  return state;
};

const canHandleRange = (state) => ({
  belongRange: (min, max, n) => min <= n && n <= max, // [min - max]
  belongRangeMax: (min, max, n) => min <= n && n <= max, // ]min - max]
  belongRangeMin: (min, max, n) => min <= n && n <= max, // [min - max[
  outRange: (min, max, n) => n <= min && max <= n,
});

export default Maths();
