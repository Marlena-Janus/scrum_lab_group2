import React from "react";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Buttons from './Buttons'
import UserIcon from '../images/user-circle-regular.svg';
import Background from '../images/image.png';
import Chevron from '../images/chevron-right-solid.svg';
import Widget from './Widget';

class Application extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: ""
    }
}

componentDidMount() {
  fetch('http://localhost:3000/user')
    .then(response => response.json())
    .then(data => this.setState({ username: data.name }));
}

handleClick = () => {
  const data = { name: this.state.name };

      fetch('http://localhost:3000/user', {
      method: 'POST', // or 'PUT'
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
      console.log('Success:', data);
      this.setState({username: this.state.name});
      })
      .catch((error) => {
      console.error('Error:', error);
      });
}

handleChange = e => {
  this.setState({name: e.target.value});
};


  renderPage = () =>{

    if (this.state.username === ""){
      return (
        <div className="initialPage">
          <h2>Witaj,</h2>
          <h3>wygląda na to że jesteś tutaj <br/> pierwszy raz! </h3>
          <input type="text" name="name" id="name" placeholder="tutaj wpisz jak masz na imię" value={this.state.name} onChange={this.handleChange}/><br/>
          <button className="buttonName" onClick={this.handleClick}>Gotowe!</button>
          <p>Podaj nam swoje imię, a my zorganizujemy <br/> dla Ciebie naszą aplikację &#128578;</p>
        </div>
      )
    }
    else{
      return<div><Buttons/><Widget /></div>
    }
  }

  render(){

      return (
        <>
          <header className="center">
          <h1 className="header-logo">
            <span id="first">Zaplanuj</span>
            <span id="second">Jedzonko</span>
          </h1>
          <div className="user">
            <p>{this.state.username}</p>
            <img src={UserIcon} alt=""/>
          </div>
          </header>
          <div className="wrapper">
            <section className="side-bar">
              <ul>
                <li>
                  <div className="side-menu">Pulpit <img src={Chevron} alt=""/></div>
                </li>
                <li>
                  <div className="side-menu">Przepisy</div>
                </li>
                <li>
                  <div className="side-menu">Plany</div>
                </li>
              </ul>
            </section>
            <section className="main" style={{ backgroundImage: {Background}}}>
              <div className="wrapper">
                {/* <Buttons />
                <Widget /> */}
              </div>
            <div>
              {this.renderPage()}
            </div>
            </section>
          </div>
        </>
      );
    }
  }

export default Application;