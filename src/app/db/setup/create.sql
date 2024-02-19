-- create.sql

-- creates a new database called PetPursuit
-- will also setup the tables

DROP DATABASE IF EXISTS PetPursuit;

-- Create database called PetPursuit
CREATE DATABASE PetPursuit;


-- Change database to PetPursuit
USE PetPursuit;

CREATE TABLE Pet (
    pet_id INT AUTO_INCREMENT,
    name VARCHAR(50),
    sex ENUM('M', 'F'),
    age INT1 UNSIGNED,
    img VARCHAR(256),
    description VARCHAR(500),
    status ENUM('available', 'booked', 'adopted') NOT NULL,
    type_id INT,
    centre_id INT NOT NULL,
    PRIMARY KEY(pet_id)
);

CREATE TABLE PetType (
    type_id INT AUTO_INCREMENT,
    category VARCHAR(50) NOT NULL DEFAULT 'unknown',
    breed VARCHAR(50) NOT NULL DEFAULT  'unknown',
    CONSTRAINT unique_pet_type UNIQUE (category, breed),
    PRIMARY KEY(type_id)
);

-- add fk type_id to Pet
ALTER TABLE Pet
ADD FOREIGN KEY(type_id) REFERENCES PetType(type_id)
                 ON UPDATE CASCADE
                 ON DELETE SET NULL ;
-- won't delete pet if pet type gets deleted, just get set to null

CREATE TABLE RescueCentre (
    centre_id INT AUTO_INCREMENT,
    name VARCHAR(50),
    address VARCHAR(150),
    phone VARCHAR(12),
    slot_len_min INT2 UNSIGNED NOT NULL
        COMMENT 'Length of each appointment slot in minutes',
    num_slot_per_day INT1 UNSIGNED NOT NULL DEFAULT 1
        COMMENT 'Number of appointment slots per day',
    PRIMARY KEY(centre_id)
);

-- add fk centre_id to Pet
ALTER TABLE Pet
ADD FOREIGN KEY(centre_id) REFERENCES RescueCentre(centre_id)
                 ON UPDATE CASCADE
                 ON DELETE CASCADE;

CREATE TABLE Client (
    client_id INT AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    account_id INT,
    PRIMARY KEY(client_id)
);

CREATE TABLE ClientPhone (
    phone_id INT AUTO_INCREMENT,
    client_id INT,
    phone VARCHAR(12),
    PRIMARY KEY(phone_id),
    FOREIGN KEY(client_id) REFERENCES Client(client_id)
                ON UPDATE CASCADE
                ON DELETE CASCADE
);
-- will let database store duplicate phone numbers for same client

CREATE TABLE Admin (
    admin_id INT AUTO_INCREMENT,
    account_id INT,
    centre_id INT,
    PRIMARY KEY(admin_id),
    FOREIGN KEY(centre_id) REFERENCES RescueCentre(centre_id)
                ON UPDATE CASCADE
                ON DELETE CASCADE
);

CREATE TABLE Account (
    account_id INT AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(50) NOT NULL,
    PRIMARY KEY(account_id),
    CONSTRAINT unique_account UNIQUE(email, password)
);

-- add fk account_id to client
ALTER TABLE Client
ADD FOREIGN KEY(account_id) REFERENCES Account(account_id)
                ON UPDATE CASCADE
                ON DELETE CASCADE;

-- add fk account_id to Admin
ALTER TABLE Admin
ADD FOREIGN KEY(account_id) REFERENCES Account(account_id)
                ON UPDATE CASCADE
                ON DELETE CASCADE;

CREATE TABLE Appointment (
    appointment_id INT AUTO_INCREMENT,
    slot_no INT1 UNSIGNED,
    date DATE NOT NULL,
    start_time TIME NOT NULL,
    client_id INT,
    centre_id INT,
    pet_id INT,
    PRIMARY KEY(appointment_id),
    FOREIGN KEY(client_id) REFERENCES Client(client_id)
                ON UPDATE CASCADE
                ON DELETE SET NULL,
    FOREIGN KEY(centre_id) REFERENCES RescueCentre(centre_id)
                ON UPDATE CASCADE
                ON DELETE CASCADE,
    FOREIGN KEY(pet_id) REFERENCES Pet(pet_id)
                ON UPDATE CASCADE
                ON DELETE CASCADE
);