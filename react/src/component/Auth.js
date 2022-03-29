import axios from "axios";
import { useState, useContext, } from 'react'
import { Context } from "../Context";
import { register } from "../utils/auth";

const Login = () => {
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const myContext = useContext(Context)
    const inputHandler = (e, setState) => {
        setState(e.target.value)
    }
    const handleRegister = async () => {
        try {
            await register(account, password);
            myContext.setUserStatus({ isSignIn: true, progress: "authorized" });
        } catch (e) {
            alert(e.response.data.msg)
        }

    }
    return (
        <div className="app">
            <h2>{myContext.userStatus.progress.toUpperCase()}</h2>
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
                <button onClick={handleRegister}>{myContext.userStatus.progress.toUpperCase()}</button>
            </div>

        </div>
    )
}

export default Login
