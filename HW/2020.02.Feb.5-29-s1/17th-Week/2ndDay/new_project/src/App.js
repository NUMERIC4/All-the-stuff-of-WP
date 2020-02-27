import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter'
import Child from './components/Child';


class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      baslik: 'React Öğreniyorum',
      ders: 'React JS',
      sehir:'Istanbul',
      isDisplayed: true,
      color: 'red',
      isim:'cihuaha'
    }
    this.stateChanger = this.stateChanger.bind(this)
  }

  stateChanger () {
    this.setState({
      baslik: 'Html Öğrendim',
      ders: 'Derslerde bitti'
    })
  }

  stateReChanger = () => {
    this.setState({
      baslik:'RecHanged One Css öğreniyok',
      ders:'Zorunda olmadan değiştik'
    })
  }

  hideCity = () => {
    this.setState({
      isDisplayed: !this.state.isDisplayed
    })
  }

  changerBG = () => {
    const newColor = this.state.color === 'red' ? 'lightblue' : 'red'
    this.setState({
      color:newColor
    })
  }

  changeName = (e) => this.setState({isim:e.target.value})

  render () {

    return (
      <div className="App" style={{backgroundColor: this.state.color}}>
      <h2>{this.state.baslik}</h2>
      <p>{this.state.ders}</p>

      <button onClick={this.stateChanger}>State Changer</button>
      <button onClick={this.stateReChanger}>State Re Changer</button>

      { this.state.isDisplayed ? <p>{this.state.sehir}</p> : null }
      <button onClick={this.hideCity}>not Show City</button>
      <hr/>
      <button onClick={this.changerBG}>Change BG {this.state.color === 'red' ? 'lightblue' : 'red'}</button>
      <Counter />

      <div className="App" style={{backgroundColor:'lightgreen'}}>
        <input type="text" value={this.state.isim} onChange={this.changeName} />
        <Child isim={this.state.isim} />
      </div>
      </div>
    );
  }
}

export default App    //index.js bunu kullanıyor o yüzden export etmemz gerek


// function App() {
//   return (
//     <div className="App">
//       hello world
//     </div>
//   );
// }

// export default App;
