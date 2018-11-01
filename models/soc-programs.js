const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OpenSourceProgramSchema = new Schema({
    title :{
        type : String, 
        required : true
    },

    url : {
        type :String, 
        required : true
    },

    catergory :{
        type : String, 
        required : true,
        enum : [
            "Summer of Code Programs", 
            "Open Source Competitions"
        ]
    },

    stipend : {
        type : String,
        required : true
    },
    
    isOnline : {
        type : Boolean,
        default : true
    }
});

const OpenSourcePrograms = mongoose.model('coding', OpenSourceProgramSchema);
module.exports = OpenSourcePrograms;
