# 1 replacing a document

`replaceOne()`

`db.collection.replaceOne(filter, replacement, options)`

the filter can be the `_id` field

`filter` query that matches the document in place

`replacement` new document to replace old

`options` object defining options for the update

```sh
db.books.replaceOne(
  {
    _id: ObjectId("6282afeb441a74a98dbbec4e"),
  },
  {
    title: "Data Science Fundamentals for Python and MongoDB",
    isbn: "1484235967",
    publishedDate: new Date("2018-5-10"),
    thumbnailUrl:
      "https://m.media-amazon.com/images/I/71opmUBc2wL._AC_UY218_.jpg",
    authors: ["David Paper"],
    categories: ["Data Science"],
  }
)
```

## lab

```c++
db.birds.findOne({common_name: "Northern Cardinal"});

db.birds.replaceOne({_id: ObjectId("6286809e2f3fa87b7d86dccd")}, {
  "common_name": "Morning Dove",
  "scientific_name": "Zenaida macroura",
  "wingspan_cm": 37.23,
  "habitat": ["urban areas", "farms", "grassland"],
  "diet": ["seeds"],
});
// returns
{
   "acknowledged": true,
   "insertedId": null,
   "matchedCount": 1,
   "modifiedCount": 1,
   "upsertedCount": 0
}
```

- The `replaceOne()` method is used to replace a single document that matches the filter document.
- The `replaceOne()` method accepts a filter document, a replacement document, and an optional options document.
- The `replaceOne()` method returns a document containing an acknowledgement of the operation, a matched count, modified count, and an upserted ID (if applicable).
- The `replaceOne()` method allows updates to a document's fields while keeping the document's `_id` the same.

# 2 updating documents

`updateOne` used with `$set` and `$push`

`upsert` option

`updateOne()`

```c++
db.collection.updateOne(<filter>, <update>, {options})
```

filter contains selection criteria

update contains an update operator expression used in the update

`set` adds new fields and values to a document or replaces the value of a field with a specific value

`$push` appends a value to an array if the value is absent then adds an array field with the value as its element

operators are preceeded by `$`

```c++
db.podcasts.findOne({title: "The MongoDB Podcast"})

db.podcasts.updateOne(
  {_id: ObjectId()},
  {$set: {subscribers: 98562}}
)
```

`upsert`inserts a document with provided information if matching documents don't exist

upsert is short for **update** or **insert**

when the filter parameter doesn't match with a document, the upsert method will insert a document.

```c++
db.podcasts.updateOne(
  {title: "the developer hub"},
  {$set: ${topics: ["databases", "mongoDb"]}},
  {upsert: true}
)

db.podcasts.updateOne(
  {_id: ObjectId()},
  {$push: {hosts: "nic raboy"}}
)
```

## overview

```c++
// $set
db.podcasts.updateOne(
  {
    _id: ObjectId("5e8f8f8f8f8f8f8f8f8f8f8"),
  },

  {
    $set: {
      subscribers: 98562,
    },
  }
)

// upsert
db.podcasts.updateOne(
  { title: "The Developer Hub" },
  { $set: { topics: ["databases", "MongoDB"] } },
  { upsert: true }
)

// $push
db.podcasts.updateOne(
  { _id: ObjectId("5e8f8f8f8f8f8f8f8f8f8f8") },
  { $push: { hosts: "Nic Raboy" } }
)
```

## lab

```c++
db.birds.findOne({common_name:"Canada Goose"})

db.birds.updateOne(
  {_id: ObjectId("6268413c613e55b82d7065d2")},
  {$set:{tags:["geese", "herbivore", "migration"]}}
)

db.birds.updateOne(
  { _id: ObjectId("6268471e613e55b82d7065d7") },
  {
    $push: {
      diet: { $each: ["newts", "opossum", "skunks", "squirrels"] },
    },
  }
)

db.birds.updateOne(
  {
    common_name: "Robin Redbreast",
  },
  {
    $inc: {
      "sightings": 1,
    },
    $set: {
      last_updated: new Date(),
    },
  },
  {
    upsert: true,
  }
)

// returns
{
  acknowledged: true,
  insertedId: ObjectId("640a3159f09dad3c14a8243d"),
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 1
}
```

- The `updateOne()` method requires the use of an update operator to update a document, such as `$set`, `$push`, `$pop`, `$unset`, or `$inc`.

# 3 updating documents with findAndModify

differences with `updateOne`

`findAndModify` returns the document that had just been updated

`updateOne` has to be used with `findOne`

`findAndModify` does both

method accepts a document as an argument with several embedded document fields.

`query` field accepts a query document

`update` accepts update document

`new` accepts boolean, set to true and modified object is returned, default returned value is the document without modifications

