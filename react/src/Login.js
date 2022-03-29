import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const inputHandler = (e, setState) => {
        setState(e.target.value)
    }
    return (
        <div className="app">
            <div className="info">
                <label>Account</label>
                <input type="text"
                    value={account}
                    onChange={(e) => inputHandler(e, setAccount)}
                />
                <label>Password</label>
                <input type="text"
                    value={password}
                    onChange={(e) => inputHandler(e, setPassword)}
                />
            </div>
        </div>
    )
}

export default Login
