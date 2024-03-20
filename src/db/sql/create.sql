-- create.sql

-- creates a new database called PetPursuit
-- will also setup the tables

DROP DATABASE IF EXISTS PetPursuit;

-- Create database called PetPursuit
CREATE DATABASE PetPursuit;


-- Change database to PetPursuit
USE PetPursuit;

CREATE TABLE Pet (
    pet_id BIGINT UNSIGNED AUTO_INCREMENT,
    name VARCHAR(50),
    sex ENUM('M', 'F'),
    age SMALLINT UNSIGNED,
    img VARCHAR(256),
    description VARCHAR(500),
    status ENUM('available', 'booked', 'adopted') NOT NULL,
    type_id BIGINT UNSIGNED,
    centre_id BIGINT UNSIGNED NOT NULL,
    PRIMARY KEY(pet_id)
);

CREATE TABLE PetType (
    type_id BIGINT UNSIGNED AUTO_INCREMENT,
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
    centre_id BIGINT UNSIGNED,
    name VARCHAR(50),
    address VARCHAR(150),
    phone VARCHAR(12)
        COMMENT 'One phone number per rescue centre',
    slot_len_min INT2 UNSIGNED NOT NULL DEFAULT 30
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
    client_id BIGINT UNSIGNED,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    account_id BIGINT UNSIGNED,
    PRIMARY KEY(client_id)
);

CREATE TABLE ClientPhone (
    phone_id BIGINT UNSIGNED,
    client_id BIGINT UNSIGNED,
    phone VARCHAR(12),
    PRIMARY KEY(phone_id),
    FOREIGN KEY(client_id) REFERENCES Client(client_id)
                ON UPDATE CASCADE
                ON DELETE CASCADE
);
-- will let database store duplicate phone numbers for same client

CREATE TABLE Admin (
    admin_id BIGINT UNSIGNED,
    account_id BIGINT UNSIGNED,
    centre_id BIGINT UNSIGNED,
    PRIMARY KEY(admin_id),
    FOREIGN KEY(centre_id) REFERENCES RescueCentre(centre_id)
                ON UPDATE CASCADE
                ON DELETE CASCADE
);

