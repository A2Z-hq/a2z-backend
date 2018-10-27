const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
        type: Date
    },
    subscription: {
        type: Boolean
    }
})

const ConferenceModel = mongoose.model('conferece', conferenceSchema)
module.exports = ConferenceModel