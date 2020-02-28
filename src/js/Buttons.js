import React from "react";

import Plus from "../images/plus-square-regular.svg";
import AddNewRecipe from "./AddNewRecipe";
import Widget from './Widget';
import AddNewPlan from "./AddNewPlan"
import WeekPlan from "./WeekPlan"

class Buttons extends React.Component {
  state = { showReceip: false,
            showPlan: false };

  showModalReceip = () => {
    this.setState({ showReceip: true });
  };

  hideModalReceip = () => {
    this.setState({ showReceip: false });
  };

  showModalPlan = () => {
    this.setState({ showPlan: true });
  };

  hideModalPlan = () => {
    this.setState({ showPlan: false });
  };

  render() {
    return (
      <>
      <main className="pulpit">
        <ModalReceip show={this.state.showReceip} handleClose={this.hideModalReceip}>
          <AddNewRecipe />
        </ModalReceip>
        <ModalPlan show={this.state.showPlan} handleClose={this.hideModalPlan}>
          <AddNewPlan/>
        </ModalPlan>
        <div className="add-recipe-btn">
          <button className="add-recipe" type="button" onClick={this.showModalReceip}>
            <img src={Plus} alt="" /> dodaj przepis
          </button>
          <button className="add-recipe" type="button" onClick={this.showModalPlan}>
            <img src={Plus} alt="" /> dodaj plan
          </button>
        </div>
        <Widget/>
      </main>
      <WeekPlan/>
      </>
    );
  }
}

const ModalReceip = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button className="closeModal-btn" onClick={handleClose}>X</button>
        {children}
      </section>
    </div>
  );
};

const ModalPlan = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button className="closeModal-btn" onClick={handleClose}>X</button>
        {children}
      </section>
    </div>
  );
};

export default Buttons;