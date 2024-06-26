const mongoose = require('mongoose');

const gameSchema = mongoose.Schema(
    {
        game_name: {
            type: String,
            trim: true
        },
        game_type: {
            type: String,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Game', gameSchema);
