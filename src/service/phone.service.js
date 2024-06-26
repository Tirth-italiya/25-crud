const { Phone } = require('../modal')

const create_phone = (data) => {
    return Phone.create(data)
}

const list_phone = () => {
    return Phone.find()
}

const delete_phone = (id) => {
    return Phone.findByIdAndDelete(id)
}

const update_phone = (id,data) => {
    return Phone.findByIdAndUpdate(id,data)
}

module.exports = {
    create_phone,
    list_phone,
    delete_phone,
    update_phone
}