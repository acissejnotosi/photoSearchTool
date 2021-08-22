import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";

function App(): JSX.Element {
  return (
    <Router>
      <Route path="/" exact component={SearchPage} />
    </Router>
  );
}

export default App;
