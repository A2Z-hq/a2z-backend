/**
 * Schema for Developer Community
 * Author : Deepak Kumar
 * Date : 11/11/18
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommunitySchema = new Schema({
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
    subscribe :{
        type: Boolean,
        default : false
    },
    bookmark :{
        type: Boolean,
        default : false
    }
});

const CommunityModel = mongoose.model('community', CommunitySchema);
module.exports = CommunityModel;