
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompetitionSchema = new Schema({
    title :{
        type: String,
        required:true
    },
    domain :{
        type: String,
        required:true
    },
    url :{
        type: String,
        required:true
    },
    type :{
        type:String,
        enum: ['Online','InPerson'],
        required:true
    },
    applicationStartDate :{
        type: Date
    },
    applicationEndDate :{
        type: Date
    },
    place :{
        type: String,
        required:true
    },
    Country :{
        type: String,
        required:true
    },
    subscribe :{
        type: Boolean,
        default : false
    },
    active :{
        type: Boolean,
        default : true
    },
    bookmark :{
        type: Boolean,
        default : false
    },
});

const CompetitionResources = mongoose.model('competition', CompetitionSchema);
module.exports = CompetitionResources;
