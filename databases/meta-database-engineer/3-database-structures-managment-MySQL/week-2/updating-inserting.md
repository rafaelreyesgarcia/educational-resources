# MySQL REPLACE

REPLACE inserts or updates data in a table by deleting or replacing existing records

```sql
INSERT INTO
VALUES

REPLACE INTO table_name (column1, column2, column3)
VALUES (column1_value, column2_value, column3_value);

-- or
REPLACE INTO table_name (column1, column2, column3)
SET column_name = new_value;


```

checks for primary key of existing records

adds new data if no matching key is found

deletes and replaces existing record if match is found

```sql
INSERT INTO EmployeeContactInfo(EmployeeID, ContactNumber, Email)
VALUES (1, 351220033, "email@address.com");

REPLACE INTO EmployeeContactInfo(EmployeeID, ContactNumber, Email)
VALUES (1, 39944005, "another@address.com");

REPLACE INTO EmployeeContactInfo SET EmployeeID = 1, ContactNumber = 351220033, Email = "email@address.com";
```

# REPLACE in depth

alternative to insert and update data in a database table

extension to the SQL standard

```sql
REPLACE INTO table_name (column1name, column2name, ...)
VALUES (value1, value2, ...);

REPLACE INTO table_name SET column1name = value, column2name = value, ... ;
```

the INSERT INTO statement checks if the unique key exists, if true the process is declined, if false, the value is inserted.

UPDATE statement checks if the unique key exists, if not, the process is declined, if true, then the update process is complete.

REPLACE INTO checks if the unique key exists, if not, the statement behaves like INSERT, if the key exists, REPLACE behaves like update.

# replace lab

```sql
CREATE DATABASE Lucky_Shrub;

USE Lucky_Shrub;

CREATE TABLE Orders (
  OrderID INT NOT NULL PRIMARY KEY,
  ClientID VARCHAR(10),
  ProductID VARCHAR(10),
  Quantity INT,
  Cost DECIMAL(6,2)
);

INSERT INTO Orders (
  OrderID, ClientID, ProductID, Quantity, Cost
) VALUES
  (1, "Cl1", "P1", 10, 500),
  (2, "Cl2", "P2", 5, 100),
  (3, "Cl3", "P3", 20, 800),
  (4, "Cl4", "P4", 15, 150),
  (5, "Cl3", "P3", 10, 450),
  (6, "Cl2", "P2", 5, 800),
  (7, "Cl1", "P4", 22, 1200),
  (8, "Cl1", "P1", 15, 150);

-- REPLACE statement that inserts two new orders with
REPLACE INTO Orders(OrderID, ClientID, ProductID, Quantity, Cost)
VALUES
  (9, "Cl1", "P1", 10, 5000),
  (10, "Cl2", "P2", 5, 100);
;

-- replace the cost of order 9 to 500
REPLACE INTO Orders SET OrderID = 9, ClientID = "Cl1", ProductID = "P1", Quantity = 10, Cost = 500;
```

REPLACE statement sets all missing columns to NULL values

no need to use WHERE clause with REPLACE

define all column values so they aren't set to NULL

# optional excercise

```sql
CREATE DATABASE IF NOT EXISTS little_lemon;

USE little_lemon;

CREATE TABLE Starters(
  StarterName VARCHAR(100) NOT NULL PRIMARY KEY,
  Cost Decimal(3,2),
  StaterType VARCHAR(100) DEFAULT 'Mediterranean');

-- using replace
REPLACE INTO Starters(StarterName, Cost, StarterType)
VALUES("Cheese bread", 9.50, "Indian");

REPLACE INTO Starters (StarterName, Cost, StarterType) VALUES ("Cheese bread", 9.75, "Indian");
```



