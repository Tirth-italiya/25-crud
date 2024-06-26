const { Jwelery } = require('../modal')

const create_jwelery = (data) => {
    return Jwelery.create(data)
}

const list_jwelery = () => {
    return Jwelery.find()
}

const delete_jwelery = (id) => {
    return Jwelery.findByIdAndDelete(id)
}

const update_jwelery = (id,data) => {
    return Jwelery.findByIdAndUpdate(id,data)
}

module.exports = {
    create_jwelery,
    list_jwelery,
    delete_jwelery,
    update_jwelery
}