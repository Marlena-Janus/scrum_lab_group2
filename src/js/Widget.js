import React from 'react';

import Info from '../images/info-circle-solid.svg';
import Exclamation from '../images/exclamation-circle-solid.svg';
import Check from '../images/check-circle-solid.svg';

const Widget = ({ handleClose }) => {
    return (
      <div className="widget-wrapper">
        <div className="widget" id="widget-blue">
          <div>
            <img src={Info} alt=""/>
            <p>Masz już xx przepisów, nieźle!</p>
          </div>
          <button>x</button>
        </div>
        <div className="widget" id="widget-yellow">
          <div>
            <img src={Exclamation} alt=""/>
            <p>Pamiętaj, aby dodać plan!</p>
          </div>
          <button>x</button>
        </div>
        <div className="widget" id="widget-green">
          <div>
            <img src={Check} alt=""/>
            <p>Świetnie, że jesteś! Udanego planowania i smacznego! :)</p>
          </div>
          <button>x</button>
        </div>
      </div>
    )
    }

export default Widget;
