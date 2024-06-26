const { Cartoon } = require('../modal')

const create_cartoon = (data) => {
    return Cartoon.create(data)
}

const list_cartoon = () => {
    return Cartoon.find()
}

const delete_cartoon = (id) => {
    return Cartoon.findByIdAndDelete(id)
}

const update_cartoon = (id,data) => {
    return Cartoon.findByIdAndUpdate(id,data)
}

module.exports = {
    create_cartoon,
    list_cartoon,
    delete_cartoon,
    update_cartoon
}