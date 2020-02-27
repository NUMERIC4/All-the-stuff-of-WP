import React, {Component} from 'react';


class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number : 0
        }
    }

    incireaseNumber = () => {
        const randomNumber = Math.floor(Math.random() * 10)
        this.setState({
            number : this.state.number + randomNumber
        })
    }

    decreaseNumber = () => {
        const randomNumber = Math.floor(Math.random() * 10)
        this.setState({
            number : this.state.number - randomNumber
        })
    }

    render () {
        return (
            <div style={{backgroundColor:'lightgrey'}}>
                <h3>Click Buttons to ++ and -- the counter</h3>
                <p>{this.state.number}</p>
                <button onClick={this.incireaseNumber}>++</button>
                <button onClick={this.decreaseNumber}>--</button>
            </div>
        );
    }
}

export default Counter