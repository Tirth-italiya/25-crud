const mongoose = require('mongoose');

const petSchema = mongoose.Schema(
    {
        pet_name: {
            type: String,
            trim: true
        },
        pet_type: {
            type: String,
            trim:true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Pet', petSchema);