import React from "react";
import { NavLink } from "react-router-dom";

class CallToAction extends React.Component {
  render() {
    return (
      <div className="callAction">
        <div className="callAction__descriptionBox">
          <h3 className="callAction__descriptionBox-title">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="callAction__descriptionBox-paragraph">
            consectetur adipiscing elit. Pellentesque sed neque suscipit,
            egestas velit sed, suscipit lorem magna aliqua. Consectetur
            adipiscing elit.
          </p>
        </div>
        <div className="callAction__buttonBox">
          <NavLink to="/application/buttons" className="callAction__buttonBox-btn">Lorem ipsum</NavLink>
        </div>
      </div>
    );
  }
}



export default CallToAction;
