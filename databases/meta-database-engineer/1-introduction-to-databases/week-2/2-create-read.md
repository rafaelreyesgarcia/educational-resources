# CREATE and DROP

```sql
-- create database
CREATE DATABASE database_name;

-- remove database
DROP DATABASE database_name;
```

max of 63 characters for database names

# CREATE TABLE

you need to have a database in order to create tables

Assign the relevant data type to each column.

Separate each column with a comma.

Place all columns within a pair of parentheses.

```sql
-- create a table
CREATE TABLE table_name(column1_name DATATYPE);

CREATE TABLE customers(custonerName VARCHAR(100), phoneNumber INT);
```

# ALTER TABLE

restructure a table modifying the columns and attributes of a table

```sql
ALTER TABLE table_name ADD(column_name DATATYPE);

ALTER TABLE students ADD(age INT, nationality VARCHAR(50), country VARCHAR(255));

ALTER TABLE students DROP COLUMN nationality;

ALTER TABLE students MODIFY country VARCHAR(100);
```

# INSERT statement

```sql
INSERT INTO table_name (column1_name, column2_name, column_name) VALUES (value1, value2, value3);

INSERT INTO players (ID, name, age, start_date) VALUES (1, "Rafael", 29, "2023-5-16");

INSERT INTO players (ID, name, age, start_date) VALUES
  (2, "Mark", 27, "2020-10-12"),
  (3, "Karl", 26, "2020-10-07");

-- return all columns within a table
SELECT * FROM players;
```

# creating tables overview

syntax is available in the data definition language subset

Always give a meaningful name to your table as well as the columns or fields of the table. 

The data types of columns or fields may vary from one database system to another. For example, NUMBER is supported in Oracle database for integer values whereas INT is supported in MySQL.  

It's good practice to refer to the list of data types supported by the database system that you are using, namely MySQL, SQL Server and Oracle. 

Remember to specify the appropriate length for data types where applicable.  

```sql
CREATE TABLE customers(CustomerId INT, FirstName VARCHAR(40), LastName VARCHAR(20), Company VARCHAR(80), Address VARCHAR(70), City VARCHAR(40), State VARCHAR(40), Country VARCHAR(40), PostalCode VARCHAR(10), Phone VARCHAR(24), Fax VARCHAR(24), Email VARCHAR(60), SupportRapid INT ); 
```

# create database, table and insert data

```sql
CREATE DATABASE bookshop;

USE bookshop;

CREATE TABLE customers(customerId int, customerName varchar(50), customerAddress varchar(255));

SHOW tables;

INSERT INTO customers (customerId, customerName, customerAddress) VALUES (1, "Jack", "115 Old street Belfast");

SELECT * FROM customers;

INSERT INTO customers(customerId, customerName, customerAddress) VALUES(2, "James", "24 Carlson Rd London");
```

# SELECT statement

```sql
-- select only one column
SELECT column FROM table_name;

SELECT playerName FROM players;

-- select multiple columns
SELECT name, level FROM players;

-- return all columns
SELECT ID, name, age, level FROM players;
-- or
SELECT * FROM players;
```

# INSERT INTO SELECT FROM statement

query data from a source table and populate a target table

```sql
INSERT INTO target_tbl (columnName)
SELECT column_name
FROM source_tbl;

INSERT INTO country (countryName)
SELECT countryName
FROM players;
```

# table creation lab

```sql
CREATE DATABASE football_club;

USE football_club;

CREATE TABLE players(playerID int, playerName varchar(50), age int);

SHOW tables;

CREATE TABLE games(gameID INT, gameDate DATE, score INT);
```

