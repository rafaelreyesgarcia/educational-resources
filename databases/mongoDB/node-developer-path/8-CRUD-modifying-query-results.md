# sorting and limiting query results

`cursor.sort()`

`cursor.limit()`

cursor is a pointer to the result set of a query

a `find` returns a cursor and points to the documents that match that query

cursor methods are chained to queries used to perform actions on the result set before returning data to the client.

```c++
db.collection.find(<query>).sort(<sort>)

db.companies.find({category_code: "music"}).sort({name:1})

// ensures consisting sort order
db.companies.find({ category_code: "music" }).sort({ name: 1, _id: 1 });
```

the sort method accepts a document that will be used to sort the order of the returned documents.

value of `1` means the order should be `ascending`

value of `2` means the order should be `descending`

additional fields can be sorted by defining them in the document used as argument

a projection makes it easier to see only fields returned by the query

```c++
db.companies.find({category_code: "music"}, {name: 1}).sort({name:1})

db.companies.find(<query>).limit(<number>)

db.companies.find({category_code: "music"}, {name: 1, number_of_employees: 1}).sort({number_of_employees: -1}).limit(3)
```

limiting the number of results can enhance performance

`limit` allows to limit how manny documents will appear in the final data returned to the client.

## lab

```c++
// 1
sample_supplies> db.sales.find({}).sort({saleDate: 1})

// 2
db.sales.find({couponUsed: true, purchaseMethod: 'Online'})
db.sales.find({couponUsed: true, purchaseMethod: 'Online'}).sort({saleDate: -1})

// 3

db.sales.find({ "items.name": { $in: ["laptop", "backpack", "printer paper"] }, "storeLocation": "London", }).sort({ saleDate: -1, }).limit(3)
```

- `.limit()` is used to specify the maximum number of results that we want to return.
- `.sort()` takes a document that contains one or more field-value pairs. These specify the fields to sort by and the direction of the sort: 1 for ascending or -1 for descending.

# returning specific data from a query

a query returns the entire document by default

filtering data in the document is possible to save bandwidth if only certain fields are of importance.

this is called **projection**

used in `find` queries

second argument in a find query

```c++
db.inspections.findOne()

db.inspectionsfind({sector: "Restaurant - 818"})

// projection reduces the number of fields shown

// syntax
db.collection.find( <query>, <projection> )

// include syntax
db.collection.find( <query>, { <field> : 1 })

db.inspectionsfind({sector: "Restaurant - 818"}, {business_name: 1, result: 1})

// exlude syntax
db.collection.find(query, { <field> : 0, <field>: 0 })

db.inspections.find({sector: "Restaurant - 818"}, {business_name: 1, result: 1, _id: 0})
```

value of 1 is an inclusion approach

value of 0 is an exclusion approach

inclusion and exclusion can't be combined except with the `_id` field

```c++
db.inspections.find({result: {$in: ['Pass','Warning']}})

db.inspections.find({result: {$in: ['Pass','Warning']}}, {date: 0, "address.zip": 0})
```

> to access nested documents `address.zip` needs dot notation and wrap the field name with quotation marks.

## lab

```c++
// 1
db.sales.find({storeLocation: 'Denver'}, {saleDate: 1, storeLocation: 1, purchaseMethod: 1})

db.sales.find({ storeLocation: "Denver", }, { storeLocation: 1, saleDate: 1, purchaseMethod: 1, })

// 2
db.sales.find({"customer.age": {$lt: 30}, "customer.satisfaction": {$gt: 3}})

db.sales.find({"customer.age": {$lt: 30}, "customer.satisfaction": {$gt: 3}}, {"customer.age": 1, "customer.satisfaction": 1, storeLocation: 1, saleDate: 1, _id: 0})

// 3
db.sales.find({storeLocation: {$in: ['New  York', 'Seattle']}})

db.sales.find({storeLocation: {$in: ['New  York', 'Seattle']}}, {purchaseMethod: 0, customer: 0, couponUsed: 0})
```

projections
- We can include fields in our results by setting their values to 1 in the projection document.
- We can exclude fields from our results by setting their values to 0 in the projection document.
- We can either include or exclude fields in the results, but not both. However, the _id field is the exception to this rule.

# counting documents in a collection

`db.collection.countDocuments(<query>, <options>)`

query allows to select documents we want to count

```c++
db.trips.findOne()

db.trips.countDocuments()

// only count trips more than 120 minutes long
db.trips.countDocuments({tripDuration: {$gt: 120}})

// Count number of trips over 120 minutes by subscribers
db.trips.countDocuments({ tripduration: { $gt: 120 }, usertype: "Subscriber" })
```

## lab

```c++
db.sales.countDocuments()

db.sales.countDocuments({storeLocation: 'Denver', couponUsed: true})

db.sales.countDocuments({ items: { $elemMatch: { name: "laptop", price: { $lt: 600 } } } } )
```

countDocuments() overview
- The correct syntax for .countDocuments() is db.collection.countDocuments(<query>)
- We use countDocuments() with an empty document in the query parameter to count all documents in a collection.

# conclusion

return query results in specified order
`cursor.sort()`

constrain number of results
`cursor.limit()`

specify fiels to return
`db.collection.find(<query>, <projection>)`

`countDocuments()`

# additional reading

https://www.mongodb.com/docs/manual/reference/method/cursor.sort/?_ga=2.260276109.1211689507.1678384418-1031816687.1677704641

https://www.mongodb.com/docs/manual/reference/method/cursor.limit/?_ga=2.260276109.1211689507.1678384418-1031816687.1677704641

https://www.mongodb.com/docs/manual/tutorial/project-fields-from-query-results/?_ga=2.260276109.1211689507.1678384418-1031816687.1677704641

https://www.mongodb.com/docs/manual/reference/limits/?&_ga=2.260276109.1211689507.1678384418-1031816687.1677704641#mongodb-limit-Projection-Restrictions

https://www.mongodb.com/docs/manual/reference/method/db.collection.countDocuments/?_ga=2.260276109.1211689507.1678384418-1031816687.1677704641