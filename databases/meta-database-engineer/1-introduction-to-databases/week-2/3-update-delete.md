# updating data

```sql
-- update a table
UPDATE student_tbl
-- sets the fields to different values
SET home_address = "234 Park Avenue", contact_number = "23455667"
-- selects the row to modify
WHERE ID = 3;

UPDATE student_tbl
SET college_address = "Harper Building"
WHERE department = "engineering";

UPDATE student_tbl
SET college_address = "Harper Building", home_address = 'xyz'
WHERE department = "engineering";
```

# delete data

```sql
DELETE FROM student_tbl
WHERE last_name = "Miller";

-- delete multiple records
DELETE FROM student_tbl
WHERE department = "engineering";

-- delete all records
DELETE FROM student_tbl;
```

# record deletion

```sql
-- empty the table
TRUNCATE TABLE customers;

INSERT INTO customers (customerID, customerName, customerAddress) VALUES 
(1, 'jack', '115 old street belfast'),
(2, 'james', '24 carlson rd london'),
(3, 'maria', '5 fredrik rd bedford');

USE bookshop;

DELETE FROM customers WHERE customerID = 3;

SELECT * FROM customers;

DELETE FROM customers
WHERE customerID = 6;
```
