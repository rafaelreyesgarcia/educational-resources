# choosing right data type

1.  soccer club’s database includes a “Players” table. The table contains a “Player number” column that records the jersey number of each player in the team. Each jersey number is a whole number. Identify the correct data type for this column.

TINYINT 

2. In a sports club database, the “Players” table includes a date of birth column that records the date of birth for each player. The right SQL data type to define the player date of birth is DOB VARCHAR(100).

false DATE is the right data type in this case. 

3. Which one of the following SQL statements makes use of the correct data types to create a "Players" table in a soccer club’s database?

```sql
CREATE TABLE players 
(
    playerNumber INT, 
    fullName VARCHAR(100), 
    date_of_birth DATE
);
```

4. A soccer club’s database includes a staff table with three columns: username, full name and title. The username contains alphanumeric values such as: “Staff001” and has a fixed length of eight characters. Select the right SQL syntax.

username CHAR(8)

5. The following SQL statement can be used to create a table called “Players”, with a default value of “Miami” for the city column.

```sql
CREATE TABLE players
(
  playerName VARCHAR(100),
  city VARCHAR(50) DEFAULT “Miami”,
  age INT
);
```

# create, insert and select

1. The following SQL statement contains the syntax to create a product table with two columns ID and price:

`CREATE TABLE product_table (ID, price);`

false, must define datatypes

2. You need to create a table for bank account records in a financial database. Which of the following SQL statements can you use to complete this task? 

`CREATE TABLE bank_account (account_number INT, balance DECIMAL);`

3. Select the right SQL statement to insert a new record of data into three columns of a table called "Games" with the following values:

`INSERT INTO games (GameID, gameDate, score) VALUES (1, “2022-10-10”, 3);`

4. A player with ID = 5, name = “Tina” and age = 23 must be added to the “Players” table for a soccer club database. Select the right SQL syntax to insert the player data into the table. 

`INSERT INTO Players (ID, name, age) VALUES (5, "Tina", 23);`

5. a hockey team requires all available data on their players for an upcoming meeting. Choose the correct SQL statement to select all data available in the players’ table 

`SELECT * FROM players;`

# update and delete

1. Which of the following statements is the correct command syntax to update a table in SQL?

UPDATE table_name;

2. What is the missing SQL keyword in the following SQL statement to update the customer’s table?

```sql
UPDATE Customers 
SET ContactName = 'Jack Molly' 
WHERE CustomerID = 10;
```

3. Which of the following SQL statements can be used to update data for a student in the “Students” table?

```SQL
UPDATE students SET name = 'Karl' WHERE ID = 18;
```

4. The following table contains data about customers. The customer data should be removed completely, but without deleting the table. Identify which statement can be used to delete all records of data from the customers table without deleting the table itself.

DELETE FROM customers;

5. The 'WHERE' keyword is used in SQL to specify a condition to update or delete data from a table.

true

# create, read, update and delete

1. The following SQL clause creates a table named staff within a database:

`CREATE staff TABLE;`

false

2. The following SQL statement creates a table named staff, with two columns called name and address: 

`CREATE TABLE staff (name VARCHAR(100), address VARCHAR(100));`

true

3. What is the SQL command to add a new record of data in the staff table?

`INSERT INTO staff;`

4. Which is the right command syntax to update the staff table in SQL?

`UPDATE staff;`

5. EDIT command is used to modify data in a database table. 

false

6. Which one of the following SQL statements updates the staff email address for the individual named “Karl” in the staff table?

`UPDATE staff SET email = 'Karl@email.com' WHERE name = 'Karl';`

7. Select the right keyword to complete the missing part of the following statement: 

INSERT INTO staff (ID, name) ___ (7, “Tom”);

VALUES

8. A staff table consists of three columns called name, email and age. Which of the following SQL statements selects all available data in all three columns in the staff table?

`SELECT name, email, age FROM staff;`

`SELECT * FROM staff;`

9. The following SQL statement returns all staff phone numbers from the staff table: SELECT phoneNumber FROM staff;

true

10. Which of the following SQL statements deletes all records of data from the staff table without deleting the table itself?

DELETE FROM staff;

TRUNCATE TABLE staff;

