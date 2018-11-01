const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HackathonSchema = new Schema({
    title : {
        type: String,
        required:true
    },
    domain : {
        type: String,
        required:true
    },
    url : {
        type: String,
        required:true
    },
    type : {
        type: String,
        enum: ['Online', 'InPerson'],
        required:true
    },
    applicationStateDate : {
        type: String
    },
    applicationEndDate : {
        type: String
    },
    place : {
        type: String,
        required:true
    },
    Country : {
        type: String,
        required:true
    },
    travelReimbursment : {
        type:String,
        default : "No",
        enum: ['Yes','No','Partial']
    },
    subscribe : {
        type: Boolean,
        default : false
    },
    active : {
        type: Boolean,
        default : true
    },
    bookmark : {
        type: Boolean,
        default : false
    }
})

const HackathonModel = mongoose.model('hackathon', HackathonSchema);
module.export = HackathonModel;


