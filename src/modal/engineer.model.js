const mongoose = require('mongoose');

const engineerSchema = mongoose.Schema(
    {
        engineer_name: {
            type: String,
            trim: true
        },
        engineer_salary: {
            type: String,
            trim:true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Engineer', engineerSchema);