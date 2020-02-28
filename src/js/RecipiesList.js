import React from "react";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class RecipientList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      recipies: [],
      display: "no"

    }
}

componentDidMount() {
  fetch('http://localhost:3000/recipes')
    .then(response => response.json())
    .then(data => this.setState({ recipies: data, display: "yes" }));
}


renderPlan = () =>{
    if (this.state.display==="yes"){
      console.log(this.state.recipies)
        return(<div >
                        <div className="RecipientListHeader">
                          <div className="id">ID</div>
                          <div className ="name">NAZWA</div>
                          <div className="description">OPIS</div>
                          <div className="action">AKCJE</div>
                        </div>
                        {this.state.recipies.map((reciep,idx) =>{return (
                            <div className="reciep" key={idx}>
                              <div className="id">{reciep.id}</div>
                              <div className ="name">{reciep.name}</div>
                              <div className="description">{reciep.description}</div>
                              <div>
                                <i className="far fa-edit"></i>
                                <i className="fas fa-trash-alt"></i>
                              </div>
                            </div>)
                        })}
               </div>)

    }

}
  
  render(){
      return (
          <div>
            <div className="RecipientList">
                <div className="RecipientList_child">
                  <h3>Lista Przepisów</h3>
                  <i className="far fa-plus-square"></i>
                </div>
                {this.renderPlan()}
            </div>
          
          
          </div>
      )
    }
  }

export default RecipientList;

