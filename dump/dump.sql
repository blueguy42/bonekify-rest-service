SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

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

CREATE TABLE IF NOT EXISTS `Song` (
  `song_id` int NOT NULL AUTO_INCREMENT,
  `Judul` varchar(64) NOT NULL,
  `penyanyi_id` int DEFAULT NULL,
  `Audio_path` varchar(256) NOT NULL,
  PRIMARY KEY (`song_id`),
  FOREIGN KEY (`penyanyi_id`) REFERENCES `User`(`user_id`)
);

INSERT INTO `User` (`email`, `password`, `username`, `name`, `isAdmin`) VALUES
('admin@gmail.com', '$2b$10$pnqu3Rh/ozFTIebO3ze3XOs1uX849gHmnycdB36V7y.hGTcK7huKe', 'admin', 'Admin', 1),
('penyanyi@gmail.com', '$2b$10$RjAtP0QExrkp8/c2qtgbV.3Yz6a9yVzfbjXmi3uu8WdwExN/v4nXW', 'penyanyi', 'Penyanyi', 0),
('blackpink@gmail.com', '$2b$10$j2I/ZDqT42eKLjWZa9EGJ.H7aHxNenScH2kZtM1fIw9vjjxbI3dy2', 'blackpink', 'BLACKPINK', 0),
('katyperry@gmail.com', '$2b$10$hK2CEDkiLBdSpoS4eoOAh.FxsWKt6cMuHZPSlACN2VgDHUG.lph0G', 'katyperry', 'Katy Perry', 0),
('coldplay@gmail.com', '$2b$10$9udMfUEZf4nSiEhga3hRB.aWgGISFjvkVOAIdtffl.oYOFCSvhZ.6', 'coldplay', 'Coldplay', 0);

COMMIT;