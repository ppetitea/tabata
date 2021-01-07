import React from "react";
import AppNavigation from "../navigation/AppNavigation";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function App() {
  return (
    <Provider store={store}>
      <div id="app">
        <AppNavigation />
      </div>
    </Provider>
  );
}

export default App;
