const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://movie_user:ogjm47@ds213665.mlab.com:13665/movie-api', {
        useNewUrlParser: true
    });

    mongoose.connection.on('open', () => {
        // console.log('MongoDB: Connected');
    });

    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
    });

    mongoose.set('useCreateIndex', true);

    mongoose.Promise = global.Promise;

};