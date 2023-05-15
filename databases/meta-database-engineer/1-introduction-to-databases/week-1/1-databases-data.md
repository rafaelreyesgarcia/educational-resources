# intro to databases

database tasks
- store data
- form relationships
- filter data
- search data
- perform CRUD operations

create, read, update and delete

SQL operator techniques

data normalization concepts and techniques

# what is a database?

what is data? facts and figures

**database**

form of electronic storage in which data is organized systematically

**systematic data**

identifiable features or attributes

stored in entities

an entity is like a table (rows and columns) to store data in relation to a specific element

customer, product entities (tables)

attributes become columns of the table

each row represents an instance of that entity

types of databases

- relational databases (data stored in tables and relations)
- object oriented databases (data stored in objects)
- graph databases (store data in nodes)
- document databases (json objects)

database can be hosted on
- a dedicated machine
- on the cloud (store, manage and retrieve data via internet, low-cost option)

# how is data related?

data must be related to other data to establish meaninful information

columns are fields (attributes)

rows are records of the fields

the table is known as an entity

primary field contains unique values that can't be replicated elsewhere (id) to avoid confusion between tables with similar data

foreign field key is a field that connects to the primary key of another table

data is established with the foreign field key

# relational data example charts

## bar chart

graph presents categorical data with rectangular bars, heights represent values proportionally

## bubble chart

different values compared to each other in terms of the size of the bubble

## line chart

presents information as a series of data points (markers) connected by a straight line segment

## pie chart

displays data that make up a whole 100%, each data type is allocated a slice of the total pie

# alternative types of databases

relational databases are used to store structured data in a tabular format

NoSQL databases provide flexible structure to store and scale data

NoSQL types
- document
- key-value
- graph

**big data** is complex data that grows exponentially with time

big data sources
- internet of things
- social media
- ecommerce

big data is highly unstructured or semi-structured and structured

more powerful than traditional data

provide unique insights to improve decision making

**cloud hosting**

lack of infrastructure and storage costs

**business intelligence**
analyzing data and information to make informed decisions

# database evolution

(1970s-1990s) - Flat files, hierarchical and network

(1980s-present) - Relational

(1990s- present) - Object-oriented, object-relational, web-enabled

**flat files** store data in a single file

**hierarchical** database systems are parent-child relationships one-to-many relationships

**network databases** allows multiple parent and child relationships many-to-many

has a graph-like structure, allows to represent more complex relationships

SEQUEL was used to work with network databases then SQL came to be developed to introduced relational database systems

**relational** databases introduced in 1980s data is stored in tables. columns hold attributes. each record has a value for each attribute. each row is a record with a unique ID (primary key). relational database provides access to data using a foreign key (primary key of a related table)

**object oriented** introduced in 1990s work in frameworks like java and C++

instead of tables there's entities or classes with attributes and behaviors

parent-child relationships and inheritance is possible.

**NoSQL** relational databases allow to store structured data. NoSQL allow to store unstructured data

speed and flexibility, higher scalability, lower cost, no complex relationships

document databases store data in documents similar to JSON

key-value store items with key/value pairs

wide-column databases store data in tables, rows and dynamic columns.

graph databases store data in nodes and edges.

nodes store information about entities and edges store information about relationships.


