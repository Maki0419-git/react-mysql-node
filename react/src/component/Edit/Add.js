import React from 'react'
import { useState, useEffect } from 'react'
import { TiDeleteOutline } from 'react-icons/ti'
import { addEmployee } from '../../utils/db';
import '../../App.css'


const Add = ({ open, setOpen, readData }) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [country, setCountry] = useState("");
    const [position, setPosition] = useState("");
    const [wage, setWage] = useState("");
    const [list, setList] = useState([]);
    const [display, setDisplay] = useState("none");


    const inputHandler = (e, setState) => {
        setState(e.target.value)
    }

    const handleAdd = async () => {
        try {
            await addEmployee(name, age, country, position, wage)
            setOpen(false);
            readData();
        } catch (err) {
            alert(err)
        }
    }

    useEffect(() => {
        if (open) {
            setDisplay("block")
        } else {
            setDisplay("none")
        }
    }, [open])


    return (

        <div id="myModal" className="modal" style={{ display }}>
            <div className="modal-content">
                <TiDeleteOutline className="close" onClick={() => setOpen(false)} />
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
                </div>
                <button onClick={handleAdd}>Add</button>
            </div>
        </div>

    )
}

export default Add
