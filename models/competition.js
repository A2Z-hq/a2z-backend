const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompetitonSchema = new Schema({

    title : {
        type: String,
        required:true
    },
    url : {
        type: String,
        required:true
    },
    field : {
        type: String,
        required:true
    },
    date : {
        type: String
    },
    location : {
        type: String,
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

const CompetitionModel = mongoose.model('competition', CompetitonSchema);
module.export = CompetitionModel;


