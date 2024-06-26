const mongoose = require('mongoose');

const bottelSchema = mongoose.Schema(
    {
        bottel_name: {
            type: String,
            trim: true
        },
        bottel_type: {
            type: String,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Bottel', bottelSchema);
