const mongoose = require('mongoose');

const colorSchema = mongoose.Schema(
    {
        color_name: {
            type: String,
            trim: true
        },
        color_type: {
            type: String,
            trim:true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Color', colorSchema);