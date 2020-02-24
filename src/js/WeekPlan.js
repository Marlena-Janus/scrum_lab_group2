import React from "react";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class WeekPlan extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      week: [],
      display: "no"

    }
}

componentDidMount() {
  fetch('http://localhost:3000/schedules')
    .then(response => response.json())
    .then(data => this.setState({ week: data, display: "yes" }));
}


renderPlan = () =>{
    if (this.state.display==="yes"){
        return(<div className = "plan">
                 <div className="weekHeader" >Twój plan na {this.state.week[0].weekNumber}  tydzień</div>
                    <div className="weekPlan">
                        <div className = "day Monday">Poniedziałek  
                        {this.state.week[0].monday.map((day,idx) =>{return <div className = "border" key={idx} >{day}</div>})}
                        </div>
                        <div className = "day Tuesday">Wtorek
                        {this.state.week[0].tuesday.map((day,idx) =>{return <div className = "border" key={idx} >{day}</div>})}
                        </div>
                        <div className = "day Wednesday">Środa
                        {this.state.week[0].wednesday.map((day,idx) =>{return <div className = "border" key={idx} >{day}</div>})}
                        </div>
                        <div className = "day Thrusday">Czwartek
                        {this.state.week[0].thrusday.map((day,idx) =>{return <div className = "border" key={idx} >{day}</div>})}
                        </div>
                        <div className = "day Friday">Piątek
                        {this.state.week[0].friday.map((day,idx) =>{return <div className = "border" key={idx} >{day}</div>})}
                        </div>
                        <div className = "day Satruday">Sobota
                        {this.state.week[0].satruday.map((day,idx) =>{return <div className = "border" key={idx} >{day}</div>})}
                        </div>
                        <div className = "day Sunday">Niedziela
                        {this.state.week[0].sunday.map((day,idx) =>{return <div className = "border" key={idx} >{day}</div>})}
                        </div>
                    </div>
               </div>)

    }

}
  
  render(){
      return (<div> {this.renderPlan()} </div>);
    }
  }

export default WeekPlan;