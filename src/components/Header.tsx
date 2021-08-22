import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

const Header = (): JSX.Element => {
  return (
    <Router>
      <header>
        <Link to="/">
          <div>Logo</div>
        </Link>
      </header>
    </Router>
  );
};

export default Header;
