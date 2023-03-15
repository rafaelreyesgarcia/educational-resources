# intro

what are indexes?

how they improve performance?

cost of using indexes?

special data structures that store small portion of the data ordered and easy to search efficiently.

indexes point to the document identity and allows to
- lookup
- access
- update

data faster

indexes improve query performance
- speed up queries
- reduce disk I/O
- reduce resources required

support equality matches and range based operations

indexes store data in an ordered form based on the index fields and value sort order provided

without indexes mongodb reads all documents (a collection scan) to check if the documents match the query.

sorts result in memory

with indexes only fetches the documents indentified by the index based on the query

only one index created per collection by default that includes `_id` field

every query should use an index

indexes come with a write performance cost

insert or update a document, the index data structure also needs to be updated.

mongodb most common index types

- single field
- compound (include more than one field in the index)

both index types can be multikey indexes that operate on an array field

- Indexes are data structures that improve performance, support efficient equality matches and range-based query operations, and can return sorted results. Indexes achieve this by allowing MongoDB to perform only the work necessary to return the data that is requested, rather than scanning the entire collection.

- Indexes help make querying faster for users by only scanning the indexes to find the data that is requested.

- Indexes improve query performance at the cost of write performance. For most use cases, this tradeoff is acceptable. Indexes should be used on data that is frequently queried or on queries that are infrequent but costly in terms of computational resources.

**Single field index**: A single field index is an index on a single field of a document. MongoDB creates a single field index on the _id field by default, but additional indexes may be needed for other fields as well. A single field index can also be a multikey index if it operates on an array field.

**Compound index**: MongoDB supports compound indexes, where a single index structure holds references to multiple fields within a collection's documents. A compound index is created by specifying the fields that the index should reference, followed by the order in which the fields should be sorted. The order of the fields in the index is important because it determines the order in which the documents are returned when querying the collection. A compound index can also be a multikey index if one of the fields is an array.

**multikey index**: multikey index is an index on an array field. Each element in the array gets an index key, which supports efficient querying against array fields. Both single and compound can have an array field.

# creating a single field index

`createIndex()`

enforce uniqueness in the index

identify indexes `getIndexes()`

`db.collection.createIndex({fieldname:1})`

```c++
db.customers.find({birthdate:{$lt:ISODate('1966-08-01')}}).sort({birthdate: 1})

db.customers.createIndex({email: 1}, {unique: true})

db.customers.getIndexes()

db.customers.explain().find({birthdate:{$lt:ISODate('1966-08-01')}}).sort({birthdate: 1})
```

the second parameter `unique` ensures uniqueness in the index field values so any inserts or updates including duplicated values will fail

the `explain()` command returns the query plan. The execution plan provides details of execution stages (IXSCAN, COLLSCAN, FETCH, SORT, etc)

winning plan lists stages that are executed when query runs.

- A single-field index is an index that supports efficient querying against a single field. By default, all collections have a single field index on the _id field, but users can define additional indexes that support important queries. A single field index can also be a multikey index if the specified field is an array.

## lab

```c++
db.transfers.getIndexes()

db.accounts.findOne()
db.accounts.createIndex({account_id: 1}, {unique: true})

db.accounts.explain().find({account_id: 'MDB829000996'})
```

# create multikey index

multikey indexes can be single or compound

```c++
{
  _id: ObjectId,
  name: string,
  email: string,
  birthdate: date,
  accounts: array,
}
```

an index defined in an array is called multikey

can index primitives, subdocuments or subarrays

```c++
db.customers.createIndex({accounts:1})

db.customers.createIndex({email:1, accounts:1})
```

one array field per index

if index has multiple fields only one can be an array

mongodb internally decomposes the array and stores each unique value found in it as an individual index entry

multikey indexes need to fetch the documents after the IXSCAN stage because index entries each of the array values stored separately

- multikey indexing is when any index that where the indexed fields contain an array
- array can hold nested objects and other types

- Multikey indexes support efficient queries against array fields by creating an index key for each element in the array. This allows MongoDB to search for the index key of each element in the array rather than scan the entire array, which results in dramatic performance gains in your queries.

maximum number of array fields per multikey index?

1

The maximum number of array fields per multikey index is 1. If an index has multiple fields, only one of them can be an array.

## lab

```c++
db.accounts.createIndex({transfers_complete: 1})

db.accounts.explain().find({ transfers_complete: { $in: ["TR617907396"] } })
```

# compound indexes

index on multiple fields

can also be multikey indexes including an array field

max one array field per index

support queries that match on the prefixes of the index fields

```c++
db.customers.createIndex({active: 1, birthdate: -1, name: 1})

// can use index
db.customers.find({active: true}).sort({birthdate:-1})
db.customers.find({birthdate:{$lt:ISODate('1995-08-010')}, active:true})

// can't
db.customers.find({birthdate:{$lt:ISODate('1995-08-01')}})
```

the order of the fields in a compound index matters

equality first, sort and then range

equality predicates test exact matches on single fields

```c++
findOne({active: true})
find({birthdate:ISODate('1995-08-01')})
```

sort predicates determine the order of the results

```c++
sort({name: 1})
sort({birthdate:-1})
sort({name:1, birthdate:-1})
```

sort order is important if query results are sorted by more than 1 field and they mix sort orders

range and sort should be placed after equality

