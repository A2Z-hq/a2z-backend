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


router.post('/a2zhq', (req, res)=>{
    
    var username = req.body.username;
    var password = req.body.password;

    if(username,password != null && username === 'admin@a2zhq' && password === 'admin'){
        //login sucsess
        res.render('dashboard');
    }
});

router.get('/test', (req, res)=>{
    res.send({"message" : "Welcome to Test GOD MODE"})
});

module.exports = router;
