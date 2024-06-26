const { Engineer } = require('../modal')

const create_engineer = (data) => {
    return Engineer.create(data)
}

const list_engineer = () => {
    return Engineer.find()
}

const delete_engineer = (id) => {
    return Engineer.findByIdAndDelete(id)
}

const update_engineer = (id,data) => {
    return Engineer.findByIdAndUpdate(id,data)
}

module.exports = {
    create_engineer,
    list_engineer,
    delete_engineer,
    update_engineer
}