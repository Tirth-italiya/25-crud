const mongoose = require('mongoose');

const phoneSchema = mongoose.Schema(
    {
        phone_name: {
            type: String,
            trim: true
        },
        phone_type: {
            type: String,
            trim:true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Phone', phoneSchema);
