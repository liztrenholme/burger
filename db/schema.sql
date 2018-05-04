USE burgers_db;

CREATE TABLE burger
(
id int NOT NULL AUTO_INCREMENT,
burger varchar(255) NOT NULL,
devoured boolean NOT NULL,
PRIMARY KEY (id)
);
