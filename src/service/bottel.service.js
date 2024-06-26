const { Bottel } = require('../modal')

const create_bottel = (data) => {
    return Bottel.create(data)
}

const list_bottel = () => {
    return Bottel.find()
}

const delete_bottel = (id) => {
    return Bottel.findByIdAndDelete(id)
}

const update_bottel = (id,data) => {
    return Bottel.findByIdAndUpdate(id,data)
}

module.exports = {
    create_bottel,
    list_bottel,
    delete_bottel,
    update_bottel
}