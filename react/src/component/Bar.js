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
            const userAccount = await authenticate();
            console.log(userAccount)
            //已註冊token未過期
            myContext.setUserStatus({ isSignIn: true, progress: "authorized", userAccount })

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
            {myContext.userStatus.isSignIn &&
                <div>
                    <h4>Welcome {myContext.userStatus.userAccount}</h4>
                    <h4 onClick={() => {
                        myContext.setUserStatus({ isSignIn: false, progress: "login" })
                    }}>登出</h4>
                </div>
            }

        </div>
    )
}

export default Bar
