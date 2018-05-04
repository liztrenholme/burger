var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

// ***********************
//var routeSource = require("./controllers/burgers_controllers.js");
// require source of routes!!!!
// var mysql = require("mysql");
//var connection = require("./config/connection.js")

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 7000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// *******************
//app.use(router);
// *******************

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/burgers_controllers.js")(app);
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});