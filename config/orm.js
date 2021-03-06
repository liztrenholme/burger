var connection = require("./connection.js")

var orm = { // selecting all 
    selectAll: function(input, callback) {
        connection.query('SELECT * FROM burgers', function(err, result) {
            if (err) {
                return res.status(500).end();
            }
            callback(result);
        });

    },
    //adding a new burger
    insertOne: function(table, vals, callback) {
        connection.query('INSERT INTO burgers (burger) VALUES ("'+newBurger+'")',
            // burger: burger,
            // devoured: false,
        function(err, result) {
            if (err) {
                return res.status(500).end();
            }
            callback(result);
        });

    },
    //modifying existing burger
    updateOne: function(table, burger, condition, callback) {
        connection.query('UPDATE burgers SET ? WHERE ?', [condition], function(err, result) {
            if (err) {
                return res.status(500).end();
            }
            callback(result);
        });

    }

};


module.exports = orm;