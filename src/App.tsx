import React from "react";
import { Switch, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import SearchPage from "./components/SearchPage";

function App(): JSX.Element {
  return (
    <Switch>
      <Route path="/">
        <SearchPage />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  );
}

export default App;
