# subqueries

inner query palced within an outer query

```sql
SELECT column_name
FROM table_name
WHERE expression
(SELECT column_name FROM table_name WHERE condition);
```

inner query (child) executes first, result is passed to outer query (parent)


subquery should return a single value, row, column or multiple rows

can be compared with other values

```sql
SELECT *
FROM Employees
WHERE AnnualSalary > (
  SELECT AnnualSalary FROM Employees
  WHERE Role="Assistant Chef"
);
```

# subqueries and complex comparison operators

ANY, ALL, SOME

```sql
SELECT column_name
FROM table_name
WHERE expression > ALL (
  SELECT column_name
  FROM table_name
  WHERE column DATA TYPE
  (value1, value2, value3);
)

SELECT column_name
FROM table_name
WHERE EXISTS (
  SELECT column_name
  FROM table_name
  WHERE condition);
```

The NOT EXISTS operator checks for the non-existence, or absence, of results from the subquery. NOT EXISTS returns TRUE when the subquery does not return any row of results.



