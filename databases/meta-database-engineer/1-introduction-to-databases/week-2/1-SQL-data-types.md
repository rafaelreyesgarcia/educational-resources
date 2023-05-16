# numeric data types

data types

datatypes tell a DBMS how to interpret the value of a column

numeric data types let columns store data as numbers

**integer** represents whole number value

**decimal** represents a number with a fraction value

TINYINT represents a small integer numerical value in MySQL (max value is 255)

INT represents large number (4 billion max)

can accept negative or positive

# numbers lab

```sql
mysql
-- create a database
CREATE DATABASE cm_devices;

-- select the database
USE cm_devices;

-- create a table with 3 columns of types int, string max 50 characters, decimal

CREATE TABLE devices(deviceId int, deviceName varchar(50), price decimal);

SHOW tables;

-- display the structure of table
SHOW columns FROM devices;

-- create a table to store data about stock of devices
CREATE TABLE stock(deviceId int, quantity int, totalPrice decimal);
```

# string data types

used when storing data with mixed type of characters

alphabet, numerical and special characters

CHAR characters of fixed length

VARCHAR variable length

CHAR(50) the column only permits a string of 50 characters

VARCHAR is used when not sured how many characters a string will have

TINYTEXT less than 255 characters

TEXT less than 65,000 characters

MEDIUMTEXT less than 16.7 million characters

LARGETEXT 4GB of text data

# strings lab

```sql

-- create a table with 3 columns, username, full name and email

CREATE DATABASE cm_devices;

USE cm_devices;

CREATE TABLE customers(username CHAR(9), fullname VARCHAR(100), email VARCHAR(255));

SHOW tables;

SHOW columns FROM customers;

CREATE TABLE feedback(feedbackID CHAR(8), feedbackType VARCHAR(100), comment TEXT(500));
```

# default values

database constraints

limit the type of data that can be stored in a table

attemptingt o insert or upload invalid data

constraints can be at column or table level

a foreign key is used to prevent actions that could destroy table links

NOT NULL preserves empty value fields

DEFAULT assigns default values

NOT NULL SQL constraint ensures data fields are never left blank

```sql
CREATE TABLE Customer(
  customer_id int NOT NULL,
  customer_name varchar(255) NOT NULL,
);
```

DEFAULT sets a default value if none is defined

```sql
CREATE TABLE Player(
  name varchar(50) NOT NULL,
  city varchat(30) DEFAULT "Barcelona"
);
```

# default values labs

```sql
CREATE DATABASE cm_devices;

USE cm_devices;

CREATE TABLE address(
  id int NOT NULL,
  street varchar(255),
  postcode varchar(10),
  town varchar(30) DEFAULT "Harrow"
);

SHOW columns FROM address;

-- delete a table
DROP TABLE address;

CREATE TABLE address(
  id int NOT NULL,
  street VARCHAR(255),
  postcode VARCHAR(10) DEFAULT "HA97DE",
  town VARCHAR(30) DEFAULT "Harrow"
);
```

# choosing data types lab

```sql
CREATE DATABASE cm_devices;

USE cm_devices;

CREATE TABLE invoice(customerName VARCHAR(50), orderDate DATE, quantity INT, price DECIMAL);

SHOW tables;

SHOW columns FROM invoice;

CREATE TABLE contactDetails(
  accountNumber INT,
  phoneNumber INT,
  email VARCHAR
);
```

