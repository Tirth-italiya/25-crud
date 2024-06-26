const { Food } = require('../modal')

const create_food = (data) => {
    return Food.create(data)
}

const list_food = () => {
    return Food.find()
}

const delete_food = (id) => {
    return Food.findByIdAndDelete(id)
}

const update_food = (id,data) => {
    return Food.findByIdAndUpdate(id,data)
}

module.exports = {
    create_food,
    list_food,
    delete_food,
    update_food
}