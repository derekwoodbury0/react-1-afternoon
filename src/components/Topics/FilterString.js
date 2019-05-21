import React, { Component } from 'react'

class FilterString extends Component {
    constructor() {
        super()

        this.state = {
            unFilteredArray: ['Derek', 'Alexis', 'Devin', 'Jared'],
            userInput: '',
            filteredArray: []
        }
    }
    
    handleChange(val) {
         this.setState ({ userInput: val });
        }

    filterNames(userInput) {
        let names = this.state.unFilteredArray
        let filteredNames = []

        for (let i = 0; i < names.length; i++) {
            if (names[i].includes(userInput)) {
                filteredNames.push(names[i])
            }
        }
        this.setState ({filteredArray: filteredNames})
        console.log(filteredNames)
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringsPB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString