const mongoose = require('mongoose');

const foodSchema = mongoose.Schema(
    {
        food_name: {
            type: String,
            trim: true
        },
        food_type: {
            type: String,
            trim:true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Food', foodSchema);