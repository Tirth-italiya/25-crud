const mongoose = require('mongoose');

const cartoonSchema = mongoose.Schema(
    {
        cartoon_name: {
            type: String,
            trim: true
        },
        cartoon_type: {
            type: String,
            trim:true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Cartoon', cartoonSchema);