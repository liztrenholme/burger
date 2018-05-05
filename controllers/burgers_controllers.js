var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// creating routes
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burger/create", function(req, res) {
    burger.insertOne([
        "burger", "devoured"
    ], [
        req.body.newBurger, req.body.devoured
    ], function(result) {
        res.redirect("/");
    });
});


router.post("burger/eat/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, 
    function(result) {
        res.redirect("/");
    });
});



// Export routes for server.js to use.
module.exports = router;