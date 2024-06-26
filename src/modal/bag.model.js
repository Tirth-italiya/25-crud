const mongoose = require('mongoose');

const bagSchema = mongoose.Schema(
    {
        bag_name: {
            type: String,
            trim: true
        },
        bag_type: {
            type: String,
            trim:true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Bag', bagSchema);