const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CodingSchema = new Schema({
    text : {
        type : String
    },
    url :{
        type : String
    },
    diffcultyLevel :{
        type : String
    },
    tags: {
        type: String,
        enum: [
            'Python',
            'HTML & CSS',
            'JavaScript',
            'Git & Github',
            'Databases',
            'Data Structure',
            'Machine Learning & Deep Learning',
            'Android Development',
            'Backend Development',
            'Frontend Development'
        ]
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
