const { Game } = require('../modal')

const create_game = (data) => {
    return Game.create(data)
}

const list_game = () => {
    return Game.find()
}

const delete_game = (id) => {
    return Game.findByIdAndDelete(id)
}

const update_game = (id,data) => {
    return Game.findByIdAndUpdate(id,data)
}

module.exports = {
    create_game,
    list_game,
    delete_game,
    update_game
}