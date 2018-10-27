const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CodingSchema = new Schema({
    text : {
        type : String
    },
    url :{
        type : String
    },
    dlevel :{
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
        type: Boolean
    },
    active: {
        type: Boolean
    }
});

const CodingResources = mongoose.model('coding', CodingSchema);
module.exports = CodingResources;
