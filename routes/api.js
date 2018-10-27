const express = require('express');
const router = express.Router();

const CodingResources = require('./../models/coding');
const competition = require('./../models/competition');
const conference = require('./../models/conference');
const hackathon = require('./../models/hackathon');
const fellowship = require('./../models/fellowship');
const scholarship = require('./../models/scholarship');

//CODING RESOURCES

// 1. POST /coding

router.post('/coding',(req, res, next)=>{
    CodingResources.create({
        text: req.body.text,
        url : req.body.url,
        dlevel : req.body.dlevel
    }).then(function(coding){
        res.send(coding);
    }).catch(next);
 });
 

 module.exports = router;