SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;

DROP DATABASE IF EXISTS rest_database;
CREATE DATABASE IF NOT EXISTS rest_database;
USE rest_database;

CREATE TABLE IF NOT EXISTS `User` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `username` varchar(256) NOT NULL,
  `name` varchar(256) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE (`email`),
  UNIQUE (`username`)
);

INSERT INTO `User` (`email`, `password`, `username`, `name`, `isAdmin`) VALUES
('admin@gmail.com', '$2b$10$pnqu3Rh/ozFTIebO3ze3XOs1uX849gHmnycdB36V7y.hGTcK7huKe', 'admin', 'Admin', 1),
('penyanyi@gmail.com', '$2b$10$RjAtP0QExrkp8/c2qtgbV.3Yz6a9yVzfbjXmi3uu8WdwExN/v4nXW', 'penyanyi', 'Penyanyi', 0),
('blackpink@gmail.com', '$2b$10$j2I/ZDqT42eKLjWZa9EGJ.H7aHxNenScH2kZtM1fIw9vjjxbI3dy2', 'blackpink', 'BLACKPINK', 0),
('katyperry@gmail.com', '$2b$10$hK2CEDkiLBdSpoS4eoOAh.FxsWKt6cMuHZPSlACN2VgDHUG.lph0G', 'katyperry', 'Katy Perry', 0),
('coldplay@gmail.com', '$2b$10$9udMfUEZf4nSiEhga3hRB.aWgGISFjvkVOAIdtffl.oYOFCSvhZ.6', 'coldplay', 'Coldplay', 0);

CREATE TABLE IF NOT EXISTS `Song` (
  `song_id` int NOT NULL AUTO_INCREMENT,
  `Judul` varchar(64) NOT NULL,
  `penyanyi_id` int DEFAULT NULL,
  `Audio_path` varchar(256) NOT NULL,
  PRIMARY KEY (`song_id`),
  FOREIGN KEY (`penyanyi_id`) REFERENCES `User`(`user_id`)
);

INSERT INTO `Song` (`Judul`, `penyanyi_id`, `Audio_path`) VALUES
('Lagu 1', 2, "lagu1.mp3"),
('Lagu 2', 2, "lagu2.mp3"),
('Lagu 3', 2, "lagu3.mp3"),
('Lagu 4', 2, "lagu4.mp3"),
('Lagu 5', 3, "lagu5.mp3"),
('Lagu 6', 3, "lagu6.mp3"),
('Lagu 7', 3, "lagu7.mp3"),
('Lagu 8', 3, "lagu8.mp3"),
('Lagu 9', 4, "lagu9.mp3"),
('Lagu 10', 4, "lagu10.mp3"),
('Lagu 11', 5, "lagu11.mp3"),
('Lagu 12', 5, "lagu12.mp3");

COMMIT;