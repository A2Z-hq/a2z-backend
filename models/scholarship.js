const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScholarshipSchema = new Schema({
    title : {
        type: String
    },
    url : {
        type: String
    },
    field : {
        type: String
    },
    bookmark : {
        type: Boolean
    },
    active : {
        type: Boolean
    },
    subscribe : {
        type: Boolean
    }
})

const ScholarshipModel = mongoose.model('scholarship', ScholarshipSchema);
module.exports = ScholarshipModel;