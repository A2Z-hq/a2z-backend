const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conferenceSchema = new Schema({
    title: {
        type: String
    },
    url: {
        type: String
    },
    place: {
        type: String
    },
    country: {
        type: String
    },
    eventDate: {
        type: String
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