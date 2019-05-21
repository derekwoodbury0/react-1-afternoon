import React, { Component } from 'react'

class EvenAndOdd extends Component{
    constructor() {
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange = event => {
        this.setState({
            userInput: event.target.value
        })
    }

    assignEvensAndOdds(userInput) {
        let arr = userInput.split(',');
        let evens = [];
        let odds = [];

        for (let i = 0; i < arr.length; i++) { 
            arr[i] = +arr[i]
            
            if (arr[i] % 2 === 0) {
                evens.push(arr[i])
                // this.setState({evenArray: evens})
            } else {
                odds.push(arr[i])
                // this.setState ({oddArray: odds})
            }
        }
        this.setState ({evenArray: evens})
        this.setState ({oddArray: odds})
    }
    
    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={this.handleChange}></input>
                <button className="confirmationButton" onClick={ () => { this.assignEvensAndOdds(this.state.userInput)}}>Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}

export default EvenAndOdd