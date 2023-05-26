# MySQL GROUP BY

Groups rows in a table based on given columns, into summary rows or subgroups

```sql
SELECT column1_name, column2_name
FROM table_name
WHERE filter_condition
GROUP BY column1_name, column2_name;

SELECT column1, column2, column3, MAX(column1)
FROM table_name
GROUP BY column1, column2, column3;

SELECT Department, SUM(orderTotal)
FROM orders
GROUP BY Department;
```

aggregate functions

SUM()

AVERAGE()

MAX()

MIN()

COUNT()

syntax for group by

An aggregate function must be followed by name of the column to be queried in parentheses.

Ensure that the GROUP BY columns are also present in the SELECT command.

Begin the statement with a SELECT clause.

```sql
SELECT Department FROM orders GROUP BY Department;

SELECT Department, COUNT(Department)
FROM orders
GROUP BY Department;

SELECT Department, SUM(orderTotal) FROM orders GROUP BY Department;

SELECT Department, MIN(orderQty) FROM orders GROUP BY Department;
```

# MySQL HAVING

```sql
SELECT column_name
FROM table_name
WHERE filter_condition
GROUP BY group_by_column_or_expression
HAVING group_filter;

SELECT Department, SUM(orderTotal)
FROM orders
GROUP BY Department
HAVING SUM(orderTotal) > 2000;
```

the HAVING clause is used to specify a filter condition for the group data generated by the GROUP BY clause.

```sql
SELECT Department, SUM(orderTotal) FROM orders GROUP BY Department;

SELECT Department, SUM(orderTotal) AS total FROM orders GROUP BY Department HAVING total > 2275;
```

# grouping data lab

```sql
CREATE DATABASE luckyshrub_db;

USE luckyshrub_db;

CREATE TABLE Orders(OrderID INT, Department VARCHAR(100), OrderDate DATE, OrderQty INT, OrderTotal INT, PRIMARY KEY(OrderID));

INSERT INTO Orders VALUES(1,'Lawn Care','2022-05-05',12,500),(2,'Decking','2022-05-22',150,1450),(3,'Compost and Stones','2022-05-27',20,780),(4,'Trees and Shrubs','2022-06-01',15,400),(5,'Garden Decor','2022-06-10',2,1250),(6,'Lawn Care','2022-06-10',12,500),(7,'Decking','2022-06-25',150,1450),(8,'Compost and Stones','2022-05-29',20,780),(9,'Trees and Shrubs','2022-06-10',15,400),(10,'Garden Decor','2022-06-10',2,1250),(11,'Lawn Care','2022-06-25',10,400), 
(12,'Decking','2022-06-25',100,1400),(13,'Compost and Stones','2022-05-30',15,700),(14,'Trees and Shrubs','2022-06-15',10,300),(15,'Garden Decor','2022-06-11',2,1250),(16,'Lawn Care','2022-06-10',12,500),(17,'Decking','2022-06-25',150,1450),(18,'Trees and Shrubs','2022-06-10',15,400),(19,'Lawn Care','2022-06-10',12,500),(20,'Decking','2022-06-25',150,1450),(21,'Decking','2022-06-25',150,1450);

-- group all records that have same order date
SELECT OrderDate
FROM Orders
GROUP BY OrderDate;

-- retrieve the number of orders placed on the same day
SELECT OrderDate, COUNT(OrderID)
FROM Orders
GROUP BY OrderDate;

-- retrieve total order quantities placed by each department
SELECT Department, SUM(OrderQty)
FROM Orders
GROUP BY Department

-- retrieve number of orders placed on the same day between 1st june 2022 and June 30th 2022
SELECT OrderDate, COUNT(OrderID)
FROM Orders
GROUP BY OrderDate
HAVING OrderDate BETWEEN '2022-06-01' AND '2022-06-30';
```

# optional lab

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

CREATE TABLE orders (
  OrderID int NOT NULL,
  Department varchar(100) DEFAULT NULL,
  OrderDate date DEFAULT NULL,
  OrderQty int DEFAULT NULL,
  OrderTotal int DEFAULT NULL,
  PRIMARY KEY (OrderID)
);

CREATE TABLE employee_orders (
 OrderID int NOT NULL,
 EmployeeID int NOT NULL,
 Status VARCHAR(150),
 HandlingCost int DEFAULT NULL,
 PRIMARY KEY (EmployeeID,OrderID),
 FOREIGN KEY (EmployeeID) REFERENCES employees(EmployeeID),
 FOREIGN KEY (OrderID) REFERENCES orders(OrderID)
);

INSERT INTO employees VALUES 
(1,'Seamus Hogan', 'Recruitment', '351478025', 'Seamus.h@luckyshrub.com',50000), 
(2,'Thomas Eriksson', 'Legal', '351475058', 'Thomas.e@luckyshrub.com',75000), 
(3,'Simon Tolo', 'Marketing', '351930582','Simon.t@luckyshrub.com',40000), 
(4,'Francesca Soffia', 'Finance', '351258569','Francesca.s@luckyshrub.com',45000), 
(5,'Emily Sierra', 'Customer Service', '351083098','Emily.s@luckyshrub.com',35000), 
(6,'Maria Carter', 'Human Resources', '351022508','Maria.c@luckyshrub.com',55000),
(7,'Rick Griffin', 'Marketing', '351478458','Rick.G@luckyshrub.com',50000);

