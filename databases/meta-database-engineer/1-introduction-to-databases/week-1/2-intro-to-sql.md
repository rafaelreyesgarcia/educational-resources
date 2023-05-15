# what is structured query language?

CRUD operations (create, read, update, delete)

SQL is used to interact with structured data in relational database systems

MySQL, PostgreSQL, oracle, microsoft SQL server

**database management system** changes SQL instructions into a form understood by the database

SQL instructions are executed using DBMS

# SQL usage

CRUD operations are the most common operations

SQL subsets
- data definition language
- data manipulation language
- data query language
- data control language

DDL used to create storage objects in a database like tables

*create* used to create storage objects in a database

*alter* modify strucutre of a table object in a database

*drop* remove an object from a database

DML commands can manipulate data in a database (inserting, updating or deleting) most CRUD falls into this category.

*insert* adds data to a table

*update* edits data already inserted into a table

*delete* removes specific data

DQL allows to read or retrieve data

*select* retrieves data from one or multiple tables

DCL allows to control access to a database

*grant* and *revoke* are used to give users access privileges and to rever access privileges

# advantages of SQL

SQL is the interface between the users and a database

user-friendly (requires little coding to use)

standard language compatible with all available relational databases

portable language can be used on any hardware running any OS

creates databases, CRUD operations, retrieve and share data,

sql processes large amounts of data quickly and efficiently

# SQL syntax introduction

create a database and tables using DDL subset

utilize DML subset to populate and modify data

read and query data using DQL

```SQL
-- create a database
CREATE DATABASE database_name;
-- create a table
CREATE TABLE table_name;
-- insert data into a table
INSERT INTO table_name (column_one, column_two) VALUES (value1, value2);
-- update data in a table
UPDATE Student SET date_of_birth = '2000-10-12' WHERE ID = 02;
-- delete data in a table
DELETE FROM Student WHERE ID = 03;
-- query data within a table
SELECT first_name, last_name FROM Student WHERE ID = 01;
```

# common SQL commands

DDL data definition language subset provides commands for defining, deleting and modifying tables

```SQL
-- create databases or tables
CREATE TABLE table_name(column_name1 datatype(size))
-- delete a database or a table
DROP TABLE table_name;
-- change structure of tables in a database like the name, primary key or adding or deleting a column in a table
ALTER TABLE table_name ADD (column_name datatype(size));
ALTER TABLE table_name ADD primary key (column_name);
-- remove all records from a table, empties the table
TRUNCATE TABLE table_name;
-- add comments to explain SQL statements doube dash --
```

DML data manipulation language allows to query, delete and update data

```SQL
-- retrieves data from tables
SELECT * FROM table_name;
-- add records of data into an existing tables
INSERT INTO table_name (column1, column2, column3) VALUES (value1, value2, value3);
-- modify or update data within a table
UPDATE table_name SET column1=value1, column2=value2 WHERE condition;
-- delete data from a table
DELETE FROM table_name WHERE condition;
```

DCL data control language defines permissions of users of a database system

*GRANT* provides a user with privileges to allow access and manipulate the database

*REVOKE* removes permissions from any user

TCL transaction control language manages transactions in the database.

manage changes made to the data by utilizing DML, allows to group SQL statements into logical transactions

*COMMIT* saves all work done in a database

*ROLLBACK* restores a database to the last committed state.
