const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FellowshipSchema = new Schema({
    title : {
        type: String,
        required:true
    },
    link :{
        type: String,
        required:true
    },
    place :{
        type: String,
        required:true
    },
    country :{
        type: String,
        required:true
    },
    field :{
        type: String,
        required:true
    },
    eligiblity :{
        type:String,
        enum: ['Bachelors', 'Masters', 'PHD']
    },
    applicationDeadline :{
        type: Date
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
    },
    // true - Online & false - InPerson
    online :{
        type: Boolean,
        default : false
    }
}) 

const FellowshipModel = mongoose.model('fellowship', FellowshipSchema);
module.exports = FellowshipModel;