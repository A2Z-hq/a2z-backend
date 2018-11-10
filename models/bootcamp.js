/**
 * Schema for Bootcamp 
 * Author : Deepak Kumar (@dipakkr)
 * Date : 11/11/18
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BootcampSchema = new Schema({
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
        required:true
    },
    scholarship : {
        type : String, 
        required : true
    },
    field : {
        type : String,
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

const BootcampModel = mongoose.model('bootcamp', BootcampSchema);
module.exports = BootcampModel;