CREATE TABLE Account (
    account_id BIGINT UNSIGNED,
    email VARCHAR(100) NOT NULL,
    ***REMOVED*** VARCHAR(50) NOT NULL,
    PRIMARY KEY(account_id),
    CONSTRAINT unique_account UNIQUE(email)
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
    appointment_id BIGINT UNSIGNED AUTO_INCREMENT,
    slot_no SMALLINT UNSIGNED,
    date DATE NOT NULL,
    start_time TIME NOT NULL,
    client_id BIGINT UNSIGNED,
    centre_id BIGINT UNSIGNED,
    pet_id BIGINT UNSIGNED,
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

-- Now insert some test data

-- insert a Center
INSERT INTO RescueCentre (centre_id, name, address, phone)
VALUES (1, 'Animal Services Center', '2201 Portland St SE', '(403)2682489'),
       (2, 'Calgary Humane Society', '4455 110 Ave SE', '(403)2054455'),
       (3, 'Calgary Animal Rescue Society', 'Box 57089 Sunridge RPO', '(403)8160759'),
       (4, 'MEOW Foundation', '35 Skyline Crescent NE', '(403)2306033'),
       (5, 'Animal Rescue Foundation', '3548 27 St NE', '(403)2431910');



-- insert some PetType
INSERT INTO PetType (type_id, category, breed)
VALUES (1, 'Dog', 'German Sheperd');

INSERT INTO PetType (type_id, category, breed)
VALUES (2, 'Dog', 'Golden Retriever');

INSERT INTO PetType (type_id, category, breed)
VALUES (3, 'Dog', 'Bulldog');

INSERT INTO PetType (type_id, category, breed)
VALUES (4, 'Dog', 'Yorkshire Terrier');

INSERT INTO PetType (type_id, category, breed)
VALUES (5, 'Cat', 'Persian');

INSERT INTO PetType (type_id, category, breed)
VALUES (6, 'Cat', 'Maine Coon');

INSERT INTO PetType (type_id, category, breed)
VALUES (7, 'Cat', 'Siamese');

INSERT INTO PetType (type_id, category, breed)
VALUES (8, 'Rabbit', 'Havanna');

INSERT INTO PetType (type_id, category, breed)
VALUES (9, 'Rabbit', 'Polish');

INSERT INTO PetType (type_id, category, breed)
VALUES (10, 'Exotic', 'Bearded Dragons');

INSERT INTO PetType (type_id, category, breed)
VALUES (11, 'Exotic','Parrots');

INSERT INTO PetType (type_id, category, breed)
VALUES (12, 'Exotic','Leopard Geckos');


-- insert some Dogs
INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Henry', 'M', 5, null, "Henry is a tiny bundle of joy with a heart as big as his fluffy coat. Despite his small size, he's bursting with personality and loyalty. He loves nothing more than cuddling up on your lap and showering you with affection. Henry's playful nature will bring endless smiles to your home.", 'available', 4, 1);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Charlie', 'M', 3, null, "Charlie is a majestic and intelligent companion who exudes confidence and grace. With his striking coat and keen eyes, he's always ready for an adventure. Whether it's exploring the great outdoors or lounging by your side, Charlie's unwavering loyalty and protective nature make him the perfect companion for any journey.", 'available', 1, 5);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Shadow', 'M', 7, null, "Despite his tough exterior, Shadow is a gentle giant with a heart of gold. His laid-back demeanor and soulful eyes will melt your heart in an instant. Shadow may be a bit older, but he's still full of love to give and has plenty of life left to share with a loving family. He's patiently waiting for someone to see past his wrinkles and discover the sweet soul within.", 'booked', 3, 2);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Buddy', 'M', 2, null, "Buddy is a bubbly and affectionate pup with a wagging tail and a smile that lights up the room. His boundless energy and enthusiasm for life are infectious, and he's always up for a game of fetch or a long walk in the park. With his gentle nature and playful spirit, Buddy will quickly become your best friend and constant companion.", 'available', 2, 3);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Bella', 'F', 4, null, "Bella is a loyal and loving companion who thrives on affection and attention. Her warm and gentle nature makes her the perfect cuddle buddy for lazy afternoons on the couch. Despite her graceful demeanor, Bella has a playful side and loves nothing more than chasing after her favorite toys or splashing around in the water. With her unwavering devotion, Bella will bring endless joy to your life.", 'adopted', 2, 1);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Lucy', 'F', 6, null, "Lucy is a sweet and gentle soul with a heart as big as her adorable wrinkled face. Her laid-back attitude and easygoing nature make her a joy to be around. Whether she's lounging in the sun or snuggled up next to you on the couch, Lucy's calming presence will instantly put you at ease. With her soulful eyes and unconditional love, Lucy will quickly become an indispensable member of your family.", 'available', 3, 1);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Daisy', 'F', 8, null, 'Daisy may be small in size, but she has a big personality and an even bigger heart. Her feisty spirit and playful antics will keep you entertained for hours on end. Despite her age, Daisy is still full of energy and loves nothing more than going for long walks and exploring the world around her. With her boundless enthusiasm and unwavering loyalty, Daisy will bring endless joy and laughter to your home.', 'booked', 4, 4);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Roxy', 'F', 1, null, "Roxy is a spunky and energetic pup with a zest for life that's impossible to ignore. Her playful demeanor and endless curiosity make every day an adventure. Whether she's chasing after her favorite toy or romping around in the yard, Roxy's boundless energy and infectious enthusiasm will keep you on your toes. With her sweet nature and irresistible charm, Roxy will steal your heart from the moment you meet her.", 'available', 3, 2);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Bear', 'M', 3, null, "Bear may be small in stature, but he has a heart as big as a bear and a personality to match. His playful antics and boundless energy will keep you entertained for hours on end. Whether he's racing around the house or snuggled up in your lap, Bear's loving nature and unwavering loyalty make him the perfect companion for any adventure. With his infectious enthusiasm and gentle spirit, Bear will quickly become your constant source of joy and laughter.", 'adopted', 4, 3);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Rusty', 'M', 9, null, "Rusty may be a bit older, but he's still as lively and adventurous as ever. His wise eyes and gentle demeanor make him a calming presence in any situation. Whether he's exploring the great outdoors or lounging by your side, Rusty's unwavering loyalty and protective nature make him the perfect companion for any journey. With his boundless love and endless devotion, Rusty will quickly become an indispensable member of your family.", 'booked', 1, 1);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Chance', 'M', 3, null, "Chance is a playful and affectionate pup with a heart of gold and a smile that lights up the room. His boundless energy and zest for life are infectious, and he's always up for an adventure. Whether he's chasing after his favorite toy or snuggled up next to you on the couch, Chance's loving nature and unwavering loyalty make him the perfect companion for any journey. With his endless enthusiasm and gentle spirit, Chance will bring endless joy and laughter to your life.", 'available', 2, 5);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Misty', 'M', 5, null, "Misty is a gentle and affectionate soul with a heart as big as her adorable wrinkled face. Her laid-back demeanor and easygoing nature make her a joy to be around. Whether she's lounging in the sun or snuggled up next to you on the couch, Misty's calming presence will instantly put you at ease. With her soulful eyes and unconditional love, Misty will quickly become an indispensable member of your family.", 'adopted', 3, 1);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Princess', 'F', 10, null, "Princess may be small in size, but she has a regal presence that commands attention wherever she goes. Her graceful demeanor and elegant gait make her a sight to behold. Despite her age, Princess is still full of spunk and spirit and loves nothing more than going for leisurely strolls and soaking up the sun. With her dignified air and unwavering loyalty, Princess will bring a touch of royalty to your home.", 'available', 4, 2);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Sammy', 'M', 4, null, "Sammy is a loyal and devoted companion with a heart as big as his boundless energy. His playful antics and friendly demeanor make him a favorite among everyone he meets. Whether he's chasing after his favorite toy or cuddled up next to you on the couch, Sammy's loving nature and unwavering loyalty make him the perfect companion for any adventure. With his infectious enthusiasm and gentle spirit, Sammy will quickly become an indispensable member of your family.", 'adopted', 1, 2);


