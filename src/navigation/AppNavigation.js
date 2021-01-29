import React from "react";
import { BrowserRouter, HashRouter, Switch, Route } from "react-router-dom";
import TrainingPage from "../screens/TrainingPage/TrainingPage";
import TrainingRunPage from "../screens/TrainingRunPage/TrainingRunPage";
import TrainingListPage from "../screens/TrainingListPage/TrainingListPage";
import { config } from "../services/services";

export default function AppNavigation() {
  const Router = config.isProdEnv() ? HashRouter : BrowserRouter;
  const basename = config.isProdEnv() ? "/tabata/" : "/";

  return (
    <Router basename={basename}>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          <TrainingListPage />
        </Route>
        <Route path="/training">
          <TrainingPage />
        </Route>
        <Route path="/training-run">
          <TrainingRunPage />
        </Route>
      </Switch>
    </Router>
  );
}
