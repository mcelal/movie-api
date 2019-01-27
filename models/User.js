const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const UserSchema = new Scheme({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minLength: 5
    }
});

module.exports = mongoose.model('user', UserSchema);
