# arithmetic operators

operators are words to help perform activities in a database.

allow to query and manipulate data

- `+` addition
- `-` substraction
- `*` multiplication
- `/` division
- `%` modulus

```sql
SELECT 10 + 15;
-- returns 25

SELECT 100 % 10;
-- remainder 0

SELECT column_name1 + column_name2 FROM table_name;
-- adds the value of two separate numerical columns
SELECT salary + allowance FROM employee;

SELECT *
FROM employee
WHERE salary + allowance = 25000;
-- retrieves total salaries equal to 25,000
```

can be used in SELECT clause and WHERE clause

when used in WHERE performs operations on specific rows only

```sql
SELECT column_name1 - column_name2 FROM table_name;
SELECT salary - tax FROM employee;

SELECT *
FROM employee
WHERE salary + tax = 50000;

SELECT *
FROM employee
WHERE tax * 2 = 4000;

SELECT allowance / salary * 100 FROM employee;

SELECT *
FROM employee
WHERE allowance / salary * 100 >= 5;

SELECT hours % 2 FROM employee;
```

# operators in use


```sql
SELECT salary - 450 FROM employee;

SELECT salary * 2 FROM employee;

SELECT salary / 12 FROM employee;

SELECT id % 2 FROM employee;
```

# SQL comparison operators

used to compare two values or expressions

result could be true or false

compare, filter or exclude data

equal to, less than or greater than

not equal to

```sql
SELECT * FROM employee WHERE salary = 10000;
SELECT * FROM employee WHERE salary < 10000;

SELECT * FROM employee WHERE salary <> 24000;
-- not equal to or !=

SELECT * FROM employee WHERE employee_id = 1;

SELECT * FROM employee WHERE employee_name = 'James';

SELECT*
FROM employee
WHERE hours <= 10;
```

# ORDER BY clause

optional clause used for ordering or sorting data

```sql
SELECT column_1, column_2
FROM table_name
ORDER BY column_name1 ASC;

SELECT column_1, column_2
FROM table_name
ORDER BY column_name1 ASC, column_name2 DESC;

SELECT *
FROM table_name
ORDER BY column_name1, column_name2 ASC|DESC;
```

if values are numeric, it sorts records of ascending or descending order

if values are strings, it sorts them in alphabetical order

```sql
SELECT ID, first_name, last_name, nationality
FROM student_table
ORDER BY nationality ASC;

SELECT ID, first_name, last_name, nationality, date_of_birth
FROM student_table
ORDER BY nationality ASC, date_of_birth DESC;
```

default sorting order is ascending order

# WHERE clause

filter and retrieve records that meet a specific condition

```sql
SELECT column1, colum2
FROM table_name
WHERE condition;

```

WHERE condition makes it possible to filter records acordint to specific criteria

BETWEEN filter records within specific numeric or time and date range

LIKE specify a pattern within the search criteria

IN specify multiple values in a column

```sql
SELECT *
FROM student_tabl
WHERE faculty = 'Engineering';

SELECT *
FROM student_tabl
WHERE date_of_birth BETWEEN '2023-01-01' AND '2023-04-01';

SELECT *
FROM student_tabl
WHERE faculty LIKE 'Sc%';

SELECT *
FROM student_tabl
WHERE country IN ('USA', 'UK');
```

the % character is a wild card character that represents 1 or multiple characters

it can also be used in other statements like UPDATE and DELETE

`!<` checks if value of the left operand is not less than the value of the right operant, if it isn't, the condition becomes true

`!>` checks if value on the left operant is not greater than the value on the right, if it is not greater, it becomes true

## logical operators

ALL used to compare a single value to all values in another value set

AND allows existence of mulitple conditions

ANY used to compare a value to any applicable value in the list

BETWEEN used to search values within a set of values

EXISTS used to search for the presence of a row in a defined table

IN used to compare a value to a list of literal values

LIKE used to compare a value similar values using wildcard operators

NOT reverses the meaning of the logical operator being used

OR used to combine multiple conditions

IS NULL compares a value with a null value

UNIQUE searches every row of a defined table for uniqueness, no duplicates

```sql
SELECT *
FROM invoices
WHERE Total > 2;

SELECT *
FROM invoices
WHERE Total > 2 AND BillingCountry = 'USA';

SELECT * 
FROM invoices
WHERE BillingCountry = 'USA' OR BillingCountry = 'France';

SELECT *
FROM invoices
WHERE Total > 2 AND (BillingCountry = 'USA' OR BillingCountry = 'France');
```

