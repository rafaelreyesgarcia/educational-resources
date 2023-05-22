# database schema

1. A  conceptual database schema is a blueprint that defines how data is organized and related in a relational database.

true

2. A conceptual database schema defines three essential parts.

- tables
- relationships
- attributes

3. A key advantage of developing a conceptual database schema is that it provides - in advance - a clear view of what tables are necessary and the way they will be connected.

true

4. The foreign key is used to connect tables in a database schema.

true

# database design

1. A logical database schema introduces a blueprint of how the data is organized and related in tables.

true

2. A foreign key is used to connect tables in a database. 

true

3. The normalization process aims to reduce the negative effects of the different types of data anomalies. 

true

4.  database relation is in second normal form if it is in first normal form and every non key attribute is __________ functionally dependent on the primary key.

fully

5. Database normalization is a progressive process, which means that the database relation cannot be in the third normal form if it is not already applying the rules of the first and the second normal forms.

true

# intro to databases final quiz

1. Write an SQL statement to create a database called "SportsClub".

CREATE DATABASE SportsClub;

2. In the text field below, input the missing keyword (___) from the following SQL statement to create a table called "Players".

CREATE TABLE Players (playerID INT, playerName VARCHAR(50), age INT, PRIMARY KEY(playerID));

3. In the text field below, input the missing keyword (___) from the following SQL statement to insert data into the "Players" table. 

VALUES

4. Insert three more records into the "Players" table that contain the following data:

SELECT playerName FROM Players WHERE playerID = 2;

5. Write a SQL statement that outputs all players names in the "Players" table. When you run the right SQL query, you should have the following output result:      

SELECT playerName FROM Players;

6. The following table called "Players", contains four records of data. Write a SQL statement that updates the age of the player with ID = 3. The new age value should be '22'.

UPDATE Players SET age = 22 WHERE playerID = 3;

7. The following table called "Players", contains four records of data. Write a SQL statement that deletes the record of the player with ID = 4.

DELETE FROM Players WHERE playerID = 4;

8. Write an SQL statement that evaluates if the PlayerID in the following "Players" table is odd or even. 

???

9. 
Write an SQL statement that outputs all names of the players in the following "Players" table who are older than 25 years of age.

??

SELECT Name FROM Players WHERE age > 25

10. Review the following ER-Diagram. Write the missing part of the SQL statement to define a foreign key that links the course table with the department table.

FOREIGN KEY(departmentID) REFERENCES Department(departmentID)

11. What is a row of information about one specific staff member in a college database table referred to as?

a record

12. A sports club database includes a table called "Members" with two columns: 

The Player number column data type is INT.

The Full name column data type is VARCHAR.

13. In a football club the skill level of all new players must automatically be set at the default of level 1. Which SQL syntax is used to set this default level using the DEFAULT keyword? 

level INT DEFAULT 1;

14. Database constraints are used to limit the type of data value that can be stored in a table. 

true

15. The output result of the following SQL statement is the data of all customers from Italy.

SELECT * FROM customers WHERE Country = "Italy"; 

true

16. The output result of the following SQL statement returns the records of all customers from India in Alphabetical order from A to Z.

SELECT * FROM students WHERE country = "India" ORDER BY FirstName DESC; 

false

17. What does the following SQL statement do? 

SELECT * FROM Players ORDER BY Country, PlayerName;

displays the results ordered by country first, then players name. 

18. The following table of data conforms with the first normal form.

false



