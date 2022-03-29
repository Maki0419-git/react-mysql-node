import React from 'react'
import { useState } from 'react'
import '../App.css'
import Axios from 'axios'

const Edit = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [country, setCountry] = useState("");
    const [position, setPosition] = useState("");
    const [wage, setWage] = useState("");
    const [list, setList] = useState([]);

    const inputHandler = (e, setState) => {
        setState(e.target.value)
    }

    const addEmployee = () => {
        Axios.post('http://localhost:3001/create', {
            name, age, country, position, wage
        }).then((response) => { console.log(response) })
            .catch((error) => { console.log(error) })
    }
    const showEmployees = () => {
        Axios.get('http://localhost:3001/get').then((response) => { setList(response.data) }).catch((error) => { console.log(error) })
    }

    return (
        <div className="app">
            <div className="info">
                <label>Name</label>
                <input type="text"
                    value={name}
                    onChange={(e) => inputHandler(e, setName)}
                />
                <label>Age</label>
                <input type="text"
                    value={age}
                    onChange={(e) => inputHandler(e, setAge)}
                />
                <label>Country</label>
                <input type="text"
                    value={country}
                    onChange={(e) => inputHandler(e, setCountry)}
                />
                <label>Position</label>
                <input type="text"
                    value={position}
                    onChange={(e) => inputHandler(e, setPosition)}
                />
                <label>Wage(year)</label>
                <input type="text"
                    value={wage}
                    onChange={(e) => inputHandler(e, setWage)}
                />
                <button onClick={addEmployee}>add employee</button>
            </div>
            <div className="employee">
                <h2>Employees</h2>
                <button onClick={showEmployees}>show employee</button>
                <ul>
                    {list.map(employee => <li>{employee.name}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default Edit
