USE PetPursuit;

-- Now insert some test data

-- insert a Center
INSERT INTO RescueCentre (centre_id, name, address, phone, slot_len_min, num_slot_per_day)
VALUES (1, 'CentreA', 'Centre A address', '4030804940', 30, 1);

-- insert some PetType
INSERT INTO PetType (type_id, category, breed)
VALUES (1, 'Dog', 'Breed A');

INSERT INTO PetType (type_id, category, breed)
VALUES (2, 'Dog', 'Breed B');

INSERT INTO PetType (type_id, category, breed)
VALUES (3, 'Cat', 'Cat Breed A');

INSERT INTO PetType (type_id, category, breed)
VALUES (4, 'Cat', 'Cat Breed B');

-- insert some Dogs
INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Henry', 'M', 4, null, 'A dog', 'available', 1, 1);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Dog B', 'M', 2, null, 'dog b', 'available', 1, 1);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Dog C', 'M', 2, null, 'dog c', 'booked', 2, 1);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Dog D', 'F', 2, null, 'dog d', 'available', 2, 1);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Dog E', 'F', 3, null, 'dog e', 'adopted', 2, 1);


-- insert some Cats
INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Cat A', 'F', 1, null, 'cat a', 'adopted', 3, 1);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Cat B', 'F', 1, null, 'cat b', 'available', 3, 1);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Cat C', 'M', 4, null, 'cat c', 'available', 3, 1);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Cat D', 'M', 2, null, 'cat d', 'available', 4, 1);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Cat E', 'M', 3, null, 'cat e', 'available', 4, 1);

