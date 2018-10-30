const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/A2Z-app', { useNewUrlParser: true });

module.exports = {mongoose};