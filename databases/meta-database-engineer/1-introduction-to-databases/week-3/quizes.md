# ORDER BY and WHERE

1. The ORDER BY keyword in SQL sorts the records of a table column in descending order by default.

false

2. The output result of the following SQL statement is the data of all customers from Germany, as * in this context means "all columns".

```
SELECT * 
FROM customers 
WHERE Country = "Germany";
```

true

3. Choose the SQL statement that shows a list of all customers who live in India organized alphabetically from A to Z within a database table named “customers”.

```

SELECT * 
FROM customers 
WHERE country = "India" 
ORDER BY FirstName ASC;

```

4. Identify the effect of the following SQL statement on the "Staff" table: 

```
SELECT * 
FROM staff 
ORDER BY Country, StaffName;

```
Displays the results ordered by country first then staff name.

# SELECT DISTINCT clause

returns distinct values without duplicates

```sql
SELECT DISTINCT country FROM student_table;

SELECT DISTINCT BillingCountry
FROM invoices
ORDER BY BillingCountry;


SELECT DISTINCT BillingCountry, BillingCity
FROM invoices
ORDER BY BillingCountry, BillingCity;

SELECT COUNT(DISTINCT country)  
FROM customers;
-- returns the number of distinct countries from the customers table
```