-- insert some Cats
INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Whiskers', 'F', 3, null, "Whiskers is a majestic beauty with eyes that seem to hold the mysteries of the universe. This four-year-old sweetheart is both independent and affectionate, striking the perfect balance between cuddle buddy and explorer. Whether she's chasing shadows or curling up in your lap, Whiskers's presence is sure to brighten any room.", 'adopted', 7, 3);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Mittens', 'F', 2, null, "Mittens is as soft as her name suggests. With her fluffy coat and gentle demeanor, Mittens is the perfect companion for cozy nights in and sunny afternoons spent lounging by the window. She's playful, affectionate, and ready to bring warmth and joy to her forever home.", 'available', 5, 5);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Luna', 'M', 4, null, "Luna is a majestic beauty with eyes that seem to hold the mysteries of the universe. This four-year-old sweetheart is both independent and affectionate, striking the perfect balance between cuddle buddy and explorer. Whether she's chasing shadows or curling up in your lap, Luna's presence is sure to brighten any room.", 'available', 5, 4);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Felix', 'M', 1, null, "Felix is a charming three-year-old with a penchant for mischief and a heart full of love. With his expressive green eyes and playful antics, Felix will keep you entertained from sunrise to sunset. Whether he's chasing after toy mice or snuggling up for a nap, Felix's affectionate nature is bound to steal your heart.", 'available', 6, 4);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Chloe', 'F', 3, null, "Chloe is a playful and curious kitty with a heart of gold. At just three years old, Chloe has already mastered the art of stealing hearts with her charming personality and soft, silky fur. She loves nothing more than chasing feather toys and basking in the sun's warm rays. Bring Chloe home, and you'll gain a loyal friend for life.", 'available', 7, 2);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Tiger', 'M', 5, null, "Tiger is a charming three-year-old with a penchant for mischief and a heart full of love. With his expressive green eyes and playful antics, Tiger will keep you entertained from sunrise to sunset. Whether he's chasing after toy mice or snuggling up for a nap, Tiger's affectionate nature is bound to steal your heart.", 'adopted', 6, 5);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Bella', 'F', 2, null, "Bella is as soft as her name suggests. With her fluffy coat and gentle demeanor, Bella is the perfect companion for cozy nights in and sunny afternoons spent lounging by the window. She's playful, affectionate, and ready to bring warmth and joy to her forever home.", 'available', 6, 1);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Shadow', 'M', 4, null, "Shadow is a majestic beauty with eyes that seem to hold the mysteries of the universe. This four-year-old sweetheart is both independent and affectionate, striking the perfect balance between cuddle buddy and explorer. Whether she's chasing shadows or curling up in your lap, Shadow's presence is sure to brighten any room.", 'available', 5, 2);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Misty', 'M', 2, null, "Misty is a playful and curious kitty with a heart of gold. At just three years old, Misty has already mastered the art of stealing hearts with her charming personality and soft, silky fur. She loves nothing more than chasing feather toys and basking in the sun's warm rays. Bring Misty home, and you'll gain a loyal friend for life.", 'available', 7, 3);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Oliver', 'M', 3, null, "Oliver is a playful and curious kitty with a heart of gold. At just three years old, Oliver has already mastered the art of stealing hearts with his charming personality and soft, silky fur. He loves nothing more than chasing feather toys and basking in the sun's warm rays. Bring Oliver home, and you'll gain a loyal friend for life.", 'available', 7, 3);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Socks', 'M', 4, null, "Socks is as soft as his name suggests. With his fluffy coat and gentle demeanor, Socks is the perfect companion for cozy nights in and sunny afternoons spent lounging by the window. He's playful, affectionate, and ready to bring warmth and joy to his forever home.", 'available', 5, 3);

