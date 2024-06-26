const mongoose = require('mongoose');

const watchSchema = mongoose.Schema(
    {
        watch_name: {
            type: String,
            trim: true
        },
        watch_type: {
            type: String,
            trim:true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Watch', watchSchema);