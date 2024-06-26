const { Calc } = require('../modal')

const create_calc = (data) => {
    return Calc.create(data)
}

const list_calc = () => {
    return Calc.find()
}

const delete_calc = (id) => {
    return Calc.findByIdAndDelete(id)
}

const update_calc = (id,data) => {
    return Calc.findByIdAndUpdate(id,data)
}

module.exports = {
    create_calc,
    list_calc,
    delete_calc,
    update_calc
}