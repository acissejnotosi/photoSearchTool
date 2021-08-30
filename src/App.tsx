import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import SearchPage from "./components/SearchPage";

const TITLE = "Photo Finder";

function App(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Switch>
        <Route path="/">
          <SearchPage />
        </Route>
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </>
  );
}

export default App;
