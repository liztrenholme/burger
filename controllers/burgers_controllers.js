var express = require("express");
var burger = require("../models/burger.js");
//var router = express.Router()
// module.exports = function() {
//     

//     // redirect to '/index'
//     router.get('/', function(req, res) {
//         res.redirect('/index');
//     });


//     // show all burgers on page
//     router.get('/index', function(req, res) {
//         burger.selectAll(function(data) {
//             var hbsObject = { 
//             	burgers: data 
//             };
//             console.log(hbsObject);
//             res.render('index', hbsObject);
//         });
//     });


//     // make a new burger
//     router.post('/burger/create', function(req, res) {
//         burger.insertOne(req.body.burger, function() {
//             res.redirect('/index');
//         });
//     });


//     // eat a burger
//     router.post('/burger/eat/:id', function(req, res) {
//         burger.updateOne(req.params.id, function() {
//             res.redirect('/index');
//         });
//     });
//     return router;
// };
module.exports = function() {
	var app = express;
	var router = express.Router();
	//app.use(router);
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.create([
    "burger", "devoured"
  ], [
    req.body.burger, req.body.devoured
  ], function(data) {
    res.redirect("/");
  });
});


router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    "devoured": req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function() {
    res.redirect("/");
  });
});
return router;
};

// Export routes for server.js to use.
//module.exports = router;