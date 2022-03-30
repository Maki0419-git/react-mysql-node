const addEmployee = (name, age, country, position, wage) => {
    Axios.post('http://localhost:3001/create', {
        name, age, country, position, wage
    }).then((response) => { console.log(response) })
        .catch((error) => { console.log(error) })
}
const showEmployees = (setEmployees) => {
    Axios.get('http://localhost:3001/get').then((response) => { setEmployees(response.data) }).catch((error) => { console.log(error) })
}

export { addEmployee, showEmployees }