const mongoose = require('mongoose');

const jwelerySchema = mongoose.Schema(
    {
        jwelery_name: {
            type: String,
            trim: true
        },
        jwelery_type: {
            type: String,
            trim:true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Jwelery', jwelerySchema);
