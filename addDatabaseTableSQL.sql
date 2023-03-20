INSERT INTO users
    (userId,username, login, password)
VALUES
    ('user1', 'username men', 'ali1', 'password1'),
    ('user2', 'username men', 'ali22', 'password2'),
    ('user3', 'username men', 'ali 22', 'password3'),
    ('user4', 'username men', 'esha', 'password4'),
    ('user5', 'username men', 'taesh', 'password5');

-- cate
INSERT INTO categories(catName)VALUES
    ('dasturlash'),
    ('marketing'),
    ('smm');

-- sap cate

INSERT INTO sap_category
    (sapName, catRefid)
VALUES
    ('python', 1),
    ('javascript', 1),
    ('go', 1),
    ('logo', 2),
    ('interyer', 2),
    ('grafika', 2),
    ('smm', 3),
    ('brand', 3),
    ('blog', 3),
    ('grafika', 4),
    ('smm', 4),
    ('brand', 5),
    ('blog', 5);


INSERT INTO videos
    (userId, title, categoryId, sapId)
VALUES
    ('user1', 'mening titlem', 1, 4),
    ('user2', 'mening titlem', 2, 3),
    ('user3', 'mening titlem', 5, 2),
    ('user4', 'mening titlem', 4, 1),
    ('user5', 'mening titlem', 3, 4);

INSERT INTO comments
    (userId, videoId, comment)
VALUES
    ('user1', 1, 'bu video zor ekan'),
    ('user2', 1, 'bu video zor ekan'),
    ('user3', 3, 'bu video zor ekan'),
    ('user4', 4, 'bu video zor ekan'),
    ('user5', 5, 'bu video zor ekan');


CREATE TABLE users
(
    userId VARCHAR(100) PRIMARY KEY,
    username VARCHAR(100),
    login VARCHAR(100),
    password VARCHAR(100)
);

CREATE TABLE categories
(
    id serial PRIMARY KEY,
    catName VARCHAR(100)
);

CREATE TABLE sap_category
(
    sapId serial PRIMARY KEY,
    sapName VARCHAR(100),
    catRefid INT,
    FOREIGN KEY (catRefid) REFERENCES categories(id)
);

CREATE TABLE videos
(
    videoId serial PRIMARY KEY,
    userId VARCHAR(100),
    title VARCHAR(100),
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    categoryId INT,
    sapId INT,
    FOREIGN KEY (categoryId) REFERENCES categories(id),
    FOREIGN KEY (sapId) REFERENCES sap_category(sapId),
    FOREIGN KEY (userId) REFERENCES users(userId)
);

CREATE TABLE comments
(
    commentId serial PRIMARY KEY,
    userId VARCHAR(100),
    videoId INT,
    comment TEXT,
    FOREIGN KEY (userId) REFERENCES users(userId),
    FOREIGN KEY (videoId) REFERENCES videos(videoId)
);



SELECT v.videoId, v.userId, v.title, v.date, v.categoryId, s.sapName
FROM videos v
    JOIN sap_category s ON v.sapId = s.sapId
WHERE v.videoId = 5;
