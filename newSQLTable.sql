-- category create
CREATE TABLE categories (
  catID serial PRIMARY KEY,
  catName VARCHAR(50) NOT NULL
);

INSERT INTO categories (catName) VALUES ('dasturlash'), ('marketing'), ('design');

-- sap category

CREATE TABLE sap_category (
  sapId Serial primary key,
  sapName VARCHAR(50) NOT NULL,
  catRefId INT NOT NULL,
  FOREIGN KEY (catRefId) REFERENCES categories(catID)
);

INSERT INTO sap_category
    (sapName, catRefId)
VALUES
    ('SAP Category 1', 1),
    ('SAP Category 2', 1),
    ('SAP Category 3', 2),
    ('SAP Category 4', 2),
    ('SAP Category 5', 2),
    ('SAP Category 6', 3),
    ('SAP Category 7', 3),
    ('SAP Category 8', 3),
    ('SAP Category 9', 3);



-- create users table

CREATE TABLE users (
  userId serial primary KEY,
  username VARCHAR(50) NOT NULL,
  login VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(50) NOT NULL
);

INSERT INTO users (username, login, password) VALUES
  ('username1', 'emaile1@gmail.com', 'password1'),
  ('username2', 'emaile2@gmail.com', 'password2'),
  ('username3', 'emaile3@gmail.com', 'password3'),
  ('username4', 'emaile4@gmail.com', 'password4'),
  ('username5', 'emaile5@gmail.com', 'password5'),
  ('username6', 'emaile6@gmail.com', 'password6'),
  ('username7', 'emaile7@gmail.com', 'password7'),
  ('username8', 'emaile8@gmail.com', 'password8'),
  ('username9', 'emaile9@gmail.com', 'password9');


-- videos create table;

CREATE TABLE videos (
  videoId serial primary KEY,
  userId INT NOT NULL,
  title VARCHAR(100) NOT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  categoryId INT NOT NULL,
  sap_category VARCHAR(50) NOT NULL,
  FOREIGN KEY (categoryId) REFERENCES categories(catID),
  FOREIGN KEY (userId) REFERENCES users(userId)
);

INSERT INTO videos (userId, title, categoryId, sap_category) VALUES
  (1, 'Video title',  1, 'SAP Category 1'),
  (2, 'Video title',  2, 'SAP Category 2'),
  (3, 'Video title',  3, 'SAP Category 3'),
  (4, 'Video title',  1, 'SAP Category 1'),
  (5, 'Video title',  2, 'SAP Category 2'),
  (6, 'Video title',  3, 'SAP Category 3'),
  (7, 'Video title',  3, 'SAP Category 4'),
  (8, 'Video title',  2, 'SAP Category 4'),
  (9, 'Video title',  2, 'SAP Category 2');



-- create comments table

CREATE TABLE comments (
  commentId serial primary KEY,
  userId INT NOT NULL,
  videoId INT NOT NULL,
  comment TEXT NOT NULL,
  FOREIGN KEY (userId) REFERENCES users(userId),
  FOREIGN KEY (videoId) REFERENCES video(videoId)
);


INSERT INTO comments (userId, videoId, comment) VALUES
  (1, 1, 'Great tutorial, thanks for sharing!'),
  (2, 1, 'This was really helpful, thank you!'),
  (3, 1, 'I had been struggling with this topic but your video made it clear.'),
  (4, 2, 'Interesting points, but I think there are some other strategies worth considering.'),
  (5, 2, 'Thanks for the tips, I will definitely try them out.'),
  (6, 3, 'I really enjoyed this video, it was very informative.'),
  (7, 3, 'Can you recommend any additional resources for learning more about this topic?'),
  (8, 2, 'I loved your approach to teaching Python, it made the language seem less intimidating.'),
  (9, 3, 'This was a great overview of the design principles, thank you!');
