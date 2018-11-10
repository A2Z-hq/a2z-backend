const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TopChartSchema = new Schema({
    name : {
        type : String, 
        required : true
    },
    url : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    category :{
        type : String, 
        required : true,
        enum : [
            'Person',
            'Website',
            'Books',
            'Blogs',
            'Others'
        ],
    },
    bookmark : {
        type : Boolean,
        default : false
    },
    active : {
        type : Boolean,
        default : true
    }

});

const TopChart = mongoose.model('topChart', TopChartSchema);
module.exports = TopChart;
