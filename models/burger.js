var orm = require("../config/orm.js");

// create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {

  selectAll: function(callback){
    orm.selectAll("burgers", function(res){
      callback(res);
    });
  },

  insertOne: function(burger, callback){
    orm.insertOne("burgers", vals, function(res){
      callback(res);
    });
  },

  updateOne: function(columnVals, condition, callback){
    orm.updateOne("burgers", columnVals, condition, function(res){
      callback(res);
    });
  }
};


module.exports = burger;