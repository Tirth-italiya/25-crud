const { Social } = require('../modal')

const create_social = (data) => {
    return Social.create(data)
}

const list_social = () => {
    return Social.find()
}

const delete_social = (id) => {
    return Social.findByIdAndDelete(id)
}

const update_social = (id,data) => {
    return Social.findByIdAndUpdate(id,data)
}

module.exports = {
    create_social,
    list_social,
    delete_social,
    update_social
}