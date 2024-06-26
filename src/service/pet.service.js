const { Pet } = require('../modal')

const create_pet = (data) => {
    return Pet.create(data)
}

const list_pet = () => {
    return Pet.find()
}

const delete_pet = (id) => {
    return Pet.findByIdAndDelete(id)
}

const update_pet = (id,data) => {
    return Pet.findByIdAndUpdate(id,data)
}

module.exports = {
    create_pet,
    list_pet,
    delete_pet,
    update_pet
}