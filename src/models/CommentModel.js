const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let CommentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('comment', CommentSchema);