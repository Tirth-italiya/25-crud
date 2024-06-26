const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        user_name: {
            type: String,
            trim: true
        },
        user_id: {
            type: String,
            trim:true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('User', userSchema);