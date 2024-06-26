const mongoose = require('mongoose');

const bikeSchema = mongoose.Schema(
    {
        bike_name: {
            type: String,
            trim: true
        },
        bike_type: {
            type: String,
            trim:true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Bike', bikeSchema);