import React, { Component } from 'react'

class Sum extends Component {
    constructor() {
        super()

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleChange1(value) {
        this.setState ({number1: parseInt(value, 10)})
    }

    handleChange2(value) {
        this.setState ({number2: parseInt(value, 10)})
    }
    
    sumOf(num1, num2) {
        this.setState ({sum: num1 + num2})
    }


    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={ (e) => this.handleChange1(e.target.value)}></input>
                <input className="inputLine" onChange={ (e) => this.handleChange2(e.target.value)}></input>
                <button className="confirmationButton" onClick={( ) => this.sumOf(this.state.number1, this.state.number2)}>Find Sum</button>
                <span className="resultsBox">Sum: { this.state.sum}</span>
            </div>
        )
    }
}

export default Sum