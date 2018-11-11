/**
 * Schema for Developer Community
 * Author : Deepak Kumar
 * Date : 11/11/18
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MeetupSchema = new Schema({
    title : {
        type: String,
        required:true
    },
    url :{
        type: String,
        required:true
    },
    location :{
        type: String,
    },
    type:{
        type:String,
        required : true
    },
    active :{
        type: Boolean,
        default : true
    },
    bookmark :{
        type: Boolean,
        default : false
    }
});

const MeetupModel = mongoose.model('meetup', MeetupSchema);
module.exports = MeetupModel;