const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CodingSchema = new Schema({
    title : {
        type : String,
        required:true
    },
    url :{
        type : String,
        required:true
    },
    diffcultyLevel :{
        type : String,
        required : true
    },
    tags: {
        type: String,
        // enum: [
        //     'Python',
        //     'HTML & CSS',
        //     'JavaScript',
        //     'Git & Github',
        //     'Databases',
        //     'Data Structure',
        //     'Machine Learning',
        //     'Deep Learning',
        //     'Android Development',
        //     'iOS Development',
        //     'Backend Development',
        //     'Frontend Development',
        //     'Core CS'
        // ],
        required : true
    },
    bookmark: {
        type: Boolean,
        default : false
    },
    active: {
        type: Boolean,
        default: true
    }
});

const CodingResources = mongoose.model('coding', CodingSchema);
module.exports = CodingResources;
