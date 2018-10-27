const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
        type: DATE
    },
    active :{
        type: Boolean
    },
    subscrbe :{
        type: Boolean
    },
    bookmark :{
        type: Boolean
    },
    online :{
        type: Boolean
    }
}) 

const FellowshipModel = mongoose.Model('fellowship', FellowshipSchema)
module.exports = FellowshipModel 