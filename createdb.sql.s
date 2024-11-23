--use master database
USE master; 
GO 
-- create TutorialDB database it not exist
IF NOT EXISTS ( SELECT name FROM sys.databases WHERE name = N'TutorialDB' ) CREATE DATABASE [TutorialDB]; 
Go