```c++
find({birthdate: {$gte:ISODate('1997-01-01'), $lt: ISODate('1995-01-01')}})

db.customers.find({
  birthdate: {
    $gte: ISODate('1977-01-01')
  },
  active: true
}).sort({
  birthdate: -1,
  name: 1
})

db.customers.find({birthdate:{$gte: ISODate('1977-01-0')}, active: true}).sort({birthdate: -1, name: 1})

db.customers.createIndex({active:1, birthdate:-1, name:1})


db.customers.find({
  birthdate: {
    $gte: ISODate('1977-01-01')
  },
  active: true
}, {
  name: 1,
  birthdate: 1,
  _id: 0
}).sort({
  birthdate: -1,
  name: 1
})
```

projection optimizes the query because there's no extra step to read the documents

covering a query is done by avoiding the fetch stage

```c++
db.customers.find({
  birthdate: {
    $gte:ISODate("1977-01-01") // range query
  },
  active:true // equality match
}).sort({ // sort operations
  birthdate:-1,
  name:1
})

// efficient index for this query
db.customers.createIndex({
  active: 1,
  birthdate: -1,
  name: 1
})
```

## execution stages

**IXSCAN**
indicates query is using an index and what index is selected

**COLLSCAN**
collection scan is performed not using indexes

**FETCH**
documents are being read from the collection

**SORT**
indicates documents are being sorted in memory

## cover a query by the index

an index covers a query when mongo doesn't need to fetch data from memory since all data is already returned by the index

projections can be used to return only required fields and cover the query.

fields in the projection should be in the index

the execution plan only runs `IXSCAN` and `PROJECTION_COVERED` all information needed is returned by the index so no need to fetch from memory

```c++
db.customers.explain().find({
  birthdate: {
    $gte:ISODate("1977-01-01")
  },
  active:true
},
  {name:1,
    birthdate:1,
    _id:0
}).sort({
  birthdate:-1,
  name:1
})
```

- A compound index is an index that contains references to multiple fields within a document. Compound indexes are created by adding a comma-separated list of fields and their corresponding sort order to the index definition.

- he recommended order of indexed fields in a compound index is Equality, Sort, and Range. Optimized queries use the first field in the index, Equality, to determine which documents match the query. The second field in the index, Sort, is used to determine the order of the documents. The third field, Range, is used to determine which documents to include in the result set.

# deleting indexes

indexes improve performance

indexes have a write cost (insert and update requires the index keys to update as well)

too many indexes in a collection can affect system performance

before deleting an index, make sure its not being used

deleting an index that is the only index supporting a query, will affect performance

without a suitable index, collections have to scan every document in the collection

we can delete any index except the default index on `_id`

recreating an index takes time and resources

if unsure, best to hide the index instead of deleting it

`db.collection.hideIndex(<index>)`

mongo doesn't use hidden indexes in queries but continues to update their keys

unhiding an index is faster than recreating it

some indexes might be redundant

`find({username: 'rafael93'})`

`username_1`

`find({username: 'rafael93, active: true})`

`username_1_active_1`

```c++
db.customers.getIndexes()

// index
{
  v: 2,
  key: {active: 1, birthdate: -1, name: 1},
  name: 'active_1_birthdate_-1_name_1'
}
```

the index key is the list of fields and the sort order when creating the index

best practice to keep index hidden than deleting it

```c++
db.customers.hideIndex('active_1_birthdate_-1_name_1')
db.customers.hideIndex({active: 1, birthdate: -1, name: 1})

db.customers.dropindex('active_1_birthdate_-1_name_1')
db.customers.dropIndex({active: 1, birthdate: -1, name: 1})

db.coll.dropIndexes()
```

`dropIndex` deletes an index and specify the index by name or by key

`dropIndexes` drops all indexes in the collection except for the `_index`default

```c++
db.collection.dropIndexes([
  'index1name', 'index2name', 'index3name'
])
```

- The performance of the query will be negatively affected by the deletion of the only index that is currently supporting that query. Indexes generally improve the performance and time efficiency of queries by reducing the number of times that the database needs to be accessed.

## lab

```c++
db.accounts.explain().find({ account_holder: "Puja Barbier" })

db.accounts.dropIndex('account_holder_1')
```

# additional reading

https://www.mongodb.com/docs/manual/indexes/?_ga=2.194736685.1211689507.1678384418-1031816687.1677704641

https://www.mongodb.com/docs/manual/reference/indexes/?_ga=2.194736685.1211689507.1678384418-1031816687.1677704641

https://www.mongodb.com/docs/manual/reference/method/db.collection.createIndex/?_ga=2.194736685.1211689507.1678384418-1031816687.1677704641

https://www.mongodb.com/docs/manual/core/index-unique/?_ga=2.194736685.1211689507.1678384418-1031816687.1677704641

https://www.mongodb.com/docs/manual/tutorial/measure-index-use/?_ga=2.194736685.1211689507.1678384418-1031816687.1677704641

https://www.mongodb.com/docs/manual/reference/method/db.collection.getIndexes/?_ga=2.194736685.1211689507.1678384418-1031816687.1677704641

https://www.mongodb.com/docs/manual/core/index-multikey/?_ga=2.230784799.1211689507.1678384418-1031816687.1677704641

https://www.mongodb.com/docs/manual/core/index-compound/?_ga=2.230784799.1211689507.1678384418-1031816687.1677704641

https://www.mongodb.com/docs/manual/applications/indexes/?_ga=2.230784799.1211689507.1678384418-1031816687.1677704641

https://www.mongodb.com/docs/manual/reference/method/db.collection.dropIndex/?_ga=2.230784799.1211689507.1678384418-1031816687.1677704641

https://www.mongodb.com/docs/manual/reference/method/db.collection.dropIndexes/?_ga=2.230784799.1211689507.1678384418-1031816687.1677704641