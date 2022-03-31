import axios from "axios";

const addEmployee = (name, age, country, position, wage) => {
    axios.post('http://localhost:3001/create', {
        name, age, country, position, wage
    }).then((response) => { console.log(response) })
        .catch((error) => { console.log(error) })
}
const showEmployees = (setEmployees) => {
    const token = localStorage.getItem('token');
    const options = {
        method: 'GET',
        url: 'http://localhost:3001/api/v1/employee/',
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    axios.request(options).then(function (response) {
        setEmployees(response.data);
    }).catch(function (error) {
        alert(error);
    });
}

export { addEmployee, showEmployees }