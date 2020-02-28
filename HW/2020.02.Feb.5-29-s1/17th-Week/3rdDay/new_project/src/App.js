import React, {Component}
from 'react';
import './App.css';
import PersonalCard from './PersonalCard'


class App extends Component {

  state = {
    persons: [
      {name:"Yavuz", age:35},
      {name:"Ridvan", age:33},
      {name:"ahmet", age:23}
    ]
  }


  render() {

    return ( 
      <div className = "App" >
      {this.state.persons.map((item,i)=>
        <PersonalCard key={i} name={item.name} age={item.age}/>
        // <PersonalCard name={this.state.persons[i].name}age={this.state.persons[i].age}/>
        //ikiside çalışıyor sadece birini indexleme ile hallettik
      )}
      </div>
    );
  }
}

export default App;