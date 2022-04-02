

const checkIfFieldCompleted = (...required) => {
    for (let field of required) {
        if (field === "") return false
    }
    return true
}

const checkIfNumbered = (...required) => {
    for (let field of required) {
        if (field && !Number(field)) return false
    }
    return true
}

module.exports = { checkIfFieldCompleted, checkIfNumbered }