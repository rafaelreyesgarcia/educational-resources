# week 1

## knowledge check: filtering data with logical operators

1. True or False: The SQL “LIKE” operator is used in a WHERE clause to find a specified pattern in a table column.

true

2. The SQL “IN” operator is used to specify multiple values in a WHERE clause and can be used as shorthand for multiple ____ conditions.

OR

3. Lucky Shrub needs a list of orders from their database “Orders” table in the range of $100 and $350. Which of the following SQL statements can be used to complete this task? 

SELECT * FROM Orders WHERE Cost BETWEEN 100 AND 350;

SELECT * FROM Orders WHERE Cost >= 100 AND Cost <= 350;

4. Which Client IDs are returned when you execute the following SQL query on the “Clients” table?

SELECT ClientID FROM Clients WHERE FullName LIKE '%o';


CL1 and CL3

5. Lucky Shrub can use the following SQL query on their database “Orders” table to extract all the data related to orders placed between the stated date range:

SELECT * FROM Orders WHERE OrderDate BETWEEN '2022-06-01' AND '2022-06-30';

true

## self-review: filtering data

1. True or False: The following SQL statement selects all records from the Orders table where the client ID is equal to Cl3.

SELECT * FROM Orders WHERE NOT ClientID = 'Cl3';


false

2. Choose the correct SQL statement to select all fields from the "Orders" table where productID is “P3" AND Client ID is equal to "Cl2" OR "Cl3".

```sql
SELECT * FROM Orders WHERE productID = 'P3' AND (ClientID = 'Cl2' OR ClientID ='Cl3');
```

3. What values are extracted from the ProductID column in the "Orders" table when the following SQL query is executed?

```sql
SELECT Distinct (ProductID) FROM Orders WHERE ProductID IN (SELECT ProductID FROM Orders WHERE Cost < 250);
```

P1, P2, P4

4. SELECT * FROM Clients WHERE FullName LIKE '%ur%';

CL2 AND CL3 Both records are related to client names that contain "ur".

5. The following query identifies customers from the Customers table whose names begin with the letter J and are at least 4 characters in length:

SELECT * FROM Customers WHERE CustomerName LIKE 'j _ _ _ %';

true


## knowledge check: JOINS

1. A join in a database links records of data between one or multiple tables based on what type of values?

Common column values

2. True or False: The use of an INNER JOIN between two tables return records of data that have matching values in both tables. 

true

3. Which type of join returns all records from the left table and matching records from the right table?

LEFT JOIN

4. What are the benefits of aliases in a MySQL database?

Aliases are used to give columns descriptive names.

Aliases can provide short names for tables. 

Aliases can be used to deal with one table as two tables in SELF JOIN.

5. The Lucky Shrub database contains two tables called “Clients” and “Orders”. The company performs a JOIN query that uses “Clients” as the left table, and “Orders” as the right table. 

The query results in the following output: the output contains several NULL values for clients who have yet to place orders.

This output is the result of a LEFT JOIN operation.

## MySQL UNION operator

1. The SQL UNION operator is used to combine sets of results from two or more SELECT statements.

true

2. What rules must be followed when using a UNION operator in MySQL? 

The related columns in every SELECT statement must be in the same order.

The columns in the SELECT statement must have similar data types.

Every SELECT statement within a UNION operator must have the same number of columns.

3. Which of the following SQL operations makes use of a common column between two tables?

a JOIN clause

4. True or False: The SQL UNION operator selects duplicate values by default.

false

5. You are writing a query that targets two tables. Each table contains duplicated values. You need to return all values, including duplicate data, from these tables. Which operator can you use in your statement to complete this task?

UNION ALL

## JOINS

ustomerID, Bookings.BookingID FROM Customers _______ JOIN Bookings ON Customers.CustomerID = Bookings.CustomerID;

INNER

2. True or False: The RIGHT JOIN returns all records from the right table, and the matching records from the left table.

true

3. True or False: The INNER JOIN returns all records from the right table and the matching values in the left table. 

false

4. You are querying data from two tables using a RIGHT JOIN query. What records are included from the left table if no match is found?

NULL values

5. True or False: A self-join is a join that links the table with itself.

true

## GROUP BY and HAVING

1. True or False:  If there is a “WHERE” clause in a SELECT query, then the GROUP BY clause should be placed after the WHERE clause.

true 

2. Which of the following clauses are used to filter grouped data?

HAVING

3. You need to filter the data in the following “Orders” table to retrieve results with an order total value greater than $2275. Which SQL statement can you use to complete this task?

SELECT Department, SUM(orderTotal) FROM orders GROUP BY Department HAVING SUM(orderTotal) > 2275;

4. The GROUP BY clause summarizes duplicate data and applies an aggregate function (if used) on the duplicate values and performs the specified numeric operation.

true

The purpose of using the GROUP BY clause in a SQL SELECT statement is to group rows in one or more tables based on one or more given columns, into summary rows or subgroups. An aggregate function can be used with the GROUP BY clause to perform calculations and return a single value for each subgroup.

# self review grouping data

1. True or False: The following SQL statement targets a table named “Orders” and groups rows that have the same OrderDate values into summary rows.

SELECT OrderDate FROM Orders GROUP BY OrderDate;

true

2. Lucky Shrub need to retrieve the total quantities of all orders that were placed with their business on the same day. Identify the missing syntax from the SQL statement that they’ve created to complete this task:

SELECT OrderDate, _______ FROM Orders GROUP BY OrderDate;

SUM(OrderQty)

3. True or False: When grouping data by multiple columns, SQL reviews the GROUP BY column values to find combinations of repeating or duplicate data. It then summarizes these rows.

true

If a SELECT query specifies multiple columns in the GROUP BY clause, then it inspects the data in all those columns in order to identify repeating or duplicate value combinations of all the specified columns. It then summarizes the rows.

4. Which columns in the following table would be appropriate to include within a GROUP BY clause in an SQL statement? 

OrderDate

Department

??

5. True or False: If you remove the GROUP BY clause from a SQL SELECT statement, then the HAVING clause behaves in a similar manner to the WHERE clause.

true

The HAVING clause is used in a GROUP BY query to filter grouped data. However, in the absence of GROUP BY clause, the HAVING clause behaves just like the WHERE clause.




