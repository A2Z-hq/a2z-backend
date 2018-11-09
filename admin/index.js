/**
 * Welcome to GOD MODE
 * Please don't change any files without GOD permission.
 * Don't visit this section.
 */
const express = require('express');
const router = express.Router();

router.get('/a2zhq',(req, res, next)=>{
    // res.sendFile('index.html', {root: './admin/public'});
    // next();
    res.render('index');
});

router.get('/dashboard',(req, res, next)=>{
    // res.sendFile('index.html', {root: './admin/public'});
    // next();
    res.render('dashboard');
});

router.post('/login', (req, res)=>{
    console.log(req);
});

router.get('/test', (req, res)=>{
    res.send({"message" : "Welcome to Test GOD MODE"})
});

module.exports = router;