INSERT INTO orders VALUES(1,'Lawn Care','2022-05-05',12,500),
(2,'Decking','2022-05-22',150,1450),
(3,'Compost and Stones','2022-05-27',20,780),
(4,'Trees and Shrubs','2022-06-01',15,400),
(5,'Garden Decor','2022-06-10',2,1250),
(6,'Lawn Care','2022-06-10',12,500),
(7,'Decking','2022-06-25',150,1450),
(8,'Compost and Stones','2022-05-29',20,780),
(9,'Trees and Shrubs','2022-06-10',15,400),
(10,'Garden Decor','2022-06-10',2,1250),
(11,'Lawn Care','2022-06-25',10,400), 
(12,'Decking','2022-06-25',100,1400),
(13,'Compost and Stones','2022-05-30',15,700), 
(14,'Trees and Shrubs','2022-06-15',10,300), 
(15,'Garden Decor','2022-06-11',2,1250),
(16,'Lawn Care','2022-06-10',12,500), 
(17,'Decking','2022-06-25',150,1450), 
(18,'Trees and Shrubs','2022-06-10',15,400), 
(19,'Lawn Care','2022-06-10',12,500), 
(20,'Decking','2022-06-25',150,1450), 
(21,'Decking','2022-06-25',150,1450); 

INSERT INTO employee_orders 
VALUES(1,3,"In Progress",200), 
(1,5,"Not Recieved",300), 
(1,4,"Not Recieved",250), 
(2,3,"Completed",200), 
(2,5,"Completed",300), 
(2,4,"In Progress",250), 
(3,3,"In Progress",200), 
(3,5,"Not Recieved",300), 
(3,4,"Not Recieved",250), 
(4,3,"Completed",200), 
(4,5,"In Progress",300), 
(4,4,"In Progress",250), 
(5,3,"Completed",200), 
(5,5,"In Progress",300), 
(5,4,"Not Recieved",250), 
(11,3,"Completed",200), 
(11,5,"Completed",300), 
(11,4,"Not Recieved",250), 
(14,3,"Completed",200), 
(14,5,"Not Recieved",300), 
(14,4,"Not Recieved",250); 

-- use ANY operator to identify all employees with order status completed
SELECT EmployeeId, EmployeeName  
FROM employees  
WHERE EmployeeID = ANY (SELECT EmployeeID FROM employee_orders WHERE Status='Completed'); 

-- use ALL operator to identify the IDs of employees earning a handling cost of more than 20% of the order value

SELECT EmployeeID,HandlingCost 
FROM employee_orders  
WHERE HandlingCost > ALL(SELECT ROUND(OrderTotal/100 * 20) FROM orders);

-- use GROUP BY clause to summarize duplicate records with the same column values
SELECT EmployeeID,HandlingCost   
FROM employee_orders   
WHERE HandlingCost > ALL(SELECT ROUND(OrderTotal/100 * 20) FROM orders) GROUP BY EmployeeID,HandlingCost;

-- use HAVING clause to filter grouped data in the subquery to filter 20% orderTotal values to retrieve values more than 100
SELECT EmployeeID,HandlingCost 
FROM employee_orders  
WHERE HandlingCost > ALL(SELECT ROUND(OrderTotal/100 * 20) AS twentyPercent FROM orders  GROUP BY OrderTotal  
HAVING twentyPercent > 100)  GROUP BY EmployeeID,HandlingCost;     
```

# references for operators and clauses

GROUP BY

Use the GROUP BY clause in a SELECT statement to group rows in a table(s) based on a given column(s) into summary rows or subgroups.   

It is placed after the FROM clause. If there is a WHERE clause in your SELECT statement, it should be placed after the WHERE clause. After the GROUP BY keyword, place a list of comma-separated column names by which you want to group the data.

HAVING clause

If you also want to filter your grouped data, use the HAVING clause. You should be aware that the WHERE clause cannot filter grouped data. The HAVING clause should appear after the GROUP BY clause. In the HAVING clause, you can specify the filter condition(s) that needs to be applied to your grouped data.

ANY

The ANY operator lets you perform a comparison between a single column value and a range of other values. The range of values comes from the execution of a subquery. 

The syntax of a statement that uses an ANY operator is as follows: 

```sql

SELECT column_name(s) 
FROM table_name 
WHERE column_name comparison operator ANY 
  (SELECT column_name 
  FROM table_name 
  WHERE condition); 

```

The ANY operator returns a boolean value following a comparison operation. It returns a TRUE value if ANY subquery values meet the given condition. In other words, the condition will be TRUE if the operation is true for any of the values in the range.

In this syntax, the ANY operator should be preceded by a column name and a comparison operator that operates on the column name against the set of values.  

Standard comparison operators like =, <>, !=, >, >=, <, or <= can be used here.

ALL

Use the ALL operator for the same purpose as the ANY operator. However, the way it works is a little bit different. It returns a boolean value as a result of performing a comparison operation. It returns TRUE only if ALL subquery values meet the given condition. In other words, the condition will be TRUE only if the operation is true for all values in the range. 

```sql
SELECT column_name(s) 
FROM table_name 
WHERE column_name operator ALL 
  (SELECT column_name FROM table_name WHERE condition); 
```
