# overview

inserting and finding documents.

build queries that use comparison and logical operators

how to query elements in an array

# inserting documents in a collection

two methods to insert documents

`insertOne()`

`insertMany()`

append it to collection name and database

`db.<collection>.insertOne()`

`db.grades.insertOne()`

mongodb creates the collection if it doesn't exists automatically when using `insertOne()`

pass the document to insert as a parameter to the `insertOne()` method.

`insertMany([<doc1>,<doc2>,<doc3>])` will insert multiple methods at once

```js
db.grades.insertOne({
  student_id: 654321,
  products: [
    {
      type: "exam",
      score: 90,
    },
    {
      type: "homework",
      score: 59,
    },
    {
      type: "quiz",
      score: 75,
    },
    {
      type: "homework",
      score: 88,
    },
  ],
  class_id: 550,
})

db.grades.insertMany([
  {
    student_id: 546789,
    products: [
      {
        type: "quiz",
        score: 50,
      },
      {
        type: "homework",
        score: 70,
      },
      {
        type: "quiz",
        score: 66,
      },
      {
        type: "exam",
        score: 70,
      },
    ],
    class_id: 551,
  },
  {
    student_id: 777777,
    products: [
      {
        type: "exam",
        score: 83,
      },
      {
        type: "quiz",
        score: 59,
      },
      {
        type: "quiz",
        score: 72,
      },
      {
        type: "quiz",
        score: 67,
      },
    ],
    class_id: 550,
  },
  {
    student_id: 223344,
    products: [
      {
        type: "exam",
        score: 45,
      },
      {
        type: "homework",
        score: 39,
      },
      {
        type: "quiz",
        score: 40,
      },
      {
        type: "homework",
        score: 88,
      },
    ],
    class_id: 551,
  },
])
```

# finding documents in a collection

## find

`find()`

`db.<collection>.find()`

retrieves the whole collection of documents.

to find a specific document in a collection there's two methods

**eq operator**

`{field: <value>}` implicit `eq` operator

examples

`db.zips.find({state: $eq: "AZ"})`
`db.zips.find({state: "AZ"})`

`db.zips.find({ _id: ObjectId("5c8eccc1caa187d17ca6ed16") })`

`db.sales.find({ _id: ObjectId("5bd761dcae323e45a93ccff4")})`

find documents with a field and a value

**in operator**

`$in` operator allows to select all documents that have a field value equal to any of the values defined in the array

`<field>: {$in: [<value>, <value>, ...]}}`

examples

`db.zips.find({city: {$in: ["PHOENIX", "CHICAGO"]}})`

`db.sales.find({ storeLocation: { $in: ["London", "New York"]}})`

selects documents equal to the values defined in the array

# finding documents with comparison operators

overview
- $gt greater than
- $lt less than
- $lte less than or equal to
- $gte greater than or equal to

`<field>: {<operator>: <value>}`

## greater than $gt $lt

returns documents where the field contains a value greater than the specified value

`db.sales.find({"items.price": {$gt: 50}})`

`db.sales.find({"items.price": {$lt: 50}})`

`items.price` is a `field.nestedField`

## greater than, less than or equal to $gte $lte

`db.sales.find({"customer.age": {$lte: 65}})`

`db.sales.find({ "items.price": { $gt: 200}})`

`db.sales.find({ "items.price": { $lt: 25}})`

`db.sales.find({ "items.quantity": { $gte: 10}})`

`db.sales.find({ "customer.age": { $lte: 45 } })`

# querying on array elements

`$elemMatch` operator matches a query only when the value is an element in an array

```js
db.account.find({
  products: {
    $elemMatch: {$eq: "investmentStock"}
  }
})

{field: { $elemMatch:
  {
    query1,
    query2,
  }
}}

db.sales.find({
  items: {
    $elemMatch: { name: "laptop", price: { $gt: 800 }, quantity: { $gte: 1 } },
  },
})
```
a single array element matches multiple query criteria

`db.accounts.find({products: {$elemMatch: {$eq: "CurrencyService"}}})`

