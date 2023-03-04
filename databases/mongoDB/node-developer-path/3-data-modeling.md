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

overview
+ single query to retrieve data
+ single operation to update/delete data
- data duplication
- large documents

# referencing data in documents

storing related data in a single document.

storing related data in separate documents (or collections).

references ensure its clear collections are related.

> save `_id` field of one document in another document as a link between the two

**references** can be called **linking** or **data normalization**.

reference avoids duplication of data

result in smaller documents.

referencing requires querying from multiple documents so extra resources are needed potentially impacting performance.

overview
+ no duplication
+ smaller documents
- need to join data from multiple documents

# scaling a data model

the query pattern (how to access data) needs to align with the data model (how you store your data)

this allows optimum efficiency of
- query result times
- memory usage
- CPU usage
- storage

unbounded documents grow indefinitely, this can happen while embedding documents

problems arise when arrays storing documents grow larger

the document will get larger and take more space in memory

impact in write performance as one embeded object is rewritten, the entire parent document is updated into data storage

difficult to perform pagination, all objects have to be retrieved and filtered in the application.

max document size of 16MB

in this situation, referencing becomes useful as its more manageable and organized to have different data stored separately, breaking it up into multiple collections and use references to link frequently accessed data together

avoid
- above size limit 16MB
- poor query performance
- poor write performance
- too much memory usage

## quiz answers

- Unbounded documents caused by embedding will eventually run into storage problems by exceeding the maximum document size of 16 MB.

- Embedding data will make the document larger and impact write performance. As more data is added to each document, the entire document is rewritten into MongoDB data storage.

- To prevent unbounded document sizes that may result from embedding, you can break up your data into multiple collecitons and use references to keep frequently accessed data together.

- Data that is accessed together should be stored together. How you model your data depends entirely on your particular application's data access patterns. You want to structure your data to match the ways that your application queries and updates it.

# atlas tools for schema help

- schema anti-patterns
- mongoDB tools in atlas
- data explorer
- performance advisor

schema design patterns help you *plan* *organize* and *model* data

schema anti-patterns produce
- sub-optimal performance
- non-scalable solutions

most common anti-patterns
- massive arrays
- massive number of collections
- bloated documents
- unnecessary indexes
- queries without indexes
- data accessed together but stored in different collections

data explorer and performance advisor are atlas tools.

## data explorer

available with free tier

storage size, logical data size, total documents, indexes total size of a collection

indexes tab

schema anti-pattern highlights issues in the collection.

drop index option removes an unused index

## performance advisor

M10 + tiers

analyzes most active collections

tells which indexes are redundant

index recommendation, unnecessary indexes and provide ways to improve schema

## quiz

1. Which tab in Data Explorer shows ways to improve your schemas?

The Schema Anti-Patterns tab highlights any issues in the collection and provides details to resolve them. You can improve your schema by resolving the anti-patterns that are shown.

2. What is the minimum Atlas Cluster tier that you must have to use the Performance Advisor tool?

The Performance Advisor tool is available in M10+ cluster tiers.

# conclusion

- purpose of data modeling
- types of relationships among data
- embedded vs referenced documents
- effects of sizes (documents, collections, databases)
- tools for schema management

# additional reading

https://www.mongodb.com/docs/manual/core/data-modeling-introduction/?_ga=2.228114586.604663874.1677704641-1031816687.1677704641

https://www.mongodb.com/developer/products/mongodb/schema-design-anti-pattern-separating-data/?_ga=2.228114586.604663874.1677704641-1031816687.1677704641

https://www.mongodb.com/docs/manual/core/data-model-design/?_ga=2.228114586.604663874.1677704641-1031816687.1677704641

https://www.mongodb.com/docs/v4.2/applications/data-models-relationships/?_ga=2.228114586.604663874.1677704641-1031816687.1677704641

https://www.mongodb.com/basics/embedded-mongodb?_ga=2.228114586.604663874.1677704641-1031816687.1677704641

https://www.mongodb.com/developer/products/mongodb/mongodb-schema-design-best-practices/?_ga=2.228114586.604663874.1677704641-1031816687.1677704641

https://www.mongodb.com/docs/manual/core/data-model-design/?_ga=2.228114586.604663874.1677704641-1031816687.1677704641

https://www.mongodb.com/docs/v4.2/applications/data-models-relationships/?_ga=2.228114586.604663874.1677704641-1031816687.1677704641

https://www.mongodb.com/basics/embedded-mongodb?_ga=2.227483930.604663874.1677704641-1031816687.1677704641

https://www.mongodb.com/docs/manual/tutorial/model-embedded-one-to-one-relationships-between-documents/?_ga=2.227483930.604663874.1677704641-1031816687.1677704641

https://www.mongodb.com/docs/manual/tutorial/model-embedded-one-to-many-relationships-between-documents/?_ga=2.227483930.604663874.1677704641-1031816687.1677704641

https://www.mongodb.com/docs/manual/core/data-model-design/?&_ga=2.227483930.604663874.1677704641-1031816687.1677704641#std-label-data-modeling-referencing

https://www.mongodb.com/blog/post/performance-best-practices-mongodb-data-modeling-and-memory-sizing?_ga=2.227483930.604663874.1677704641-1031816687.1677704641

https://www.mongodb.com/developer/products/mongodb/schema-design-anti-pattern-summary/?_ga=2.227483930.604663874.1677704641-1031816687.1677704641




