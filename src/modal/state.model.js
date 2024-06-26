const mongoose = require('mongoose');

const stateSchema = mongoose.Schema(
    {
        state_name: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('State', stateSchema);