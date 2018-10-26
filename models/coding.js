const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CodingSchema = new Schema({
    text : {
        type : String,
    },
    url :{
        type : String
    },
    dlevel :{
        type : String
    }
});

const CodingResources = mongoose.model('coding', CodingSchema);
module.exports = CodingResources;
