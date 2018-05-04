var connection = require("./connection.js")

var orm = { // selecting all 
    selectAll: function(callback) {
        connection.query('SELECT * FROM burgers', function(err, result) {
            if (err) {
                return res.status(500).end();
            }
            callback(result);
        });

    },
    //adding a new burger
    insertOne: function(burger, callback) {
        connection.query('INSERT INTO burgers SET ?', {
            burger: burger,
            devoured: false,
        }, function(err, result) {
            if (err) {
                return res.status(500).end();
            }
            callback(result);
        });

    },
    //modifying existing burger
    updateOne: function(burgerID, callback) {
        connection.query('UPDATE burgers SET ? WHERE ?', [{ devoured: true }, { id: burgerID }], function(err, result) {
            if (err) {
                return res.status(500).end();
            }
            callback(result);
        });

    }

};


module.exports = orm;