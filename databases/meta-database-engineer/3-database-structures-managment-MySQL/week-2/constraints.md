# constraints in MySQL

identify constraints

explain CASCADE

constraints ensure each value in a column cell is unique

*key constraints* apply rules to key types

*domain constraints* govern values that can be stored for a specific column (data types)

*referential integrity constraints* established rules for referential keys.

primary key constraint is used to define a value must always be unique and can't be null

PK can't accept null and must be unique

referencing table contains PK and referenced table is a FK

value of foreign key column in the referencing table must always exist in the referenced table

ON DELETE CASCADE automatically deletes the related rows of the data from the referenced table.

ON UPDATE CASCADE automatically updates the related rows in the referenced table

# constraints practice

```sql
CREATE TABLE Custoemrs(
  CustomerID INT NOT NULL PRIMARY KEY,
  FullName VARCHAR(100) NOT NULL,
  PhoneNumber INT NOT NULL UNIQUE
);

-- referential integrity

CREATE TABLE Bookings(
  BookingID INT NOT NULL PRIMARY KEY,
  TableName INT NOT NULL,
  NumberOfGuests INT NOT NULL CHECK(NumberOfGuests <= 8),
  CustomerID NOT NULL FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID) ON DELETE CASCADE ON UPDATE CASCADE
);
```

constraints maintain database integrity and consistency

# constraints theory

Types of constraints
There are three main types of constraints that can be applied in MySQL.

Key Constraints
There are different types of keys in a relational database. For example, each table must have a primary key that maintains table integrity. The primary key ensures no duplications of records in the same table. Also, it allows identifying each data record using the primary key value. Therefore, it must be unique in each row of the table, and it is not allowed to contain null values. 

For example, each citizen living in Denmark must have a unique personal number, which can be used to access different types of state services.

Domain Constraints
Domain constraints refer to special rules defined for the values that can be stored for a certain column. To apply this, you must specify what data values are allowed and which ones should be rejected. 

For example, you can define a valid range number for users to rate a streaming service that offers a wide variety of TV shows and movies. This range could be a number between 3 and 10, in which case the user will not be able to insert a value that is more than 10 and less than 3.

Referential Integrity Constraints 
In a relational database, tables are connected via a foreign key in one table linked to a primary key (or a unique key) in another table. 

This implies that the value of the foreign key column in the ‘referencing’ table must also exist in the referenced table. Otherwise, you will end up with a problem as the “connection” between the records of the tables will cease. 

Therefore, maintaining referential integrity requires that a foreign key value must have a matching primary key value to link the records of different related tables. 

# constraints lab

```sql
CREATE DATABASE Mangata_Gallo;

USE Mangata_Gallo;

CREATE TABLE Clients(
  ClientID INT PRIMARY KEY,
  FullName VARCHAR(100) NOT NULL,
  PhoneNumber INT NOT NULL UNIQUE
);

CREATE TABLE Items(
  ItemID INT PRIMARY KEY,
  ItemName VARCHAR(100) NOT NULL,
  Price DECIMAL(5, 2) NOT NULL
);

CREATE TABLE Orders(
  OrderID INT PRIMARY KEY,
  ClientID INT NOT NULL,
  ItemID INT NOT NULL,
  Quantity INT NOT NULL CHECK (Quantity < 4),
  Cost DECIMAL(6, 2) NOT NULL,
  FOREIGN KEY (ClientID) REFERENCES Clients(ClientID),
  FOREIGN KEY(ItemID) REFERENCES Items(ItemID)
);
```

# additional lab

```sql
CREATE DATABASE IF NOT EXISTS Mangata_Gallo;

USE Mangata_Gallo;

CREATE TABLE Staff(
  StaffID INT NOT NULL PRIMARY KEY,
  PhoneNumber INT NOT NULL UNIQUE,
  FullName VARCHAR(100) NOT NULL
);

CREATE TABLE ContractInfo(
  ContractID INT NOT NULL PRIMARY KEY
  StaffID INT NOT NULL,
  Salary DECIMAL (7, 2) NOT NULL,
  Location VARCHAR(50) NOT NULL DEFAULT "Texas",
  StaffType VARCHAR(20) NOT NULL CHECK(StaffType = "Junior" OR StaffType "Senior"),
  FOREIGN KEY (StaffID) REFERENCES Staff(StaffID)
);
```