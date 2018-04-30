-- Create the database movie_planner_db and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table plans.
CREATE TABLE burger
(
id int NOT NULL AUTO_INCREMENT,
burger varchar(255) NOT NULL,
devoured boolean NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO burgers (burger) VALUES ("Veggie Burger");
INSERT INTO burgers (burger) VALUES ("Bacon and Blue Cheese Burger");
INSERT INTO burgers (burger) VALUES ("Cheeseburger");