# CREATE AND USE DATABASE

CREATE DATABASE IF NOT EXISTS `home`;
USE `home`;


# CREATE TABLE

CREATE TABLE IF NOT EXISTS`bookmarks` (
  `id_bookmarks` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `urlString` text NOT NULL,
  PRIMARY KEY (`id_bookmarks`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

# INSERT
# INSERT INTO home.bookmarks (`name`, `urlString`) VALUES  ('Google', 'https://google.com');