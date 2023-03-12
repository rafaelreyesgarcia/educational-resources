# working with documents in node

binary JSON **BSON** data format for documents in mongoDB

optimized for storage, retrieval and transmission across the wire

more secure than JSON, vulnerable to JSON injection attacks.

supports more data types than JSON

the mongodb node driver allows to represent BSON documents as javascript objects.

`_id` is the equivalent of a primary key in relational databases.

- BSON-encoded documents are converted automatically by the driver. This means that you can use the data immediately in your application as normal JSON and access properties by using dot notation. The driver handles the conversion from BSON to JSON for you.
- BSON documents are binary-encoded serialized documents. This means that they are stored in a binary format, which is more compact than text-based JSON documents. This makes them more efficient for storage and transmission.
- BSON documents allow for more data types than JSON documents. This is because BSON is a superset of JSON, which means that it can represent all the data types that JSON can represent, plus additional data types.

# insert a document

driver generates a `_id` field by default if none provided

- The `insertMany()` method is used to insert multiple documents into a collection.
- The `insertOne()` method inserts a single document into a collection.

# querying a collection

`find`

`findOne`

queries should define a filter to avoid returning all documents from a collection

filter queries optimize application usage of server resources
- RAM
- network bandwidth
- disk I/O
- CPU

# updating documents

`<collection>.updateOne(<filter>, <update>)`

`updateMany()`

-  The `_id` field is immutable and cannot be overwritten.

We can use the `updateOne()` method to update a document in a MongoDB database with Node.js. Here's the syntax:

db.collection.updateOne(filter, update);

We can use the `updateMany()` method to update multiple documents in a MongoDB database with Node.js. Here's the syntax:

db.collection.updateMany()(filter, update);

# delete documents

`deleteOne(<filter>)`

`deleteMany()`

all documents in a collection can be deleted by calling `deleteMany()` without any arguments

> The `deleteOne()` and `deleteMany()` methods return an object that contains an `acknowledged` property that's set to a boolean and a `deletedCount` property that's set to the number of documents that were deleted.

# creating transactions

multidocument transaction group of database operations completed as a unit or not at all

atomicity (related operations must succeeed all or fail together)

transfer money in a mobile app

transfer an item to a shopping cart

- start a client session (all operations in the session are comitted or rolled back)
- define transaction options
- define sequence of operations to perform inside transactions
- release resources used by the tx (connections are limited resources, closing connections releases them back to the pool)
- multidocument tx has a 60 seconds time limit
- a tx has a max runtime of 60 seconds

> If one of the operations fails, the operations that did not fail will not be committed. The entire transaction will be canceled, and no operations will be committed.

> Transactions in MongoDB follow ACID principles. atomicity, consistency, isolation, and durability