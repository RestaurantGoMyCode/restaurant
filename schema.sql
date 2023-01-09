DROP DATABASE IF EXISTS restaurant;
CREATE DATABASE IF NOT EXISTS restaurant;
USE restaurant;
CREATE TABLE IF NOT EXISTS reservation(
    id INT AUTO_INCREMENT,
    firstNameClient VARCHAR(50) NOT NULL,
    lastNameClient VARCHAR(50) NOT NULL,
    mailClient VARCHAR(50) NOT NULL,
    phoneClient VARCHAR(50) NOT NULL,
    adressClient VARCHAR(255) NOT NULL,
    numberClient VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);


CREATE TABLE IF NOT EXISTS product(
    id INT AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    price VARCHAR(50) NOT NULL,
    description VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

