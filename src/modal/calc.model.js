const mongoose = require('mongoose');

const bottelSchema = mongoose.Schema(
    {
        calc_name: {
            type: String,
            trim: true
        },
        calc_type: {
            type: String,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Calc', bottelSchema);