-- insert some Rabbits
INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id) 
VALUES ('Thumper', 'F', 5, null, "Thumper is a gentle and wise rabbit who has seen many seasons pass. Despite her age, she maintains a youthful spirit and enjoys hopping around in the garden, nibbling on fresh greens, and basking in the warmth of the sun. With her soft fur and endearing personality, Thumper will bring joy and comfort to any home.", 'adopted', 8, 4);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id) 
VALUES ('Clover', 'M', 3, null, "Clover is a curious and playful bunny who loves exploring new places and meeting new friends. With his bright eyes and fluffy white fur, he's sure to capture your heart. Whether he's hopping around the house or snuggling up for a nap, Clover is always full of energy and ready for adventure.", 'available', 8, 1);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id) 
VALUES ('Bun-Bun', 'M', 4, null, "Bun-Bun is a mischievous little rabbit with a big personality. Despite his small size, he's full of spunk and loves to play games. Whether he's zooming around the room or munching on his favorite treats, Bun-Bun is sure to keep you entertained with his antics and charm.", 'available', 9, 2);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id) 
VALUES ('Snowball', 'M', 6, null, "Snowball is a fluffy white rabbit with a heart as pure as snow. He enjoys hopping through fields of flowers, basking in the sunlight, and munching on crunchy carrots. With his gentle nature and soft fur, Snowball is the perfect companion for cozy cuddles and peaceful moments.", 'available', 8, 1);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id) 
VALUES ('Cinnamon', 'F', 2, null, "Cinnamon is a sweet and energetic bunny who loves to hop and skip around. With her warm brown fur and sparkling eyes, she's as delightful as her namesake spice. Whether she's exploring new nooks and crannies or enjoying snuggles on the sofa, Cinnamon is sure to bring warmth and happiness to your home.", 'available', 9, 1);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id) 
VALUES ('Hazel', 'M', 8, null, "Hazel is a wise old rabbit who has seen many seasons come and go. With his gray fur and gentle demeanor, he exudes calmness and grace. Whether he's nibbling on fresh greens or lounging in the shade, Hazel's presence brings a sense of peace and tranquility to his surroundings.", 'available', 9, 2);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id) 
VALUES ('Pepper', 'M', 5, null, "Pepper is a lively and spirited bunny with a twinkle in his eye. He loves to hop and jump, exploring every corner of his surroundings with boundless energy. With his sleek black fur and playful antics, Pepper is sure to keep you laughing and smiling all day long.", 'available', 9, 2);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id) 
VALUES ('Oreo', 'M', 7, null, "Oreo is a friendly and outgoing rabbit with a heart of gold. He enjoys hopping through fields of clover, sniffing flowers, and nibbling on tasty treats. With his black and white fur and bright eyes, Oreo is as charming as his namesake cookie. He's ready to hop into your heart and become your new best friend.", 'available', 8, 3);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id) 
VALUES ('Cotton Trail', 'F', 3, null, "Cotton Trail is a gentle and affectionate bunny who loves to cuddle and snuggle. With her soft white fur and sparkling eyes, she's as lovely as a freshly fallen snow. Whether she's hopping around the garden or lounging in your lap, Cotton Trail is sure to fill your home with warmth and love.", 'available', 9, 3);


