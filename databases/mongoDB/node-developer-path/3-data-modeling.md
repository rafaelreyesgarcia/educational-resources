# intro

difference between traditional data model and document model.

**data modeling** is the process of defining how data is stored and the relationships among different entities in the data.

organization of data inside a database is a **schema**

develop a schema
- what the application do?
- what data is stored?
- how users will use the data?
- what data is most valuable?

a good model can:
- easier to manage
- efficient queries
- less memory usage and CPU
- reduce costs

> data accessed together, should be stored together in mongodb

collections don't enforce any document structure by default.

documents in the same collection, can have different structures this is polymorphism but not schemaless its schema flexible

encourage to define a schema, use schema validation and store any kind of data.

store documents with nested (embedded) documents (complex relationships with data).

normalize data by using database references

how the app will use data rathern than how its stored in the database.

relational databases are different

data requirements, then data modeling the data passing to developer to wrangle.

in mongoDB it starts with application requirements, how user will consume data and then data modeling.

you can
- normalize data
- embed other data that will be accessed together
- or a combination of methods

The document model does not enforce any document structure by default. This means that documents even in the same collection can have different structures.

# types of data relationships

- one-to-one
- one-to-many
- many-to-many

two methods of modeling relationships
- embedding
- referencing

structure data to match the ways that app queries and updates data (reads/writes)

MongoDB principle
> data that is accessed together, should be stored together.

## one to one

relationship where a data entity in one set is connected to one data entity in another set

in tabular traditional databases a table `movie` with a table `director` can be linked together by using a join.

in mongoDB one-to-one can happen in a single document.

```json
{
    "_id": ObjectId("00000001"),
    "name": "Rafael Reyes",
    "grade": "Freshman",
    "studentId": 123456,
    "email": "rreyes@college.edu"
}
```

## one to many

relationship where a data entity in one set is connected to any number of data entities in another set

a nested array models a one to many relationship.

```json
{
  "cast": [
    {"actor": "mark",},
    {"actor": "harrison"},
    {"actor": "carrie"}
  ]
}
```

one single query is needed to retrieve all data needed

## many to many

relationship where any number of data entities in one set are connected to any number of data entities in another set

## embedding

related data is inserted into a document

```json
{
  "_id": ObjectId("6400255985655af041ab9661"),"name":"template movie",
  "cast": [
    {"actor": "mark",},
    {"actor": "harrison"},
    {"actor": "carrie"}
  ]
}
```

## referencing

refer to documents in another collection in our document.

```json
{
  "_id": ObjectId("6400255985655af041ab9661"),"name":"template movie",
  "filming_locations": [
    ObjectId("6400255985655af041ab9661"),
    ObjectId("6400255985655af041ab9662"),
    ObjectId("6400255985655af041ab9663")
  ]
}
```

# modeling data relationships

embedding and referencing

represent relationships by inserting data into the document, embedding it or linking it with a reference.

# practice modeling data relationships

document in `accounts` collection

```json
{
  "account_id": "MDB653115886",
  "account_holder": "Herminia Mckinney",
  "account_type": "savings",
  "balance": 6617.34,
  "street_num": 123,
  "street": "Main St",
  "city": "Tulsa",
  "state": "OK",
  "zip": 74008,
  "country": "USA",
  "home_phone": 1234567890,
  "cell_phone": 1111111111,
  "transfers": [
    ...
  ],
}
```

# embedding data in documents

used for one to many or many to many relationships in the stored data.

embedding documents is recommended to simplify query and improve overall query performance

nested documents contain documents

```json
{
  "name": {"firstName": "Rafael", "lastName": "Reyes"},
  "job": "web developer",
  "address": {

  }
}
```

embedding avoids application joins, provides better performance for read operations

embedding data into a single document can create large documents

storing large documents can lead to excessive memory usage and latency for reads

large documents have to be read into memory in full.

when embedding, you could setup continously adding data without limit creates unbounded documents

unbounded documents may exceed BSOM threshold of 16MB

large documents and unbounded documents are schema anti-patterns

embeded is ideal for one-to-many and many-to-many

# referencing data in documents




