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
('rizkysaulafan@gmail.com', '$2y$10$luYHB8NjJfY6d17i8to/9O5mObiuOjbY8LeqvMYlLvKezh43igcGS', 'rizkysaulafan', 'Rizky Alfani Sayers', 1),
('randomuser@gmail.com', '$2y$10$jXKli50oWBGO/6zQIMMnv.wlQltLb6dgIP4oIPkuADkDHyG4NCCTK', 'anonimus', 'Anonimus', 0);

COMMIT;