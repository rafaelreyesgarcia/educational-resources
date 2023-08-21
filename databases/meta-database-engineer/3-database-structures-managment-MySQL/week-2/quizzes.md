# REPLACE

1. Which of the following tasks can you complete with the use of a MySQL REPLACE statement? 

Insert data into a table.

Update data in a table.

2. True or False: The database rejects the following SQL statement when executed against the “Employee” table because of a conflict with one of the existing IDs.

REPLACE INTO Employees (ID, FullName) VALUES (1, “Dennis Erikson”);

false, Replace deletes the conflicting row that causes the duplicate key error from the table. It then inserts the new record of data into the table. 

3. You are using a REPLACE statement to insert a new record of data into the Employees table with the following syntax:

REPLACE INTO Employees SET ID = 2;

The table is updated with ID = 2 and the “Full name” value is set to NULL.

4. True or False: When using a REPLACE statement to insert data on a table with no matching key, the statement works like a normal INSERT statement. Otherwise, it deletes the existing record and replaces it with a new one.

true

# REPLACE

1. The REPLACE command in MySQL can be used in place of both the INSERT and UPDATE commands.

true

2. The REPLACE command functions in a similar manner to the INSERT command. The key difference is that it deletes the existing record of data and inserts the new one if it finds a duplicate key.

true

3. You can expect the following REPLACE statement to be declined when executed as there is a conflict with the existing primary key (ID = 7).

REPLACE INTO Orders (OrderID, ClientID, ProductID , Quantity, Cost) VALUES (7, "Cl1", "P1", 10, 600);

false, When executed, the REPLACE statement deletes the conflicting row that causes the duplicate key error from the table. It inserts the new record of data into the table instead of the deleted one.

4. You need to update the record of the Order with the ID of 8 in the following “Orders” table with a new client ID of CL3 instead of CL1. Select the correct REPLACE statement to complete this task.

REPLACE INTO Orders SET OrderID = 8, ClientID = "CL3", ProductID = "P1", Quantity = 15, Cost = 150; 

5. The REPLACE statement only works if you set values for all the table columns. 

false The Replace statement works even if you only include some of the values. The statement sets all the missing columns to NULL values. 

# constraints

1. Identify the main types of constraints in a MySQL database.

Key constraints

Referential integrity constraints

Referential integrity requires that a foreign key must have a matching unique key, or it must be null. This means that the reference between a table row and another table must be valid.

Domain constraints restricts the values of attributes in the table.

2. Identify the constraints that are commonly used in SQL.

UNIQUE

NOT NULL

PRIMARY KEY

3. The CHECK constraint ensures that the value in a column satisfies a specific condition.

true

4. True or False. Constraints can be specified only when the table is created with the CREATE TABLE statement.

false, CREATE TABLE and ALTER TABLE

5. This table has a NOT NULL constraint on the PhoneNumber. This means that every customer must have a phone number. It also has a UNIQUE key assigned to the PhoneNumber column, which means the phone number must be unique for each customer.

# constraints


1. The following syntax applies the foreign key constraint in the Bookings table to reference the CustomerID in the Customers table.

CREATE TABLE Bookings(
BookingID INT PRIMARY KEY, 
CustomerID INT NOT NULL, 
BookingDate DATE NOT NULL, 
FOREIGN KEY (CustomerID) REFERENCES Bookings (CustomerID)
);

false, The foreign key constraint should reference the Customers table as follows: REFERENCES Customers (CustomerID);

2. Identify which of the following statements about constraints are correct

Constraints can be deleted from a table.

Constraints can be changed and modified within a table.

Constraints can be declared when you create a table.

3. You can create multiple foreign key constraints in the same table in MySQL.

true

4. Which constraint type is used to limit the quantity of orders in the following SQL statement?

```sql
CREATE TABLE Orders ( 
OrderID INT PRIMARY KEY, 
ItemID INT NOT NULL, 
ClientID INT NOT NULL, 
Quantity INT NOT NULL CHECK (Quantity < 4), 
Cost DECIMAL(6,2) NOT NULL, 
FOREIGN KEY (ClientID) REFERENCES Clients (ClientID), 
FOREIGN KEY (ItemID) REFERENCES Items (ItemID) 
);
```

Domain constraint 

# ALTER TABLE / COPY TABLE

1. Which of the following actions can you perform with the ALTER TABLE statement? 

Modify constraints.

Add and drop columns.

Rename columns and tables.

2. What type of SQL statement can be used to change a table structure? 

ALTER TABLE statement

3. You need to create a new column within an existing table. You can complete this task by using the ALTER TABLE alongside which one of the following commands?

ADD

4. The following SQL syntax can be used to copy data from one table to another in the same database: 

CREATE TABLE newTable SELECT columns FROM existingTable;

TRUE

5. Which of the following actions must you perform to copy data from one table to another within a different database?

Add each table name to the related database name with a dot separator. 

