import React, { useState } from "react";

const useShowable = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const show = () => setState(true);
  const hide = () => setState(false);
  const toggleVisibility = () => setState(!state);

  return { visible: state, show, hide, toggleVisibility };
};

export default useShowable;
