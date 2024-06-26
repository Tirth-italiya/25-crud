const { Emp } = require('../modal')

const create_emp = (data) => {
    return Emp.create(data)
}

const list_emp = () => {
    return Emp.find()
}

const delete_emp = (id) => {
    return Emp.findByIdAndDelete(id)
}

const update_emp = (id,data) => {
    return Emp.findByIdAndUpdate(id,data)
}

module.exports = {
    create_emp,
    list_emp,
    delete_emp,
    update_emp
}