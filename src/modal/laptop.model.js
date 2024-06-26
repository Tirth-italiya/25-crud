const mongoose = require('mongoose');

const laptopSchema = mongoose.Schema(
    {
        laptop_name: {
            type: String,
            trim: true
        },
        laptop_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Laptop', laptopSchema);
