const mongoose = require('mongoose');

const empSchema = mongoose.Schema(
    {
        emp_name: {
            type: String,
            trim: true
        },
        emp_salary: {
            type: String,
            trim:true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Emp', empSchema);
