-- Create the categories table
CREATE TABLE categories (
  catId serial primary KEY,
  catName VARCHAR(50) NOT NULL
);
CREATE TABLE sap_category (
  spaId serial primary KEY,
  sapName VARCHAR(50) NOT NULL,
  catRefId INT NOT NULL,
  FOREIGN KEY (catRefId) REFERENCES categories(catId)
);
CREATE TABLE users
(
    userId serial primary KEY,
    username VARCHAR(50) NOT NULL,
    login VARCHAR(200) NOT NULL,
    password VARCHAR(200) NOT NULL
);
CREATE TABLE videos
(
    videoId serial primary KEY,
    userId INT NOT NULL,
    title VARCHAR(100) NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    categoriesId INT NOT NULL,
    sap_categoryId INT NOT NULL,
    path VARCHAR(200) NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(userId),
    FOREIGN KEY (categoriesId) REFERENCES categories(catId),
    FOREIGN KEY (sap_categoryId) REFERENCES sap_category(spaId)
);
CREATE TABLE comments
(
    commentId serial Primary KEY,
    userId INT NOT NULL,
    videoId INT NOT NULL,
    comment TEXT NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(userId),
    FOREIGN KEY (videoId) REFERENCES videos(videoId)
);
-- Insert sample data into the categories table
INSERT INTO categories (catName) VALUES
  ('dasturlash'),
  ('marketing'),
  ('design');

-- Create the sap_category table


-- Insert sample data into the sap_category table
INSERT INTO sap_category (sapName, catRefId) VALUES
    ('python', 1),
    ('javascript', 1),
    ('go', 1),
    ('logo', 2),
    ('interyer', 2),
    ('grafika', 2),
    ('smm', 3),
    ('brand', 3),
    ('blog', 3),
    ('grafika', 2),
    ('smm', 1),
    ('brand', 3),
    ('blog', 2);

-- Create the users table


-- Insert sample data into the users table
INSERT INTO users (username, login, password) VALUES
  ('user1', 'user1@example.com', 'password1'),
  ('user2', 'user2@example.com', 'password2'),
  ('user3', 'user3@example.com', 'password3'),
  ('user4', 'user4@example.com', 'password4'),
  ('user5', 'user5@example.com', 'password5'),
  ('user6', 'user6@example.com', 'password6'),
  ('user7', 'user7@example.com', 'password7'),
  ('user8', 'user8@example.com', 'password8'),
  ('user9', 'user9@example.com', 'password9');
-- Create the video table
-- Insert sample data into the video table
INSERT INTO videos (userId, title, categoriesId, sap_categoryId, path) VALUES
  (1, 'Introduction to Programming', 1, 1, 'men videosni path yoliman'),
  (2, 'Marketing Strategies for Small Businesses', 2, 2, 'men videosni path yoliman'),
  (3, 'Design Principles for Non-Designers', 3, 3, 'men videosni path yoliman'),
  (4, 'Python Basics for Beginners', 1, 1, 'men videosni path yoliman'),
  (5, 'Social Media Marketing Techniques', 2, 2, 'men videosni path yoliman'),
  (6, 'Introduction to Graphic Design', 3, 3, 'men videosni path yoliman'),
  (7, 'Object-Oriented Programming in Java', 1, 1, 'men videosni path yoliman'),
  (8, 'Search Engine Optimization Tips', 2, 2, 'men videosni path yoliman'),
  (9, 'Web Design Best Practices', 3, 3, 'men videosni path yoliman'),
  (1, 'Advanced Python Programming', 1, 1, 'men videosni path yoliman');
-- Create the comments table
-- Create comment table
INSERT INTO comments (userId, videoId, comment) VALUES
  (1, 1, 'Great tutorial, thanks for sharing!'),
  (2, 1, 'This was really helpful, thank you!'),
  (3, 1, 'I had been struggling with this topic but your video made it clear.'),
  (4, 2, 'Interesting points, but I think there are some other strategies worth considering.'),
  (5, 2, 'Thanks for the tips, I will definitely try them out.'),
  (6, 3, 'I really enjoyed this video, it was very informative.'),
  (7, 3, 'Can you recommend any additional resources for learning more about this topic?'),
  (8, 4, 'I loved your approach to teaching Python, it made the language seem less intimidating.'),
  (9, 5, 'This was a great overview of the design principles, thank you!');