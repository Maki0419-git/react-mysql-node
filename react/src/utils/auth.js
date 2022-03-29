import axios from "axios";

const register = (account, password) => new Promise(async (resolve, reject) => {
    const options = {
        method: 'POST',
        url: 'http://localhost:3001/api/v1/authorization/signup',
        headers: { 'Content-Type': 'application/json' },
        data: { account, password }
    };
    try {
        const response = await axios.request(options);
        const token = response.data.token;
        if (token) {
            localStorage.setItem('token', token);
        }
        resolve()
    } catch (e) {
        console.error(e.response)
        reject(e.response.data.msg)
    }

})

const authenticate = () => new Promise(async (resolve, reject) => {
    const options = {
        method: 'GET',
        url: 'http://localhost:3001/api/v1/authenticate',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    };
    try {
        await axios.request(options)
        resolve()
    } catch (e) {
        reject(e.response.data.msg)
    }

})

export { register, authenticate }