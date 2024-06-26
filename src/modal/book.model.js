const mongoose = require('mongoose');

const bookSchema = mongoose.Schema(
    {
        book_name: {
            type: String,
            trim: true
        },
        book_author: {
            type: String,
            trim:true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Book', bookSchema);
