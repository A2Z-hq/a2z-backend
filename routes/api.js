const express = require('express');
const router = express.Router();

const CodingResources = require('../models/coding');
const Competition = require('../models/competition');
const Conference = require('../models/conference');
const Hackathon = require('../models/hackathon');
const Fellowship = require('../models/fellowship');
const Scholarship = require('../models/scholarship');

//CODING RESOURCES

// 1. POST /coding
router.post('/coding',(req, res, next) => {
    const { text, url, dlevel, tags } = req.body
    CodingResources.create({ text, url, dlevel, tags })
    .then(coding =>res.send(coding))
    .catch(next);
});

// 2. GET /coding

router.get('/coding',(req, res, next)=>{
    CodingResources.find({}).then((docs)=>{
        res.send(docs);
    },(e)=>{
        if(e) return res.status(404).send(e);
    });
})
 
//  Competition
router.post('/competition', (req, res, next) => {
    const { title, domain, url, type, applicationStartDate, applicationEndDate, place, country } = req.body
    Competition.create({ title, domain, url, type, applicationStartDate, applicationEndDate, place, country })
    .then(competition =>res.send(competition))
    .catch(next);
})

// Conference 
router.post('/conference', (req, res, next) => {
    const { title, url, place, country, eventDate } = req.body
    Conference.create({ title, url, place, country, eventDate })
    .then(conference =>res.send(conference))
    .catch(next);
})

// Hackathon
router.post('/hackathon', (req, res, next) => {
    const { title, domain, url, type, applicationStartDate, applicationEndDate, place, country, TR } = req.body
    Hackathon.create({ title, domain, url, type, applicationStartDate, applicationEndDate, place, country, TR })
    .then(hackathon =>res.send(hackathon))
    .catch(next);
})

// Fellowship
router.post('/fellowship', (req, res, next) => {
    const { title, link, place, country, field, applicationDeadline, online  } = req.body
    Fellowship.create({ title, link, place, country, field, applicationDeadline, online })
    .then(fellowship =>res.send(fellowship))
    .catch(next);
})

// Scholarship
router.post('/scholarship', (req, res, next) => {
    const { title, url, field } = req.body
    Scholarship.create({ title, url, field })
    .then(scholarship =>res.send(scholarship))
    .catch(next);
})

module.exports = router;