-- insert some Exotics
INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Zephyr', 'F', 3, null, "Zephyr is a graceful and charming female parrot with a colorful plumage. She loves to sing and mimic sounds, entertaining everyone with her playful nature. Zephyr is seeking a loving family who will appreciate her beauty and provide her with plenty of toys and attention.", 'adopted', 11, 1);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Atlas', 'M', 6, null, "Atlas is a curious and adventurous male Leopard Gecko who loves exploring his terrarium. He enjoys basking under his heat lamp and hunting for insects. Atlas is looking for an experienced reptile enthusiast who can provide him with a stimulating environment and plenty of enrichment.", 'available', 12, 1);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Sapphire', 'M', 2, null, "Sapphire is an affectionate male bearded dragon with a gentle demeanor. He enjoys basking under his heat lamp and munching on his favorite greens. Sapphire is hoping to find a loving family who will provide him with plenty of space to explore and lots of tasty treats.", 'adopted', 10, 2);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Nova', 'M', 8, null, "Nova is a friendly male bearded dragon who loves to bask in the sun and explore his surroundings. He enjoys lounging on his favorite rocks and munching on his favorite greens. Nova is looking for a caring family who will appreciate his gentle nature and provide him with lots of love and attention.", 'available', 10, 2);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Luna', 'F', 1, null, "Luna is a vibrant and energetic female parrot who loves to sing and dance. She enjoys spending time perched on her favorite toys and interacting with her human companions. Luna is looking for a forever home where she can be the center of attention and spread joy to everyone around her.", 'available', 11, 1);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Phoenix', 'F', 3, null, "Phoenix is a gentle and affectionate female Leopard Gecko who loves to explore her terrarium and bask under her heat lamp. She enjoys hunting for insects and lounging on her favorite rocks. Phoenix is seeking a loving family who will provide her with plenty of space to roam and lots of tasty treats.", 'adopted', 12, 5);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Orion', 'M', 6, null, "Orion is a playful and curious male Leopard Gecko who enjoys climbing on branches and exploring his terrarium. He loves hunting for insects and basking under his heat lamp. Orion is looking for a caring family who will provide him with plenty of space to explore and opportunities for enrichment.", 'available', 12, 4);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Venus', 'M', 2, null, "Venus is an adorable male parrot with a charming personality. He loves to chatter and interact with his human companions. Venus is seeking a loving family who will provide him with plenty of toys and attention.", 'adopted', 11, 2);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Cosmo', 'M', 8, null, "Cosmo is a friendly male bearded dragon who enjoys basking in the sun and exploring his surroundings. He loves munching on his favorite greens and lounging in his cozy terrarium. Cosmo is looking for a forever home where he can be cherished and loved.", 'available', 10, 3);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Stella', 'F', 1, null, "Stella is a vibrant and playful female bearded dragon who loves to explore and bask under her heat lamp. She enjoys munching on her favorite greens and interacting with her human companions. Stella is looking for a loving family who will provide her with plenty of space to roam and lots of tasty treats.", 'available', 10, 3);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Apollo', 'M', 8, null, "Apollo is a charming male Leopard Gecko with a playful spirit. He loves climbing on branches and exploring his terrarium. Apollo is seeking a loving family who will provide him with plenty of space to explore and opportunities for enrichment.", 'available', 12, 1);

INSERT INTO Pet (name, sex, age, img, description, status, type_id, centre_id)
VALUES ('Aurora', 'F', 1, null, "Aurora is a sweet and energetic female parrot who loves to sing and dance. She enjoys spending time with her human companions and showing off her colorful feathers. Aurora is looking for a forever home where she can spread joy and bring happiness to everyone around her.", 'available', 11, 4);
