const { Bag } = require('../modal')

const create_bag = (data) => {
    return Bag.create(data)
}

const list_bag = () => {
    return Bag.find()
}

const delete_bag = (id) => {
    return Bag.findByIdAndDelete(id)
}

const update_bag = (id,data) => {
    return Bag.findByIdAndUpdate(id,data)
}

module.exports = {
    create_bag,
    list_bag,
    delete_bag,
    update_bag
}