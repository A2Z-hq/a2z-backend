const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conferenceSchema = new Schema({
    title: {
        type: String,
        required:true
    },
    url: {
        type: String,
        required:true
    },
    place: {
        type: String,
        required:true
    },
    country: {
        type: String,
        required:true
    },
    eventDate: {
        type: String,
        required:true
    },
    subscription: {
        type: Boolean,
        default : false
    },
    active : {
        type : Boolean,
        default : true
    },
    bookmark : {
        type : Boolean,
        default : false
    }
})

const ConferenceModel = mongoose.model('conference', conferenceSchema);
module.exports = ConferenceModel;