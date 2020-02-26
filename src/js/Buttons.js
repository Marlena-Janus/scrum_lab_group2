import React from "react";

import Plus from "../images/plus-square-regular.svg";
import AddNewRecipe from "./AddNewRecipe";

class Buttons extends React.Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <AddNewRecipe />
        </Modal>
        <div className="add-recipe-btn">
          <button className="add-recipe" type="button" onClick={this.showModal}>
            <img src={Plus} alt="" /> dodaj przepis
          </button>
          <button className="add-repipe" type="button" onClick={this.showModal}>
            <img src={Plus} alt="" /> dodaj plan
          </button>
        </div>
      </main>
    );
  }
}

const Modal = ({ handleClose, show, children }) => {
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
