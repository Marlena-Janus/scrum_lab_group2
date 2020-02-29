import React from "react";

class PlanList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      schedules: [],
      display: "no"

    }
}

componentDidMount() {
  fetch('http://localhost:3000/schedules')
    .then(response => response.json())
    .then(data => this.setState({ schedules: data, display: "yes" }));
}


renderPlan = () =>{
    if (this.state.display==="yes"){
      console.log(this.state.schedules)
        return(<div >
                        <div className="RecipientListHeader">
                          <div className="id">ID</div>
                          <div className ="name">NAZWA</div>
                          <div className="description">OPIS</div>
                          <div className="action">AKCJE</div>
                        </div>
                        {this.state.schedules.map((schedule,idx) =>{return (
                            <div className="reciep" key={idx}>
                              <div className="id">{schedule.id}</div>
                              <div className ="name">{schedule.name}</div>
                              <div className="description">{schedule.description}</div>
                              <div className="week">{schedule.weekNumber}</div>
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
      console.log(this.state.display)
      return (
          <div>
            <div className="RecipientList">
                <div className="RecipientList_child">
                  <h3>Lista Planów</h3>
                  <i className="far fa-plus-square"></i>
                </div>
                {this.renderPlan()}
            </div>


          </div>
      )
    }
  }

export default PlanList;



// import React from 'react';

// class PlanList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       schedules: [],
//       display: "no"
//     }
//   }
// }


// componentDidMount() {
//   fetch('http://localhost:3000/#/application/WeekPlan')
//     .then(response => response.json)
//     .then(data => this.ListeningStateChangedEvent({ schedules:data, display: "yes"}));
// }

// renderPlan = () =>{
//   if (this.state.display==="yes"){
//     console.log(this.state.schedules)
//       return(
//         <div>
//           <div className="RecipientListHeader">
//             <div className="id">ID</div>
//             <div className ="name">NAZWA</div>
//             <div className="description">OPIS</div>
//             <div clasName="week">TYDZIEŃ</div>
//             <div className="action">AKCJE</div>
//           </div>
//           {this.state.schedules.map((reciep,idx) =>{return (
//               <div className="reciep" key={idx}>
//                 <div className="id">{reciep.id}</div>
//                 <div className ="name">{reciep.name}</div>
//                 <div className="description">{reciep.description}</div>
//                 <div>
//                   <i className="far fa-edit"></i>
//                   <i className="fas fa-trash-alt"></i>
//                 </div>
//               </div>)
//           })}
//         </div>)

//   }

// }

// export default PlanList;