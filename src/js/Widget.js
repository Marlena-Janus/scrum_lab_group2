import React from 'react';

import Info from '../images/info-circle-solid.svg';
import Exclamation from '../images/exclamation-circle-solid.svg';
import Check from '../images/check-circle-solid.svg';

class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      display: "no"
    }
}
componentDidMount() {
  fetch('http://localhost:3000/recipes')
    .then(response => response.json())
    .then(data => this.setState({ number: data.length, display: "yes" })
    );
}
componentWillReceiveProps(){
  fetch('http://localhost:3000/recipes')
  .then(response => response.json())
  .then(data => this.setState({ number: data.length, display: "yes" })
  );
}

numberRender = () =>{
  if (this.state.number === 1){
    return (<p>Masz już {this.state.number} przepis, dodaj więcej!</p>)
  }
  else if (this.state.number === 0){
    return (<p>Nie masz przepisów !</p>)
  }
  else if (this.state.number === 2 ||this.state.number === 3 ||this.state.number === 4){
    return (<p>Masz już {this.state.number} przepisy, dodaj więcej!</p>)
  }
  else {
    return (<p>Masz już {this.state.number} przepisów, nieźle!</p>)
  }
}

  
  render(){
    
    if (this.state.display ==="yes"){
    return (
      <div className="widget-wrapper">
        <div className="widget" id="widget-blue">
          <div>
            <img src={Info} alt=""/>
            {this.numberRender()}
            
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
    else{

      return(<div>a</div>)
    }
  }
}

export default Widget;