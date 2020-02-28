import React from "react";

class AddNewPlan extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          recipies: [],
          display: "no",
          id: "3",
          planName: "",
          description: "",
          weekNumber: "",
          monday: ["Posiłek","Posiłek","Posiłek","Posiłek","Posiłek"],
          tuesday: ["Posiłek","Posiłek","Posiłek","Posiłek","Posiłek"],
          wednesday: ["Posiłek","Posiłek","Posiłek","Posiłek","Posiłek"],
          thrusday: ["Posiłek","Posiłek","Posiłek","Posiłek","Posiłek"],
          friday: ["Posiłek","Posiłek","Posiłek","Posiłek","Posiłek"],
          satruday: ["Posiłek","Posiłek","Posiłek","Posiłek","Posiłek"],
          sunday: ["Posiłek","Posiłek","Posiłek","Posiłek","Posiłek"],
          randomDay: ["Posiłek","Posiłek","Posiłek","Posiłek","Posiłek"],
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/schedules')
        .then(response => response.json())
        .then(data => this.setState({ id: data[data.length-1].id }));

        fetch('http://localhost:3000/recipes')
          .then(response => response.json())
          .then(data => this.setState({ recipies: data, display: "yes" }));
      }

    handleClick = () => {
        const data = { 
            id: this.state.id +1,
            planName: this.state.planName,
            description: this.state.description,
            weekNumber: this.state.weekNumber,
            monday: this.state.monday,
            tuesday: this.state.tuesday,
            wednesday: this.state.wednesday,
            thrusday: this.state.thrusday,
            friday: this.state.friday,
            satruday: this.state.satruday,
            sunday: this.state.sunday
        };
        this.setState({id: this.state.id+1});

            fetch('http://localhost:3000/schedules', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((data) => {
            console.log('Success:', data);
            })
            .catch((error) => {
            console.error('Error:', error);
            });
           
            alert("Super, plan na kolejny tydzień został dodany ! ")
      }
     
      handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    monday = e =>{
        let fake = this.state.monday
        fake[e.target.id] = e.target.value
        this.setState({monday: fake})
    }

    tuesday = e =>{
        let fake = this.state.tuesday
        fake[e.target.id] = e.target.value
        this.setState({tuesday: fake})
    }

    wednesday = e =>{
        let fake = this.state.wednesday
        fake[e.target.id] = e.target.value
        this.setState({wednesday: fake})
    }

    thrusday = e =>{
        let fake = this.state.thrusday
        fake[e.target.id] = e.target.value
        this.setState({thrusday: fake})
    }

    friday = e =>{
        let fake = this.state.friday
        fake[e.target.id] = e.target.value
        this.setState({friday: fake})
    }

    satruday = e =>{
        let fake = this.state.satruday
        fake[e.target.id] = e.target.value
        this.setState({satruday: fake})
    }

    sunday = e =>{
        let fake = this.state.sunday
        fake[e.target.id] = e.target.value
        this.setState({sunday: fake})
    }

render(){
            if (this.state.display==="yes"){
                return (
                    <div className="meal-plan-wrapper">
            <div className="meal-plan-header">
                <h3>NOWY PLAN</h3>
                <button onClick={this.handleClick}>Zapisz</button>
            </div>
            <div className="meal-plan-desription">
                <p>Nazwa planu</p>
                <input type="text" id="plan-name" name="planName" onChange={this.handleChange}></input>
            </div>
            <div className="meal-plan-desription">
                <p>Opis planu</p>
                <input type="text" id="plan-description" name = "description" onChange={this.handleChange}></input>
            </div>
            <div className="meal-plan-desription">
                <p>Numer tygodnia</p>
                <input type="number" id="week-number" name="weekNumber" onChange={this.handleChange}></input>
            </div>
            <div className="meal-plan-table">
                <table>
                <thead>
                    <tr>
                    <th></th>
                    <th>ŚNIADANIE</th>
                    <th>DRUGIE ŚNIADANIE</th>
                    <th>ZUPA</th>
                    <th>DRUGIE DANIE</th>
                    <th>KOLACJA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="weekday">PONIEDZIAŁEK</td>
                    <td>
                        <select name="choose-meal" id='0' Value={'DEFAULT'} onChange={this.monday}>
                        <option value="DEFAULT" disabled>Posiłek</option>
                        {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}    
                        </select>
                    </td>
                    <td>
                        <select name="choose-meal" id='1' defaultValue={'DEFAULT'}  onChange={this.monday}>
                        <option value="DEFAULT" disabled>Posiłek</option>    
                        {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}
                        </select>
                    </td>
                    <td>
                        <select name="choose-meal" id='2' defaultValue={'DEFAULT'} onChange={this.monday}>
                        <option value="DEFAULT" disabled>Posiłek</option>    
                        {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}
                        </select>
                    </td>
                    <td>
                        <select name="choose-meal" id='3' defaultValue={'DEFAULT'} onChange={this.monday}>
                        <option value="DEFAULT" disabled>Posiłek</option>    
                        {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}
                        </select>
                    </td>
                    <td>
                        <select name="choose-meal" id='4' defaultValue={'DEFAULT'} onChange={this.monday}>
                        <option value="DEFAULT" disabled>Posiłek</option>    
                        {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}
                        </select>
                    </td>
                    </tr>
                    <tr>
                    <td className="weekday">WTOREK</td>
                    <td>
                        <select name="choose-meal" id='0' defaultValue={'DEFAULT'} onChange={this.tuesday}>
                        <option value="DEFAULT" disabled>Posiłek</option>    
                        {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}    
                        </select>
                    </td>
                    <td>
                        <select name="choose-meal" id='1' defaultValue={'DEFAULT'} onChange={this.tuesday}>
                        <option value="DEFAULT" disabled>Posiłek</option>
                        {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}    
                        </select>
                    </td>
                    <td>
                        <select name="choose-meal" id='2' defaultValue={'DEFAULT'} onChange={this.tuesday}>
                        <option value="DEFAULT" disabled>Posiłek</option>    
                        {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}    
                        </select>
                    </td>
                    <td>
                        <select name="choose-meal" id='3' defaultValue={'DEFAULT'} onChange={this.tuesday}>
                        <option value="DEFAULT" disabled>Posiłek</option>    
                        {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}  
                        </select>
                    </td>
                    <td>
                        <select name="choose-meal" id='4' defaultValue={'DEFAULT'} onChange={this.tuesday}>
                        <option value="DEFAULT" disabled>Posiłek</option>
                        {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}  
                        </select>
                    </td>
                    </tr>
                    <tr>
                    <td className="weekday">ŚRODA</td>
                    <td>
                        <select name="choose-meal" id='0' defaultValue={'DEFAULT'} onChange={this.wednesday}>
                        <option value="DEFAULT" disabled>Posiłek</option>    
                        {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}  
                        </select>
                    </td>
                    <td>
                        <select name="choose-meal" id='1' defaultValue={'DEFAULT'} onChange={this.wednesday}>
                        <option value="DEFAULT" disabled>Posiłek</option>    
                        {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}  
                        </select>
                    </td>
                    <td>
                        <select name="choose-meal" id='2' defaultValue={'DEFAULT'} onChange={this.wednesday}>
                        <option value="DEFAULT" disabled>Posiłek</option>    
                        {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}  
                        </select>
                    </td>
                    <td>
                        <select name="choose-meal" id='3' defaultValue={'DEFAULT'} onChange={this.wednesday}>
                        <option value="DEFAULT" disabled>Posiłek</option>    
                        {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}  
                        </select>
                    </td>
                    <td>
                        <select name="choose-meal" id='4' defaultValue={'DEFAULT'} onChange={this.wednesday}>
                        <option value="DEFAULT" disabled>Posiłek</option>    
                        {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}  
                        </select>
                    </td>
                    </tr>
                    <tr>
                    <td className="weekday">CZWARTEK</td>
                    <td>
                        <select name="choose-meal" id='0' defaultValue={'DEFAULT'} onChange={this.thrusday}>
                        <option value="DEFAULT" disabled>Posiłek</option>    
                        {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}  
                        </select>
                    </td>
                    <td>
                        <select name="choose-meal" id='1' defaultValue={'DEFAULT'} onChange={this.thrusday}>
                        <option value="DEFAULT" disabled>Posiłek</option>    
                        {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}  
                        </select>
                    </td>
                    <td>
                        <select name="choose-meal" id='2' defaultValue={'DEFAULT'} onChange={this.thrusday}>
                        <option value="DEFAULT" disabled>Posiłek</option>    
                        {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}  
                        </select>
                    </td>
                    <td>
                        <select name="choose-meal" id='3' defaultValue={'DEFAULT'} onChange={this.thrusday}>
                        <option value="DEFAULT" disabled>Posiłek</option>    
                        {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}  
                        </select>
                    </td>
                    <td>
                        <select name="choose-meal" id='4' defaultValue={'DEFAULT'} onChange={this.thrusday}>
                        <option value="DEFAULT" disabled>Posiłek</option>    
                        {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}  
                        </select>
                    </td>
                    </tr>
                    <tr>
                    <td className="weekday">PIĄTEK</td>
                    <td>
                        <select name="choose-meal" id='0' defaultValue={'DEFAULT'} onChange={this.friday}>
                        <option value="DEFAULT" disabled>Posiłek</option>
                        {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}  
                        </select>
                    </td>
                    <td>
                        <select name="choose-meal" id='1' defaultValue={'DEFAULT'} onChange={this.friday}>
                        <option value="DEFAULT" disabled>Posiłek</option>    
                        {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}  
                        </select>
                    </td>
                    <td>
                        <select name="choose-meal" id='2' defaultValue={'DEFAULT'} onChange={this.friday}>
                        <option value="DEFAULT" disabled>Posiłek</option>    
                        {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}  
                        </select>
                    </td>
                    <td>
                        <select name="choose-meal" id='3' defaultValue={'DEFAULT'} onChange={this.friday}>
                        <option value="DEFAULT" disabled>Posiłek</option>    
                        {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}  
                        </select>
                    </td>
                    <td>
                        <select name="choose-meal" id='4' defaultValue={'DEFAULT'} onChange={this.friday}>
                        <option value="DEFAULT" disabled>Posiłek</option>    
                        {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}  
                        </select>
                    </td>
                    </tr>
                    <tr>
                    <td className="weekday">SOBOTA</td>
                    <td>
                        <select name="choose-meal" id='0' defaultValue={'DEFAULT'} onChange={this.satruday}>
                        <option value="DEFAULT" disabled>Posiłek</option>    
                        {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}  
                        </select>
                    </td>
                    <td>
                        <select name="choose-meal" id='1' defaultValue={'DEFAULT'} onChange={this.satruday}>
                        <option value="DEFAULT" disabled>Posiłek</option>    
                        {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}  
                        </select>
                    </td>
                    <td>
                        <select name="choose-meal" id='2' defaultValue={'DEFAULT'} onChange={this.satruday}>
                        <option value="DEFAULT" disabled>Posiłek</option>    
                        {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}  
                        </select>
                    </td>
                    <td>
                        <select name="choose-meal" id='3' defaultValue={'DEFAULT'} onChange={this.satruday}>
                        <option value="DEFAULT" disabled>Posiłek</option>    
                        {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}  
                        </select>
                    </td>
                    <td>
                        <select name="choose-meal" id='4' defaultValue={'DEFAULT'} onChange={this.satruday}>
                        <option value="DEFAULT" disabled>Posiłek</option>    
                        {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}  
                        </select>
                    </td>
                    </tr>
                    <tr>
                    <td className="weekday">NIEDZIELA</td>
                    <td>
                        <select name="choose-meal" id='0' defaultValue={'DEFAULT'} onChange={this.sunday}>
                            <option value="DEFAULT" disabled>Posiłek</option>
                            {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}  
                        </select>
                    </td>
                    <td>
                        <select name="choose-meal" id='1' defaultValue={'DEFAULT'} onChange={this.sunday}>>
                            <option value="DEFAULT" disabled>Posiłek</option>
                            {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}  
                        </select>
                    </td>
                    <td>
                        <select name="choose-meal" id='2'  defaultValue={'DEFAULT'} onChange={this.sunday}>
                            <option value="DEFAULT" disabled>Posiłek</option>
                            {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}  
                        </select>
                    </td>
                    <td>
                        <select name="choose-meal" id='3' defaultValue={'DEFAULT'} onChange={this.sunday}>
                            <option value="DEFAULT" disabled>Posiłek</option>
                            {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}  
                        </select>
                    </td>
                    <td>
                        <select name="choose-meal" id='4' defaultValue={'DEFAULT'} onChange={this.sunday}>
                            <option value="DEFAULT" disabled>Posiłek</option>
                            {this.state.recipies.map((e,idx) =>{return <option key={idx} value={e.name}>{e.name}</option>})}  
                        </select>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
                )
            }
            else{
                return (<div>a</div>)
            }
        }
}

export default AddNewPlan;