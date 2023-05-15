# what are tables?

made up of rows and columns

a table is stored in a database

a *database* can hold multiple tables

*tables* are known as relations or entity

an entity is an object where the attributes are columns or fields in a table

*columns*, fields, attributes has a unique name and data type

a set of columns form a row, a record.

a *record* is a combination of columns or fields that contain data in a table

*data type* defines what type of value a table column can hold (integer, character, date, etc)

data types

- string
- numeric
- date and time
- binary

a domain is a set of legal values that can be assined to an attribute.

each record is uniquely identified by a primary key

# table overview

tables store data in a database

consists of rows and columns

each row represents a record, columns represent a field, attribute describing the data stored in it

every column has a data type, defined by SQL

numeric data types
- INIT
- TINYINIT
+ BIGINIT
+ FLOAT
- REAL

dae and time
- DATE
+ TIME
- DATETIME

character and string data types
- CHAR
- VARCHAR

binary data types
- BINARY
- VARBINARY

miscellaneous
- CLOB character large object stores large blocks of text
- BLOB binary large object, stores binary data like images

a table is known as a relation

a row or record is known as a tuple

each table has its own schema

a schema means the structure

schemas include
- name of table
- attributes
- names
- data types

primary key uniquely identifies a tuple (row) in a relation (table)

columns could contain duplicated data, so an id, primary key is used for this

two primary keys can make a composite primary key

tables can relate to one another through the foreign key (a primary key from another table)

integrity constraints are rules of tables in a database

in every table there should be one or more fields used to fetch data (a primary key is mandatory)

primary key should not be NULL or not a unique value.

domain constraints refer to rules defined for values stored in a certain column. (a contact can't exceed 10 digits, an address can't be stored in a name field, etc)

referential integrity constraints define that the referenced column value (foreign key) must exist in another table

# database structure overview

how data is arranged in a database

related data are grouped in tables consisting of rows (records, tuples) and columns (fields, attributes)

components of a database
- tables (entities)
- attributes that describe the table
- fields (columns that capture attributes)
- record (row of details about a table)
- primary key, unique value for an entity

table contains all fields, attributes and records for a type of entity.

fields are column headings that contain a different attribute. each column has a data type

column value or unit of data are individual pieces of data

records are collections of data in a row

data types consist of the type of data in a column.

logical database structure is represented using entity relationship diagram ERD

define how relationships are established between entities

3 ways to relate entities
- one-to-one
- one-to-many
- many-to-many

in a physical database structure, entities are implemented as tables and relationships are established using a foreign key field.

a foreign key refers to a common field in another table (usually the primary key)

# types of keys in a table

relationships are established using foreign keys

*key attribute* is used to uniquely identify an individual record of data

*candidate key attribute* contains a unique value in each row of the table

*composite key attribute* key composed of two or more attributes to form a unique value in each row

*primary key* a selected candidate key

*alternate key* a candidate not selected as primary

*foreign key* references a unique key in another table

