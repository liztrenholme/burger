var orm = require("../config/orm.js");

// create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {

  selectAll: function(callback){
    orm.selectAll("burgers", function(res){
      callback(res);
    });
  },

  insertOne: function(burger, callback){
    orm.insertOne("burgers", function(res){
      callback(res);
    });
  },

  updateOne: function(id, callback){
    orm.updateOne(id, function(res){
      callback(res);
    });
  }
};


module.exports = burger;