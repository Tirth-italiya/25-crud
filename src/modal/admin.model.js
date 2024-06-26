const mongoose = require('mongoose');

const adminSchema = mongoose.Schema(
    {
        admin_name: {
            type: String,
            trim: true
        },
        admin_type: {
            type: String,
            trim:true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Admin', adminSchema);