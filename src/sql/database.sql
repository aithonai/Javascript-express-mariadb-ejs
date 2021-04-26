CREATE DATABASE news_portal_nodejs;

USE news_portal_nodejs;

CREATE TABLE news(
    id_news INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    tittle VARCHAR(100),
    news TEXT,
    data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE news;

INSERT INTO news(tittle, news) values('My tittle', "contents of the news");

SELECT * FROM news;