searching for subdocuments

```js
db.transactions.find({
    transactions: {
      $elemMatch: { amount: { $lte: 4500 }, transaction_code: "sell" },
    },
  })

db.transactions.find({transactions:{$elemMatch:{amount:{$lte:4500}}}})
```

The `$elemMatch` operator is a valid operator that's included in the MongoDB Shell to find a subdocument that matches specific criteria in an array.

The following query will return documents where the genre field is equal to a scalar value of Historical, and it will also return documents that have an array value equal to Historical, such as ["Historical", "Fiction"].
`db.books.find({ genre: "Historical" })`

# logical operators to find documents

**$and**

```
db.<collection>.find({
  $and: [
    {<expression>},
    {<expression>},
    {<...>},
  ]
})
```

returns all documents that meet all the criteria specified in the array.

add a comma between the query expression

find all documents that have an airline named "southwest airlines" and have a number of stops greater than or equal to 1

```
db.routes.find({$and: [{"airline": "Southwest Airlines"}, {"stops": {$gte: 1}}]})

<!-- implicit $and -->
db.routes.find({"airline": "Southwest Airlines, "stops": {$gte: 1}})
```

**$or**

logical or operation in an array of two or more expressions and selects documents that match at least one of the given expression

```
db.<collection>.find({
  $or: [
    {<expression>},
    {<expression>},
    {<...>},
  ]
})

db.routes.find({$or: [{dst_airport: "SEA"}, {src_airport: "SEA"}]})

```

mixing $and and $or

```
db.routes.find({
  $and: [
    { $or: [
      {dst_airport: "SEA"},
      {src_airport: "SEA"}
    ]},
    {$or: [
      {airline: "american airlines"},
      {airplane: 320}
    ]},
  ]
})
```

can't store two fields with the same name and same JSON object

> when including the same operator more than once, explicit $and operator is needed

## examples

```
implicit $and

db.routes.find({ "airline.name": "Southwest Airlines", stops: { $gte: 1 } })

$or operator
db.routes.find({
  $or: [{ dst_airport: "SEA" }, { src_airport: "SEA" }],
})

$and and $or
db.routes.find({
  $and: [
    { $or: [{ dst_airport: "SEA" }, { src_airport: "SEA" }] },
    { $or: [{ "airline.name": "American Airlines" }, { airplane: 320 }] },
  ]
})

db.sales.find({ couponUsed: true,  purchaseMethod: "Online", "customer.age": { $lte: 25 } })

db.sales.find({
  $or: [
    // Add new expressions separated by a comma:
  ],
})

db.sales.find({
  $or: [{ "items.name": "pens" }, { "items.tags": "writing" }],
})
```

# conclusion

$gt $gte $lte $lt - comparison operators

$and $or - logical operators

operators can make queries more specific, accurate and performant.

# additional resources

https://docs.mongodb.com/manual/reference/method/db.collection.insertOne/?_ga=2.264619144.604663874.1677704641-1031816687.1677704641

https://docs.mongodb.com/manual/reference/method/db.collection.insertMany/?_ga=2.264619144.604663874.1677704641-1031816687.1677704641

https://docs.mongodb.com/manual/reference/method/db.collection.find/?_ga=2.264619144.604663874.1677704641-1031816687.1677704641

https://docs.mongodb.com/manual/reference/operator/query/in/?_ga=2.264619144.604663874.1677704641-1031816687.1677704641

https://docs.mongodb.com/manual/reference/operator/query-comparison/?_ga=2.264619144.604663874.1677704641-1031816687.1677704641

https://docs.mongodb.com/manual/reference/operator/query/elemMatch/?_ga=2.264619144.604663874.1677704641-1031816687.1677704641

https://docs.mongodb.com/manual/tutorial/query-array-of-documents/?&_ga=2.264619144.604663874.1677704641-1031816687.1677704641#combination-of-elements-satisfies-the-criteria

https://docs.mongodb.com/manual/reference/operator/query-logical/?_ga=2.264619144.604663874.1677704641-1031816687.1677704641



