import React from "react";
import { HashRouter } from "react-router-dom";
import Navigation from "./Navigation";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1 className="header-logo">
          Zaplanuj&nbsp;<span>Jedzonko</span>
        </h1>
        <HashRouter>
          <Navigation />
        </HashRouter>
      </header>
    );
  }
}

export default Header;
