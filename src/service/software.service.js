const { Software } = require('../modal')

const create_software = (data) => {
    return Software.create(data)
}

const list_software = () => {
    return Software.find()
}

const delete_software = (id) => {
    return Software.findByIdAndDelete(id)
}

const update_software = (id,data) => {
    return Software.findByIdAndUpdate(id,data)
}

module.exports = {
    create_software,
    list_software,
    delete_software,
    update_software
}