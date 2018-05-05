var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");
// module.exports = function() {
//     

// module.exports = function() {
//var app = express;

//app.use(router);
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        "burger", "devoured"
    ], [
        req.body.burger, req.body.devoured
    ], function(result) {
        res.redirect("/");
    });
});


router.put("api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, 
    function(result) {
        res.redirect("/");
    });
});

// router.delete("/api/burgers/:id", function(req, res) {
//     var condition = "id = " + req.params.id;

//     burger.delete(condition, function(result) {
//         res.redirect("/");
//     });
// });
// return router;
// };

// Export routes for server.js to use.
module.exports = router;