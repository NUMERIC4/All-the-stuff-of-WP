/*import React, {Component}
from 'react';
import './App.css';
import PersonalCard from './PersonalCard'


class App extends Component {

  state = {
    roles: [
      'Manager',
      'Trainer',
      'Attendee'
    ],
    persons: [
      {name:"Yavuz", age:35},
      {name:"Ridvan", age:33},
      {name:"ahmet", age:23}
    ]
  }

PersonalCardOnClickHandeler = (component, componentSecond)=>{
  console.log(`${component}  ${this.state.roles[2]}  ' called! '  ${componentSecond}`);
}

  render() {

    let PersonsOutput = this.state.persons.map((item,i)=>
      <PersonalCard
      key={i}
      name={item.name}
      age={item.age}
      click={()=>{this.PersonalCardOnClickHandeler(item.name, i)}}
      />
    )
    console.log(PersonsOutput);

    return (
      <div className="App">
      {PersonsOutput}
      <button onClick={this.PersonalCardOnClickHandeler.bind(this,'button')}> Click me! </button>
      </div>
    );

    // return (       <div className = "App" >      {this.state.persons.map((item,i)=>
        //      
        // <PersonalCard name={this.state.persons[i].name}age={this.state.persons[i].age}/>
        //ikiside çalışıyor sadece birini indexleme ile hallettik      )}      </div>    );
  }
}

export default App;*/

import React, {Component} from 'react'
import ResultCard from './ResultCard'

export default class App extends Component {

  state = {
    results:[
      {grade:"50", lecture:'Math', score:"100"},
      {grade:"500", lecture:'Math2', score:"10"},
      {grade:"52", lecture:'Matah', score:"20"},
      {grade:"57", lecture:'Mawth', score:"600"}
    ]
  }

  render(){

    let moutsideOfReturn =this.state.results.map((item,i)=> 
      <ResultCard 
      key={i}
      grade={item.name} 
      lecture={item.lecture} 
      score={item.score}/>)

    return (
      <div>
      {moutsideOfReturn}
      </div>
    )
  }
}
