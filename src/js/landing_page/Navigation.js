import React from "react";
import { NavLink } from "react-router-dom";


class Navigation extends React.Component {
  render() {
    return (
      <>
        <ul className="header__nav">
          <li className="header__nav__item">
            <NavLink to="/application" className="header__nav__item-link">
              Zaplanuj posiłki!
            </NavLink>
          </li>
          <li className="header__nav__item">
            <NavLink to="/" className="header__nav__item-link">
              Dlaczego warto?
            </NavLink>
          </li>
          <li className="header__nav__item">
            <NavLink to="/" className="header__nav__item-link">
              O mnie
            </NavLink>
          </li>
          <li className="header__nav__item">
            <NavLink to="/" className="header__nav__item-link">
              Kontakt
            </NavLink>
          </li>
        </ul>
      </>
    );
  }
}

export default Navigation;
