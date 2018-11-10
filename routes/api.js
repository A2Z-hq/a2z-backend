const express = require('express');
const router = express.Router();

const CodingResources = require('../models/coding');
const Conference = require('../models/conference');
const Hackathon = require('../models/hackathon');
const Fellowship = require('../models/fellowship');
const Scholarship = require('../models/scholarship');
const OpenSourcePrograms  = require('../models/soc-programs');
const TopCharts = require('../models/topcharts');

//CODING RESOURCES

//  POST /coding
router.post('/coding',(req, res, next) => {
    const { title, url, diffcultyLevel, tags } = req.body
    CodingResources.create({title, url, diffcultyLevel, tags})
    .then((coding) => res.send(coding))
    .catch(next);
});

//  GET - /coding
router.get('/coding',(req, res, next)=>{
    CodingResources.find({}).then((docs)=>{
        res.send(docs);
    },(e)=>{
        if(e) return res.status(404).send(e);
    });
})
 
// POST - /conference 
router.post('/conference', (req, res, next) => {
    const { title, url, place, country, eventDate } = req.body
    Conference.create({ title, url, place, country, eventDate })
    .then(conference =>res.send(conference))
    .catch(next);
})

// GET - /conference
router.get('/conference', (req, res,next)=>{
    Conference.find({}).then((docs)=>{
        res.send(docs);
    },(e)=>{
        if(e) return res.status(404).send(e);
    });
});


// POST - /hackathon
router.post('/hackathon', (req, res, next) => {
    const { title, domain, url, type, applicationStartDate, applicationEndDate, place, country, travelReimbursment } = req.body
    Hackathon.create({ title, domain, url, type, applicationStartDate, applicationEndDate, place, country, travelReimbursment })
    .then(hackathon =>res.send(hackathon))
    .catch(next);
});

// GET - /hackathon
router.get('/hackathon', (req, res,next)=>{
    Hackathon.find({}).then((docs)=>{
        res.send(docs);
    },(e)=>{
        if(e) return res.status(404).send(e);
    });
});

// POST - /fellowship
router.post('/fellowship', (req, res, next) => {
    const { title, link, place, country, field, eligiblity, applicationDeadline, online  } = req.body
    Fellowship.create({ title, link, place, country, field, eligiblity, applicationDeadline, online })
    .then(fellowship =>res.send(fellowship))
    .catch(next);
});

// GET - /fellowship
router.get('/fellowship', (req, res,next)=>{
    Fellowship.find({}).then((docs)=>{
        res.send(docs);
    },(e)=>{
        if(e) return res.status(404).send(e);
    });
});


// POST - /scholarship
router.post('/scholarship', (req, res, next) => {
    const { title, url, field } = req.body
    Scholarship.create({ title, url, field })
    .then(scholarship =>res.send(scholarship))
    .catch(next);
});

// GET - /scholarship
router.get('/fellowship', (req, res,next)=>{
    Scholarship.find({}).then((docs)=>{
        res.send(docs);
    },(e)=>{
        if(e) return res.status(404).send(e);
    });
});


// POST - /open-source-programs
router.post('/open-source-programs', (req, res, next)=>{

});

// GET - /open-source-programs

router.get('/open-source-programs', (req, res, next)=>{
    
});

module.exports = router;