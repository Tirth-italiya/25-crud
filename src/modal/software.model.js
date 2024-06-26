const mongoose = require('mongoose');

const softwareSchema = mongoose.Schema(
    {
        software_name: {
            type: String,
            trim: true
        },
        software_type: {
            type: String,
            trim:true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Software', softwareSchema);