
CREATE Table users
(
    id VARCHAR (36) DEFAULT uuid_generate_v4() PRIMARY KEY,
    username VARCHAR(25) NOT NULL,
    login VARCHAR(128) NOT NULL UNIQUE,
    password VARCHAR(64) not NULL REFERENCES
);


INSERT INTO users
    (username, login, password)
VALUES
    ('Ali', 'ali@erjtn', 'ladkjgladjfgkjdfkgjdajg326dg'),
    ('sdffkn', 'ali@e156', 'ladkjgladjfgkjdfkgjdajg326dg');


create table videos
(
    video_id serial primary key,
    user_id varchar(36) REFERENCES users(id),
    title varchar(128) not null,
    path varchar(128) not null,
    add_date date default current_timestamp
);



SELECT videos.videoId, videos.title, categories.catName
FROM videos
    JOIN categories ON videos.categoryId = categories.id
WHERE categories.catName = 'javascript';



SELECT v.videoId, v.userId, v.title, v.date, v.categoryId, s.sapName
FROM videos v
    JOIN sap_category s ON v.sapId = s.sapId
WHERE v.categoryId = 5;



    SELECT *
    FROM videos v
        JOIN sap_category s  ON s.sapId = v.sapId AND v.sapname = 'logo' ;


SELECT *
FROM sap_category
INNER JOIN videos ON sap_category.sapId = videos.sapId
WHERE sap_category.sapName = 'lwogo'
AND videos.videoId = 1;
