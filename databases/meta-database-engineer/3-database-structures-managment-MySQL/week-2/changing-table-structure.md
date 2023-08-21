# MySQL ALTER TABLE

alter table makes changes to a table in a database by altering columns or constraints

MODIFY make changes to specific columns in a table

ADD add a column to a table

DROP a column from a table

```sql
ALTER TABLE table_name
MODIFY column1 VARCHAR(10) NOT NULL
ADD COLUMN Column2
DROP COLUMN Column1

ALTER TABLE Machinery
MODIFY EmployeeID VARCHAR(10) NOT NULL PRIMARY KEY,
MODIFY FullName VARCHAR(100) NOT NULL,
MODIFY County VARCHAR(100) NOT NULL,
MODIFY PhoneNumber INT NOT NULL UNIQUE;

show columns from Machinery;

ALTER TABLE Machinery ADD COLUMN Age INT CHECK(Age >= 18);
```

# COPY TABLE

identify table and database

determine columns to copy

build a new table 

structure the table with select


```sql
CREATE TABLE new_table
SELECT columns
FROM existing_table;

CREATE TABLE databasex.newtable
SELECT columns
FROM databasey.existing_table;

SELECT * FROM Clients;

-- copy all the table columns
CREATE TABLE ClientTest 
SELECT *
FROM Clients;

CREATE TABLE ClientTest2
SELECT FullName, ContactNumber
FROM Clients
WHERE Location = "orange county";

-- exact copy of existent structure
CREATE TABLE ClientsTest3
LIKE Clients;

CREATE TABLE testDB.ClientsTest
SELECT *
FROM Lucky_Shrub.Clients;
```

# changing table structure lab

```sql
CREATE DATABASE Mangata_Gallo;

USE Mangata_Gallo;

CREATE TABLE Staff(
  StaffID INT,
  FullName VARCHAR(100)
  PhoneNumber VARCHAR(100)
);

ALTER TABLE Staff
MODIFY StaffID INT NOT NULL PRIMARY KEY,
MODIFY FullName VARCHAR(100) NOT NULL,
MODIFY PhoneNumber INT NOT NULL;

ALTER TABLE Staff
ADD COLUMN Role VARCHAR(50) NOT NULL;

ALTER TABLE Staff
DROP COLUMN PhoneNumber;
```

# optional lab

```sql
CREATE DATABASE IF NOT EXISTS little_lemon;

USE little_lemon;

CREATE TABLE FoodOrders (
  OrderID INT,
  Quantity INT,
  Cost Decimal(4,2)
);

SHOW COLUMNS FROM FoodOrders;

ALTER TABLE FoodOrders MODIFY OrderID INT PRIMARY KEY;

ALTER TABLE FoodOrders, MODIFY Quantity INT NOT NULL, MODIFY Cost decimal(4,2) NOT NULL;

ALTER TABLE FoodOrders ADD COLUMN OrderDate DATE NOT NULL, ADD COLUMN CustomerID INT NOT NULL, ADD FOREIGN KEY(CustomerID) REFERENCES Customers(CustomerID);

ALTER TABLE FoodOrders DROP COLUMN OrderDate;

ALTER TABLE OrderStatus CHANGE Order_status DeliveryStatus VARCHAR(15);

ALTER TABLE OrderStatus RENAME OrderDeliveryStatus;
```

# references

```sql
ALTER TABLE table_name ADD column_name datatype;
ALTER TABLE Employees ADD Email VARCHAR(255);

ALTER TABLE table_name MODIFY COLUMN column_name datatype;
ALTER TABLE Employees MODIFY COLUMN Email VARCHAR(50);

ALTER TABLE table_name ADD FOREIGN KEY (primary_key_column_name) REFERENCES link_table_name(reference_column_name);
ALTER TABLE Orders ADD FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID);

ALTER TABLE table_name DROP COLUMN column_name;
ALTER TABLE Employees DROP COLUMN Email;

ALTER TABLE table_name CHANGE from_column to_column datatype;
ALTER TABLE Employees CHANGE Email BusinessEmail VARCHAR(50);

ALTER TABLE table_name RENAME new_table_name;
ALTER TABLE OrderStatus RENAME OrderDeliveryStatus;
```