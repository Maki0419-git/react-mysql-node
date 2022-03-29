import { useEffect } from 'react'
import '../App.css'
import { useState, useContext, } from 'react'
import { Context } from "../Context";
import { authenticate } from '../utils/auth'

const Bar = () => {
    const myContext = useContext(Context);
    const handleUserStatus = async () => {
        //未註冊
        if (!localStorage.getItem("token")) {
            return
        }
        try {
            await authenticate();
            //已註冊token未過期
            myContext.setUserStatus({ isSignIn: true, progress: "authorized" })

        } catch (e) {
            //已註冊token過期
            myContext.setUserStatus({ isSignIn: false, progress: "login" })
        }
    }

    useEffect(() => {
        console.log("bar render")
        handleUserStatus();
    }, [])
    console.log("bar")
    return (
        <div className="appbar">
            <h1>Employee Dashboard</h1>
            {myContext.userStatus.isSignIn && <h4 onClick={() => {
                myContext.setUserStatus({ isSignIn: false, progress: "login" })
            }}>登出</h4>}

        </div>
    )
}

export default Bar
