const mongoose = require('mongoose');

const documentrySchema = mongoose.Schema(
    {
        documentry_name: {
            type: String,
            trim: true
        },
        documentry_rating: {
            type: String,
            trim:true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Documentry', documentrySchema);