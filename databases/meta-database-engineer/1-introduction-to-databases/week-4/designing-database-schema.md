# database schema

blueprint of a database

organization of information and its relationships

collection of data structures within a database

database and schema are interchangable in MySQL

SQL server a schema is a collection of individual but related components

Postgre SQL a schema is a namespace with named database objects

Oracle schema is a property of each respective database user

a schema determines how data is organized between tables in a database

organization of data in the form of tables

relationships between the tables.

**components of a database**

**schema objects** components within a schema (tables, columns, relationships, datatypes and keys)

data can be stored in different entities (tables) and be related to one another

a database schema is made of data relationships

unique object keys, name and data types for each column

**advantages of a schema**

managment provide logical groupings for objects

accessibility enable greater accessibility to objects

security over a range of useful security features

permit transfer of ownership between users

Database schema is about the structure of a database. In other words, how data is organized in a database. Data in a database is organized into tables that have columns and rows. Each column or field has a defined data type, and the tables are related to each other.


This process of database schema design is also known as data modeling.

the schema is the skeleton, the design of the database

3 types of schemas

- conceptual or logical (define entities, attributes, relationships)
- internal (physical) defines how data is stored (storage and access paths)
- external (view) defines different user views

## conceptual (logical)

describes the structure in terms of entities, features and relationships between them.

ER-D (entity relationship diagram) represents the logical schema visually

## internal (physical)

describe the physical storage of the database

describes how data is stored on disk in tables, columns and records, defines data types

describes the physical representation of tables in a database

## external (view)

how an external user would see the database.

it hides low level details.

# schema in use

```sql
CREATE DATABASE shopping_cart_db;

CREATE TABLE customer (
  customer_id INT,
  name VARCHAR(100),
  address VARCHAR(255),
  email VARCHAR(100),
  phone VARCHAR(10),
  PRIMARY KEY (customer_id)
);

CREATE TABLE product (
  product_id INT,
  name VARCHAR(100),
  price NUMERIC(8, 2),
  description VARCHAR(255),
  PRIMARY KEY (product_id)
);

CREATE TABLE cart_order (
  order_id INT,
  customer_id INT,
  product_id INT,
  quantity INT,
  order_date DATE,
  status VARCHAR(100),
  PRIMARY KEY (order_id),
  -- create a foreign key and reference the table and field
  FOREIGN KEY (customer_id) REFERENCES customer(customer_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id)
);
```

# types of database schema

**logical database schema** components within a schema

shows what tables are in a database and its attributes

illustrates relationships between entity types ER-D modeling

**physical schema**

describes how physical structure of a database is stored on disk

using sql statements to create tables, rows and other database objects

# building a schema

is first step in database design

a schema consist of schema objects

- tables
- columns
- relationships
- data types
- views
- stored procedures
- primary and foreign keys

the logical schema consist of entities that become tables in the physical database design

each entity has a set of attributes

one of these attributes makes the row of data unique

physical database schema

```sql

CREATE TABLE tbl (
  table_id INT,
  location VARCHAR(255),
  PRIMARY KEY (table_id)
);

CREATE TABLE waiter(
  waiter_id INT,
  name VARCHAR(150),
  contact_no VARCHAR(10),
  shift VARCHAR(10),
  PRIMARY KEY (waiter_id)
);

CREATE TABLE table_order(
  order_id INT,
  date_time DATETIME,
  table_id INT,
  waiter_id INT,
  PRIMARY KEY (order_id),
  FOREIGN KEY (table_id) REFERENCES tbl(table_id),
  FOREIGN KEY (waiter_id) REFERENCES waiter(waiter_id)
);

CREATE TABLE customer(
  customer_id INT,
  name VARCHAR(12),
  -- national identity card number
  NIC_no VARCHAR(12),
  contact_no VARCHAR(10),
  PRIMARY KEY (customer_id)
);

CREATE TABLE reservation(
  reservation_id INT,
  date_time DATETIME,
  -- number of guests
  no_of_pax INT,
  order_id INT,
  table_id INT,
  customer_id INT,
  PRIMARY KEY (reservation_id),
  FOREIGN KEY (order_id) REFERENCES table_order(table_id),
  FOREIGN KEY (table_id) REFERENCES tbl(table_id),
  FOREIGN KEY (customer_id) REFERENCES customer(customer_id)
);

CREATE TABLE menu(
  menu_id INT,
  description VARCHAR(255),
  availability INT,
  PRIMARY KEY (menu_id)
);

CREATE TABLE menu_item(
  menu_item_id INT,
  description VARCHAR(255),
  price FLOAT,
  availability INT,
  menu_id INT,
  PRIMARY KEY (menu_item_id),
  FOREIGN KEY (menu_id) REFERENCES menu(menu_id)
);

CREATE TABLE order_menu_item(
  order_id INT,
  menu_item_id INT,
  quantity INT,
  PRIMARY KEY (order_id,menu_item_id),
  FOREIGN KEY (order_id) REFERENCES table_order(order_id),
  FOREIGN KEY (menu_item_id) REFERENCES menu_item(menu_item_id)
);
```

CREATE statements allow to create the database structure or schema using the DDL subset syntax.

relationships are established via primary and foreign keys

