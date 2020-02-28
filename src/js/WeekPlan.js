import React from "react";
import {weekNumber} from "weeknumber"
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class WeekPlan extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      week: [],
      display: "no",
      numberOfWeek: "",
    }
}

componentDidMount() {
  var week = weekNumber(new Date())
  fetch('http://localhost:3000/schedules')
    .then(response => response.json())
    .then(data => {this.setState({ week: data  })
    if (week > data.length){
      this.setState({numberOfWeek: data.length-1})
    }
    else {
      this.setState({numberOfWeek: week-1})
    }  
    this.setState({display: "yes"})
  })
}

componentWillReceiveProps() {
  var week = weekNumber(new Date())
  fetch('http://localhost:3000/schedules')
    .then(response => response.json())
    .then(data => {this.setState({ week: data  })
    if (week > data.length){
      this.setState({numberOfWeek: data.length-1})
    }
    else {
      this.setState({numberOfWeek: week-1})
    }  
    this.setState({display: "yes"})
  })
}

handleClick1 = () => {
  let fake = this.state.numberOfWeek
  if (fake-1 < 0) {
    this.setState({numberOfWeek: 0})
  }
  else {this.setState({numberOfWeek: fake-1})}
}

handleClick2 = () => {
  let fake = this.state.numberOfWeek
  if (fake+1 > this.state.week.length-1) {
    this.setState({numberOfWeek: this.state.week.length-1})
  }
  else {this.setState({numberOfWeek: fake+1})}
}

renderPlan = () =>{
    if (this.state.display==="yes"){
        return(<div className = "plan">
                 <div className="weekHeader" >Twój plan na {this.state.week[this.state.numberOfWeek].weekNumber}  tydzień</div>
                    <div className="weekPlan">
                        <div className = "day Monday">Poniedziałek  
                        {this.state.week[this.state.numberOfWeek].monday.map((day,idx) =>{return <div className = "border" key={idx} >{day}</div>})}
                        </div>
                        <div className = "day Tuesday">Wtorek
                        {this.state.week[this.state.numberOfWeek].tuesday.map((day,idx) =>{return <div className = "border" key={idx} >{day}</div>})}
                        </div>
                        <div className = "day Wednesday">Środa
                        {this.state.week[this.state.numberOfWeek].wednesday.map((day,idx) =>{return <div className = "border" key={idx} >{day}</div>})}
                        </div>
                        <div className = "day Thrusday">Czwartek
                        {this.state.week[this.state.numberOfWeek].thrusday.map((day,idx) =>{return <div className = "border" key={idx} >{day}</div>})}
                        </div>
                        <div className = "day Friday">Piątek
                        {this.state.week[this.state.numberOfWeek].friday.map((day,idx) =>{return <div className = "border" key={idx} >{day}</div>})}
                        </div>
                        <div className = "day Satruday">Sobota
                        {this.state.week[this.state.numberOfWeek].satruday.map((day,idx) =>{return <div className = "border" key={idx} >{day}</div>})}
                        </div>
                        <div className = "day Sunday">Niedziela
                        {this.state.week[this.state.numberOfWeek].sunday.map((day,idx) =>{return <div className = "border" key={idx} >{day}</div>})}
                        </div>
                    </div>
                    <div className="weekchange">
                      <div className = "previous" onClick={this.handleClick1}>{"<< Poprzedni"}</div>
                      <div className = "next" onClick={this.handleClick2}>{"Następny >>"}</div>
                    </div>
               </div>)
    }
}
  
  render(){
      return (<div> {this.renderPlan()} </div>);
    }
  }

export default WeekPlan;