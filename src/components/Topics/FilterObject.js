import React, { Component } from 'react'

class FilterObject extends Component {
    constructor() {
        super()

        this.state = {
            employees: [
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
              ],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(value) {
        this.setState ({
            userInput: value
        })
    }

    objectFilter(prop) {
        let employees = this.state.employees
        let filteredEmployees = []

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].hasOwnProperty(prop)) {
                filteredEmployees.push(employees[i])
            }
        }
        this.setState ({filteredArray: filteredEmployees})
    }
    
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.employees)}</span>
                <input className="inputLine" onChange={ e => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => this.objectFilter(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectPB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterObject