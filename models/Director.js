const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const DirectorSchema = new Scheme({
    name: String,
    surname: String,
    bio: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('director', DirectorSchema);
