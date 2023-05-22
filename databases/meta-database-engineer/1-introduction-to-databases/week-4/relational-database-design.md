# table relationships

relational model

- one to many
- one to one
- many to many

one to many a record of data is linked to multiple records in another table

rectangular shapes describe entities in an ER-D

diamond shapes describe relationships

one to one one single record is associated with one single record in another table.

many to many associate with one record to many records in another table and viceversa

# relational model

built around 3 concepts
- data
- relationships
- constraints

a *relation* represents a file that stores data, a table.

within a table there's rows (records) and columns (fields)

each *row* represents a group of related data values

a record is known as a tuple

records consist of a set of attributes

a *column* stores data as columns.

the principal storage unit of a database is a column

each column represents the piece of data stored

the *domain* is a set of acceptable values a column is allowed to contain, depends on the data type of the column.

a key is the value of an attribute, if unique is known as primary

*degree* is the number of columns or attributes within a relation 4 columns = 4 degrees

*cardinality* refers to how many records there are within a table in a database

a table with 100 records has a cardinality of 100

*constraints*
- key constraints
- domain constraints
- referential integrity constraints

key constraints must be unique for each record, a key attribute can't have NULL values

domain constraints require inserted values to have a valid data type.

*referential integrity* is when multiple tables refer to one another and the constraints are related to foreign keys.

the foreign key references another table, in which is the primary key

# primary key

a candidate key is an attribute unique to each row of a table

can't have a null value

create a composite primary key (combination of multiple attributes) when one single key can't uniquely identify a row (record, tuple)

# foreign key

customer table and order table

what customer made an order?

a foreign key columns used to connect tables

a foreign key establishes a relationship between tables

parent-child relationship between tables

the reference table is known as parent table

the referencing table is the child table

customer_id value in the order table can be usd to fetfch records of a customer to determine who placed the order. customer table represents the parent as there can't be an order without a customer

a table can have multiple foreign keys, the order table will have to foreign keys, customer and product table.

each product might be related to an order but not necessarily

# keys in depth

in a vehicle table, a vehicle_id owner_id car_plate owner_phone all are unique

however, the owner could buy multiple cars, thus repeating in multiple rows

if the owner updates the plate number then the value is no longer the same

the phone number can also change at any time

the candidate key must have a value that never changes

the vehicle id is not expected to change so it should become the primary key

```SQL
CREATE DATABASE automobile;

USE automobile;

CREATE TABLE vehicle(
  vehicle_id VARCHAR(10),
  owner_id VARCHAR(10),
  plate_number VARCHAR(10),
  phone_number INT
);

show tables;

show columns from vehicle;

SELECT * FROM vehicle;
```

a candidate key that hasn't been chosen as primary, is called alternate

a primary key can be single or composite

```sql
CREATE TABLE owner(
  owner_id VARCHAR(10),
  owner_name VARCHAR(50),
  owner_address VARCHAR(255),
  PRIMARY KEY(owner_id)
);

ALTER TABLE vehicle ADD FOREIGN KEY (owner_id) REFERENCES owner(owner_id);
```

PRI means primary

UNI means unique

MUL means the column can have same value in multiple cells

# finding entities

an entity is an object with related attributes

attributes can be multi-valued, derived or key

a simple attribute cannot be described further, can only store one value

a composite can be split in different columns

multi-value attributes can store more than one value (should be avoided in relational databases)

derived where the value is derived from another field

# entity relationship diagrams ERD

relational model organizes information into tables

the ERD is used to represent and document entity relationship models

entity and attributes

the relationship representation can be described one-to-one, one-to-may or many-to-many

each entity has a set of attributes with relevant information about it

each attribute must be defined with a data type




