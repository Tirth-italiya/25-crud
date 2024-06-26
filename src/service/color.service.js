const { Color } = require('../modal')

const create_color = (data) => {
    return Color.create(data)
}

const list_color = () => {
    return Color.find()
}

const delete_color = (id) => {
    return Color.findByIdAndDelete(id)
}

const update_color = (id,data) => {
    return Color.findByIdAndUpdate(id,data)
}

module.exports = {
    create_color,
    list_color,
    delete_color,
    update_color
}