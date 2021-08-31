import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SearchPage from "./components/SearchPage";

function App(): JSX.Element {
  return (
    <Switch>
      <Route path="/">
        <SearchPage />
      </Route>
      <Route component={() => <Redirect to="/" />} />
    </Switch>
  );
}

export default App;