```c++
db.podcasts.findAndModify({
  query: {_id: ObjectId()},
  update: {$inc: {downloads: 1}},
  new: true
})

db.podcasts.findAndModify({
  query: { _id: ObjectId("6261a92dfee1ff300dc80bf1") },
  update: { $inc: { subscribers: 1 } },
  new: true,
})
```

## lab

```c++
db.birds.findAndModify({
  query: { common_name: "Blue Jay" },
  update: { $inc: { sightings_count: 1 }},
  new: true,
})
```

overview

- Simply put, the `findAndModify()` command finds a document and modifies it.
- By default, the `findAndModify()` method returns the unmodified document before it's updated.
- If no documents match the query, the `findAndModify()` method can insert a document if you set the `upsert` option to `true`.

# 4 - updating documents with updateMany

`updateMany()` accepts three parameters
- filter document (contains selection criteria)
- update document ()
- options object

```c++
db.books.updateMany({year: 2022}, {$set: {instock: true}})

db.books.updateMany(
  { publishedDate: { $lt: new Date("2019-01-01") } },
  { $set: { status: "LEGACY" } }
)
```

`updateMany` is not an all-or-nothing operation so it won't roll back updates if there's an error while processing the update.

lacks isolation so updates are visible as soon as they're performed

not appropiate for financial transactions.

it returns an object containing how many documents matched the filter, and how many were modified.

## lab

```c++
db.birds.updateMany(
  {common_name: {$in: ["Blue Jay", "Grackle"]}},
  {$set: {last_seen: ISODate("2022-01-01")}}
)
```

- We can use the `updateMany()` method to update multiple documents in a collection. This method accepts a query document and an update document as arguments, as well as an optional options document.

# delete documents

delete duplicate documents

`find` and then `deleteOne`

```c++
db.podcasts.find({upoaded: ISODate("2020-04-28")})

db.podcasts.deleteOne({ _id: Objectid("6282c9862acb966e76bbf20a")})
```

`deleteOne` accepts a `filter` and `options` object.

delete all podcasts within a category

```c++
db.podcasts.find({category: "crime"})

db.podcasts.deleteMany({category: "crime"})
```

## lab

```c++
db.birds.deleteOne({_id: ObjectId("kjk29804983nd")})

db.birds.deleteMany({sightings_count: {$lte : 10}})
```

- `deleteMany()` This method can be used to delete all documents in a collection if you pass an empty filter document to the method (i.e. `db.collection.deleteMany({})`)
- The `deleteMany()` method accepts a filter document and an optional options document as arguments and is used to delete multiple documents in a collection.
- Both the `deleteOne()` and `deleteMany()` methods will return a document that contains two properties: `acknowledged`, which is set to a boolean, and `deletedCount`, which is set to a number. The `acknowledged` property will be set to `true` if the operation was successful, and set to `false` if the operation was not successful. The `deletedCount` property will be set to the number of documents that were deleted.

# conclusion

- Replaced a single document by using db.collection.replaceOne().
- Updated a field value by using the $set update operator in db.collection.updateOne().
- Added a value to an array by using the $push update operator in db.collection.updateOne().
- Added a new field value to a document by using the upsert option in db.collection.updateOne().
- Found and modified a document by using db.collection.findAndModify().
- Updated multiple documents by using db.collection.updateMany().
- Deleted a document by using db.collection.deleteOne().

# additional reading

https://www.mongodb.com/docs/manual/reference/method/db.collection.replaceOne/?_ga=2.261274381.1211689507.1678384418-1031816687.1677704641

https://www.mongodb.com/docs/manual/reference/operator/update/?_ga=2.261274381.1211689507.1678384418-1031816687.1677704641

https://docs.mongodb.com/manual/reference/operator/update/set/?_ga=2.261274381.1211689507.1678384418-1031816687.1677704641

https://docs.mongodb.com/manual/reference/operator/update/push/?_ga=2.261274381.1211689507.1678384418-1031816687.1677704641

https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/write-operations/upsert/?_ga=2.261274381.1211689507.1678384418-1031816687.1677704641

https://www.mongodb.com/docs/manual/reference/method/db.collection.findAndModify/?_ga=2.261274381.1211689507.1678384418-1031816687.1677704641

https://www.mongodb.com/docs/manual/reference/method/db.collection.updateMany/?_ga=2.261274381.1211689507.1678384418-1031816687.1677704641

https://www.mongodb.com/docs/v5.3/reference/method/db.collection.deleteMany/?_ga=2.261274381.1211689507.1678384418-1031816687.1677704641

https://www.mongodb.com/docs/v5.3/reference/method/db.collection.deleteMany/?_ga=2.261274381.1211689507.1678384418-1031816687.1677704641