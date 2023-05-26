# filtering data AND, OR, NOT logical operators

WHERE clause

used within a SQL SELECT statement to determine how data is filtered in a table

```sql
SELECT *
FROM table_name
WHERE condition1 AND condition2 OR condition3;

SELECT *
FROM table_name
WHERE NOT condition;
```

multiple conditions can be chained using logical operators

AND

OR

NOT

```sql
SELECT *
FROM customer_purchases
WHERE purchases > 2000 AND location = 'us';

SELECT *
FROM customer_purchases
WHERE location = 'gila county' OR location = 'orange county';

SELECT *
FROM customer_purchases
WHERE NOT (location = 'gila county' OR location = 'orange county');
```

# filtering data using IN, BETWEEN, LIKE logical operators

IN specify multiple values in the WHERE clause

BETWEEN selects values within a given range

LIKE used to filter data based on pattern matching

```sql
-- in syntax
SELECT *
FROM table_name
WHERE condition
IN (value1, value2);

-- between syntax
SELECT *
FROM table_name
WHERE condition
-- values can be numbers, text and dates
BETWEEN value1 AND value2;

SELECT *
FROM table_name
WHERE column_name
LIKE pattern;
-- starts with g, at least 3 characters in length
LIKE 'g _ _ %';
```

% represents one or multiple characters

_ one single character

```sql
SELECT *
FROM customer_purchases
WHERE location
IN ('gila county', 'orange county');

SELECT *
FROM customer_purchases
WHERE purchases
BETWEEN 1000 AND 2000;

SELECT *
FROM customer_purchases
WHERE location
LIKE 'g__%';
```

same results using OR and IN

# filtering data

```sql
CREATE DATABASE IF NOT EXISTS Lucky_Shrub;

USE Lucky_Shrub;

CREATE TABLE Orders (
  OrderID INT NOT NULL PRIMARY KEY,
  ClientID VARCHAR(10),
  ProductID VARCHAR(10),
  Quantity   INT,
  Cost DECIMAL(6,2)
);

INSERT INTO Orders (OrderID, ClientID, ProductID , Quantity, Cost) VALUES
  (1, "Cl1", "P1", 10, 500),
  (2, "Cl2", "P2", 5, 100),
  (3, "Cl3", "P3", 20, 800),
  (4, "Cl4", "P4", 15, 150),
  (5, "Cl3", "P3", 10, 450),
  (6, "Cl2", "P2", 5, 800),
  (7, "Cl1", "P4", 22, 1200),
  (8, "Cl3", "P1", 15, 150),
  (9, "Cl1", "P1", 10, 500),
  (10, "Cl2", "P2", 5, 100);

-- print records of orders where cost is $250 or less
SELECT *
FROM Orders
WHERE Cost <= 250;

-- print records of orders where cost is between $50 and $750
SELECT *
FROM Orders
WHERE Cost
BETWEEN 50 AND 750;
-- or
WHERE Cost > 50 AND Cost < 750;

-- print records of orders placed by client CL3 where cost is more than $100
SELECT *
FROM Orders
WHERE ClientID = 'Cl3' AND Cost > 100;

-- print record of orders with product id p1 or p2 and order quantity is more than 2
SELECT *
FROM Orders
WHERE ProductId
IN ('P1', 'P2') AND Quantity > 2;
-- or
WHERE ProductId = 'P1' OR ProductId = 'P2' AND Quantity > 2;
```

# optional filtering lab

```sql
CREATE DATABASE luckyshrub_db; 

USE luckyshrub_db;

CREATE TABLE employees (
  EmployeeID int NOT NULL,
  EmployeeName varchar(150) DEFAULT NULL,
  Department varchar(150) DEFAULT NULL,
  ContactNo varchar(12) DEFAULT NULL,
  Email varchar(100) DEFAULT NULL,
  AnnualSalary int DEFAULT NULL,
  PRIMARY KEY (EmployeeID)
);

INSERT INTO employees VALUES 
(1,'Seamus Hogan', 'Recruitment', '351478025', 'Seamus.h@luckyshrub.com',50000), 
(2,'Thomas Eriksson', 'Legal', '351475058', 'Thomas.e@ luckyshrub.com',75000), 
(3,'Simon Tolo', 'Marketing', '351930582','Simon.t@ luckyshrub.com',40000), 
(4,'Francesca Soffia', 'Finance', '351258569','Francesca.s@ luckyshrub.com',45000), 
(5,'Emily Sierra', 'Customer Service', '351083098','Emily.s@ luckyshrub.com',35000), 
(6,'Maria Carter', 'Human Resources', '351022508','Maria.c@ luckyshrub.com',55000),
(7,'Rick Griffin', 'Marketing', '351478458','Rick.G@luckyshrub.com',50000);

-- AND to find employees earning anual salary of 50,000 or more in the marketing department
SELECT *
FROM employees
WHERE AnnualSalary >= 50000 AND Department = 'Marketing';
-- 50,000 not allowed

-- NOT to find employees not earning over 50,000 across all departments
SELECT *
FROM employees
WHERE NOT AnnualSalary >= 50000;

-- IN to find marketing, finance and legal employees whose annual salary is below 50,000
SELECT *
FROM employees
WHERE Department
IN ('Marketing', 'Finance', 'Legal') AND AnnualSalary < 50000;
-- or
WHERE AnnualSalary < 50000 AND Department IN('Marketing', 'Finance', 'Legal');

-- BETWEEN find employees earning salaries between 10,000 and 50,000
SELECT *
FROM employees
WHERE AnnualSalary
BETWEEN 10000 and 50000;

-- LIKE to find employees whose names start with S and are at least 4 characters in length
SELECT *
FROM employees
WHERE EmployeeName
LIKE 'S___%';
```

# reference for pattern matching

```sql
-- Finds EmployeeName values that start with "a".
WHERE EmployeeName LIKE 'a%'

-- Finds EmployeeName values that end with "i".
WHERE EmployeeNameLIKE '%i'

-- Finds EmployeeName values that have "li" in any position.
WHERE EmployeeName LIKE '%li%'

-- Finds EmployeeName values that have "a" in the second position.
WHERE EmployeeName LIKE '_a%'

-- Finds EmployeeName values that start with "a" and are at least 4 characters in length.
WHERE EmployeeName LIKE 'a___%'

-- Finds EmployeeName values that start with "a" and end with "i".
WHERE EmployeeName LIKE 'a%i'
```