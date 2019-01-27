const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const MovieSchema = new Scheme({
    director_id: Scheme.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    category: String,
    country: String,
    year: Number,
    imdb_score: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('movie', MovieSchema);
