import React from "react";

import Plus from '../images/plus-square-regular.svg';

class Buttons extends React.Component {
  state = { show: false }

  showModal = () => {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  render() {
    return (
      <main>
        <Modal show={this.state.show} handleClose={this.hideModal} >
          <p>Modal</p>
          <p>Data</p>
        </Modal>
        <div className="add-recipe-btn">
          <button className="add-recipe" type='button' onClick={this.showModal}><img src={Plus} alt=""/> dodaj przepis</button>
          <button className="add-repipe" type='button' onClick={this.showModal}><img src={Plus} alt=""/> dodaj plan</button>
        </div>
      </main>
    )
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <button
          onClick={handleClose}
        >
          Close
        </button>
      </section>
    </div>
  );
};

export default Buttons;