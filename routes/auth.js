const middleware    = require('../middleware');
const express           = require('express'),
    passport            = require('passport'),
    router              = express.Router();
    
const User = require('./../models/user');

//AUTH ROUTES
//Handling signup logic
router.post("/signup", (req, res) => {
    let newUser = new User({ username: req.body.username});
    User.register(newUser, req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        passport.authenticate("local")(req, res, () => {
            res.json({"success" : "User successfully registered"});
        });
    });
});

//handling login logic
router.post("/login", passport.authenticate("local", {
    successRedirect: "/test",
    failureRedirect: "/"
}), (req, res) => {
});

router.get("/logout", middleware.isLoggedIn, (req, res) => {
    req.logout();
    res.json({"success" : "You have been logged out"});
});

module.exports = router;