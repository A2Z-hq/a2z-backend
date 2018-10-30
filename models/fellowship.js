const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FellowshipSchema = new Schema({
    title : {
        type: String
    },
    link :{
        type: String
    },
    place :{
        type: String
    },
    country :{
        type: String
    },
    field :{
        type: String
    },
    eligiblity :{
        type:String,
        enum: ['Bachelors', 'Masters', 'PHD']
    },
    applicationDeadline :{
        type: String
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
        type: Boolean
    }
}) 

const FellowshipModel = mongoose.model('fellowship', FellowshipSchema);
module.exports = FellowshipModel;