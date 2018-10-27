const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HackathonSchema = new Schema({
    title : {
        type: String
    },
    domain : {
        type: String
    },
    url : {
        type: String
    },
    type : {
        type: String,
        enum: ['Online', 'InPerson']
    },
    applicationStateDate : {
        type: String
    },
    applicationEndDate : {
        type: String
    },
    place : {
        type: String
    },
    Country : {
        type: String
    },
    TR : {
        type:String,
        enum: ['Yes','No','Partial']
    },
    subscribe : {
        type: Boolean
    },
    active : {
        type: Boolean
    },
    bookmark : {
        type: Boolean
    }
})

const HackathonModel = mongoose.model('hackathon', HackathonSchema);
module.export = HackathonModel;


