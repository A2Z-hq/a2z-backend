
var middlewareObj = {};

middlewareObj.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.json({"error" : "You need to be logged in"});
};

module.exports = middlewareObj;