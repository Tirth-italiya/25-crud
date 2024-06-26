const mongoose = require('mongoose');

const socialSchema = mongoose.Schema(
    {
        social_name: {
            type: String,
            trim: true
        },
        social_user: {
            type: Number,
            default:0
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Social', socialSchema);