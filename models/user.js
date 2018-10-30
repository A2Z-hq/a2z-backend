const passportLocalMongoose = require('passport-local-mongoose');
const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: {
        first: String,
        middle: { type: String, trim: true },
        last: { type: String, trim: true }
    },
    age: { type: String, min: 13 },
    gender: String,
    email: String,
    phone: Number,
    created: { type: Date, default: Date.now() }
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);