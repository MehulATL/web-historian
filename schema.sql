create database if not exists webhistory;

USE webhistory;

create table sites (
  id INT NOT NULL AUTO_INCREMENT,
  url VARCHAR(100) NOT NULL,
  updatedAt TIMESTAMP,
  html LONGTEXT NULL,
  PRIMARY KEY ( id )
);