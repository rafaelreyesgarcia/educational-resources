# building a pipeline in node

aggregation framework is similar to find but it provides primitive operations

a pipeline is composed of stages and expression operators

built-in stages
- finding
- sorting
- grouping
- projecting

query pipeline makes it easier to debug and maintain each individiual stage

expression operators are similar to functions

```c++
db.accounts.find({ account_id: 'MDB643731035'})

[
  {
    _id: ObjectId(''),
    account_id: 'MDB643731035',
    account_holder: 'Rafael Reyes',
    account_type: 'checking',
    balance: Decimal128('424'),
    transfers_complete: [
      'TR2278',
      'TR2279',
      'TR2280',
      'TR2281'
    ]
  }
]
```

```js
var pipeline = [{
  $match: {
    account_type: 'savings',
    balance: {
      $gt: 1000
    }
  },
  {
    $project: {
      _id: 0,
      account_holder: {
        $toUpper: '$account_holder'
      },
      balance: 1,
      account_type: {
        $toUpper: '$account_type'
      }
    }
  }
}]
```

aggregation allows to filter, sort, organize and analyze data

stages can use expression operators to process computations on field values.

- Aggregation operations process data records and return computed results. When working with data in MongoDB, you may have to quickly run complex operations that involve multiple stages to gather metrics for your project. Generating reports and displaying useful metadata are just two major use cases where MongoDB aggregation operations can be incredibly useful, powerful, and flexible.

- An aggregation pipeline consists of one or more stages that process documents. Each stage performs an operation on the input documents. For example, a stage can filter documents, group documents, or calculate values.

# $match and $group aggregation stages in node

## match

`$match` filters documents to pass to the next stage that matches specified conditions

equality matches

```c++
$match: {author: 'Dave'}

$match: {likes: {$gt: 100}}
```

should be placed early in the pipeline to reduce number of documents to process.

## group

`$group` separates documents into groups according to a group key. output is one document per each unique group key

the group key can be a field in the document or an expression that resolves to a field.

can perform calculations on grouped documents

```c++
$group: { _id: '$movie', totalTickets: {$sum: '$tickets'}}
```

aggregate method returns a cursor where we can iterate over to get the results.

# $sort $project stages in node

`$sort` sorts input documents and returns them in sorted order (ascending 1, descending -1)

`$project` passes documents with the requested fields to the next stage.

requested fields can be existing or newly computed fields

## example

find checking accounts with a balance greater than 1500, sort result in descending order. Only return
- balance
- balance in british pounds
- account_type
- account_id

GBP/USD = 1.30

document structure

```c++
{
  _id: ObjectId(''),
  account_id: 'MDB01',
  account_holder: 'Rafael',
  account_type: 'savings',
  balance: Decimal128('3977.14'),
  transfers_complete: []
}
```

other aggregation stages `$unwind` `$bucket`

# additional reading

https://www.mongodb.com/docs/drivers/node/current/fundamentals/aggregation/?_ga=2.268548849.1211689507.1678384418-1031816687.1677704641

https://www.mongodb.com/docs/manual/core/aggregation-pipeline/?_ga=2.268548849.1211689507.1678384418-1031816687.1677704641

https://www.mongodb.com/docs/manual/reference/operator/aggregation-pipeline/?&_ga=2.268548849.1211689507.1678384418-1031816687.1677704641#std-label-aggregation-pipeline-operator-reference

