# MySQL aliases

aliases provide temporary names within the database for ease of use

shorten the names of tables and columns

```sql
-- rename the table or column
SELECT column_name AS column_alias, column2
FROM table_name;

SELECT ClientOrderInformation AS Orders

-- as a function can combine column outputs
SELECT CONCAT(column1, " ", column2) AS 'new_column_name'

SELECT CONCAT (first_name, " ", last_name) AS 'client_names'
FROM client_details;

-- query multiple tables and creates names for each
SELECT x.column1, x.column2, y.column1, y.column2
FROM table_1 AS x, table_2 AS y;
WHERE x.column2 < 12 AND y.column2 < 5;

```

little lemon example

```sql
SELECT OrderID, Date_food_order_placed_with_supplier AS "Order Placed Date", Date_food_order_received_from_supplier AS " Order Received Date", Order_status
FROM Food_Orders_Delivery_Status;

SELECT CONCAT(OrderId, " ", Order_status) AS "Order Status"
FROM Food_Orders_Delivery_Status;

SELECT s.StarterName, s.Cost, c.CourseName, c.Cost from Courses AS c, Starters AS s
WHERE c.Cost < 12 AND s.Cost < 5;
```

# JOIN tables

a join links records of data between one or multiple tables based on a common column between them

4 types of joins
- INNER
- LEFT
- RIGHT
- SELF

customers and bookings tables

both tables share a common column: CustomerID

```sql
-- INNER
SELECT Customers.FullName, Bookings.BookingID
FROM Customers INNER JOIN Bookings
ON Customers.CustomerID = Bookings.CustomerID;

-- LEFT
-- returns all queried records from left table regardless of whether there's a match in the right table
-- no matching records return null values
SELECT Customers.FullName, Bookings.BookingID
FROM Customers LEFT JOIN Bookings
ON Customers.CustomerID =  Bookings.CustomerID;

-- RIGHT
-- returns common records plus all queried from the right table regardless if there's a match in the left or not
SELECT Customers.FullName, Bookings.BookingID 
FROM Customers RIGHT JOIN Bookings 
ON Customers.CustomerID = Bookings.CustomerID;

-- SELF JOIN
-- joins a table with itself 
```

# JOINS

JOINS query data based on a common column between two or more tables

common columns can be used to combine tables and extract data

Inner extracts or selects records with matching values in both tables

Left extracts all records from left table and matching records from right table

right extracts all records from right table and matching records from left table

slef join joins a table with itself to retrieve information in the same table

self join treats 1 table as 2, to join it in order to extract specific information

```sql
SELECT table1_name.column_name
FROM table1_name
INNER JOIN table2_name
-- column both tables share
ON table1.column_name = table2.column_name;

SELECT
table1alias.column1name AS "column 1 name",
table1alias.column2name AS "column 2 name",
table2alias.column1name AS "column 1 name",
FROM table1name AS table1alias
LEFT JOIN table2name AS table2alias
ON table1alias.column1name = table2alias.columnname;
```

# inner join

left table Clients columns
- clientID
- fullName
- Contact Number
- Address

Right Table Orders
- orderid
- clientid
- productid
- quantity
- cost

```sql
SELECT Clients.FullName FROM Clients
INNER JOIN Orders
ON Clients.ClientID = Orders.ClientID;

-- aliases are used to create new names in the joined table
SELECT Clients.ClientID, Clients.FullName AS "full name", Clients.ContactNumber AS "Phone Number", Orders.ProductID AS "Product Code", Orders.Quantity AS "Items Quantity", Orders.Cost FROM Clients
INNER JOIN Orders
ON Clients.ClientID = Orders.ClientID;
```

# left and right join

```sql
-- returns NULL to some clientIDs as not all clients have placed orders
SELECT c.ClientID as "Client ID", c.FullName AS "Full name", o.OrderID AS "Order ID", o.Quantity, o.Cost
FROM Clients AS c
LEFT JOIN Orders AS o
ON c.ClientID = o.ClientID;

-- returns all clients that have placed orders
SELECT c.ClientID as "Client ID", c.FullName AS "Full name", o.OrderID AS "Order ID", o.Quantity, o.Cost
FROM Clients AS c
RIGHT JOIN Orders AS o
ON c.ClientID = o.ClientID;
```

# self-join

Employees table
- employeeid
- fullname
- jobtitle
- county
- linemanagerID

compares rows in the same table

```sql
SELECT e1.FullName AS "Line Manager", e2.FullName AS "Employee" FROM employees AS e1
INNER JOIN employees AS e2
ON e1.EmployeeID = e2.LineManagerID
```

# MySQL UNION operator

combines results sets from multiple statements in the same query

```sql
SELECT column1, column2
FROM table1
UNION
SELECT column1, column2
FROM table2;
```

same number of columns present in each SELECT statement

similar data types in related columns

all related columns must have same order

UNION ALL ensures all values remain even duplicated ones

```sql
SELECT fullname, location
FROM currentClients
UNION
SELECT fullname, location
FROM legacyClients;

-- to retrieve duplicates
UNION ALL
```

# JOINS lab

```sql
CREATE DATABASE little_lemon; 

USE little_lemon;

CREATE TABLE Customers(
  CustomerID INT NOT NULL PRIMARY KEY,
  FullName VARCHAR(100) NOT NULL,
  PhoneNumber INT NOT NULL UNIQUE
);

INSERT INTO Customers(CustomerID, FullName, PhoneNumber) VALUES (
  1, "Vanessa McCarthy", 0757536378),
  (2, "Marcos Romero", 0757536379),
  (3, "Hiroki Yamane", 0757536376),
  (4, "Anna Iversen", 0757536375),
  (5, "Diana Pinto", 0757536374);

CREATE TABLE Bookings (
  BookingID INT NOT NULL PRIMARY KEY,
  BookingDate DATE NOT NULL,
  TableNumber INT NOT NULL,
  NumberOfGuests INT NOT NULL CHECK (NumberOfGuests <= 8), CustomerID INT NOT NULL,
  FOREIGN KEY (CustomerID) REFERENCES Customers (CustomerID) ON DELETE CASCADE ON UPDATE CASCADE);

INSERT INTO Bookings (BookingID, BookingDate, TableNumber, NumberOfGuests, CustomerID) VALUES (
  10, '2021-11-11', 7, 5, 1),
  (11, '2021-11-10', 5, 2, 2),
  (12, '2021-11-10', 3, 2, 4);

-- inner join combine full name and phone number with related booking date and number of guests

SELECT Customers.FullName, Customers.PhoneNumber, Bookings.BookingDate, Bookings.NumberOfGuests
FROM Customers
INNER JOIN Bookings
ON Customers.CustomerID = Bookings.CustomerID;

-- all existing customers with booking, include customers who haven't made any booking (LEFT JOIN), customer id and booking id
SELECT c.CustomerID, b.BookingID
FROM Customers AS c
LEFT JOIN Bookings AS b
ON c.CustomerID = b.CustomerID;
```

