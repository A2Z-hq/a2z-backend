const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScholarshipSchema = new Schema({
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
    bookmark : {
        type: Boolean,
        default : false
    },
    active : {
        type: Boolean,
        default : true
    },
    subscribe : {
        type: Boolean,
        default : false
    }
})

const ScholarshipModel = mongoose.model('scholarship', ScholarshipSchema);
module.exports = ScholarshipModel;