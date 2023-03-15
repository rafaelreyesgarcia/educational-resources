# introduction

aggregation framework used to build multi-stage queries.

identify components of aggregation pipeline

**aggregation**
an analysis and summary of data

**stage**
an aggregation operation performed on the data

**aggregation pipeline**
series of stages completed one at a time in order

string together aggregations to create a pipeline

a pipeline consist of multiple stages where data can be
- filtered
- sorted
- grouped
- transformed

documents that are output from one stage, become input in the next stage

aggregation can be done in
- atlas visual editor
- the mongodb CLI
- mongo drivers

```c++
db.collection.aggregate([
  { $stage_name: {<expression>}},
  {$stage_name: {<expression>}},
])
```

`aggregate` takes an array of aggregation stages to form a pipeline

a `stage` is a single operation in the data

**stages**

- `$match` filters for data that matches criteria

- `$group` groups documents based on criteria

- `$sort` puts documents in a specified order

operations are useful individually and together

a stage
```c++
$match: {
  "student_id": 1234
  // "Grade": {$gte: 85}
}

$project: {
  total: {$sum: ['$quiz', '$homework']}
}
```

in aggregations, sometimes field names are prefixed with `$` this is a `field path` it refers to the value in the field

```c++
$set : {
  defaultUsername: {
    $concat: ['$first_name', '$last_name']
  }
}
```

overview

- aggregation and aggregation pipelines and stages
- operators and expressions
- field references

**Aggregation** 
Collection and summary of data

**Stage**
One of the built-in methods that can be completed on the data, but does not permanently alter it

**Aggregation pipeline**
A series of stages completed on the data in order

```c++
db.collection.aggregate([
  {
    $stage1: {
      { expression1 },
      { expression2 }...
    },
    $stage2: {
      { expression1 }...
    }
  }
])
```

appregation pipelines allow

- You can filter for relevant pieces of data by using aggregation, but can you change the documents in the database?
- You can group documents together by using aggregation, but can you change those documents in the database?
- You can calculate totals from a group of documents by using aggregation, but can you change those documents in the database?

# $match and $group stages in a pipeline

## match

`$match` filters for documents matching criteria. Passes the filtered documents to the next stage of the pipeline.

the match stage takes one argument (query)

```c++
{
  $match: {
    "field_name": "value"
  }
}

db.zips.aggregate([
  {$match: {"state": "CA"}}
])
```

the query works like a find command.

the match stage is ideal as early as possible in the pipeline so it uses indexes

reduces the number of documents returned so it lessens further processing required

## group

`$group` create a single document for each distinct value

groups documents by a group key

the output is one document for each unique value of the group key.

```c++
{
  $group:
    {
      _id: <expression>, //group key
      <field>: { <accumulator>: <expression> }
    }
}
{
  $group:
    {
      _id: "city",
      totalZips: { $count: { } }
    }
}
```

an accumulator is an expression that specifies how to aggregate information for each of the groups

## aggregation pipeline with both stages

```c++
db.zips.aggregate([
  {
    $match: { 'state': 'CA' }
  },
  {
    $group: {
      _id: '$city',
      totalZips: { $count: { } } // counts total zips in each city passed as a field reference returning a single document per object key (city)
    }
  }
])
```

## lab

```c++
db.sightings.aggregate([
  {
    $match: { species_common: "Eastern Bluebird" }
  },
  {
    $group: {
      _id: '$location.coordinates',
      number_of_sightings: { $count: { } }
    }
  }
])
```

# $sort and $limit stages in an aggregation pipeline

stages combined to find documents with the top or bottom values in a data set

`$sort` sorts all input documents and passes them through pipeline in sorted order

1 is used to indicate an ascending order (lesser come first)

-1 is used to indicate a descending order (greater comes first)

```c++
db.zips.findOne()

// returns a document
{
  _id: ObjectId('5cc7hj4005'),
  city: 'CROPWELL',
  zip: '35054',
  loc: { y: 33.50, x: 86.28},
  pop: 4171,
  state: 'AL'
}

db.zips.aggregate([
  {
    $sort: {
      pop: -1
    }
  }
])
```

`$limit` limits the number of documents that are passed on to the next stage.

takes a positive integer defining how many documents to retain for the next stage

```c++
db.zips.aggregate([
  {
    $sort: {
      pop: -1
    }
  },
  {
    $limit: 3
  }
])
```

## lab

```c++
db.sightings.aggregate([
  {
    $sort: {
      'location.latitude': -1
    }
  },
  {
    $limit: 4
  }
])
```

# $project, $count and $set stages

## project

`$project` determines output document shape

specifies existing or new fields that will be returned by the aggregation

projection similar to `find()` second argument

should be the last stage to format the output

```c++
$project: {
  <field>: <value>,
  <field>: <value>,
}

db.zips.aggregate([
  {
    $project: {
      state: 1,
      zip: 1,
      population: "$pop",
      _id: 0
    }
  }
])
```

the projection can be inclusive or exclusive

the value of 1 includes the field

the value of 0 excludes the field

## set

`$set` adds or modifies fields in the pipeline

useful when wanting to change existing fields or add new ones to be used in the upcoming stages.

```c++
db.zips.aggregate([
  {
    $set: {
      pop_2023: { $round: { $multiply: [1.0031, '$pop']}}
    }
  }
])

{
  $set: {
    place: {
      $concat:["$city",",","$state"]
    },
    pop:10000
  }
}
```

population increased 0.31%, this is multiplied by current population value in the field `pop` referenced, then that result is rounded as the value represents people

## count

`$count`

counts documents in the pipeline

returns the total document count

`$count: <field_name>`

```c++
db.zips.aggregate([
  {$count: "total_zips"}
])

// returns
[{total_zips: 29367}]
```

## lab

```c++
// 1
db.sightings.aggregate([
  {
    $project: {
      species_common: 1,
      date: 1,
      _id: 0
    }
  }
])

db.birds.aggregate([
  {
    $set: {
      class: 'bird'
    }
  }
])

// 2
db.sightings.aggregate([
  {
    $match: {
      date: {
        $gt: ISODate('2022-01-01T00:00:00.0Z'),
        $lt: ISODate('2023-01-01T00:00:00.0Z')
      },
      species_common: 'Eastern Bluebird'
    }
  },
  {
    $count: 'bluebird_sightings_2022'
  }
])
```
- `$set` and `$project` can both create and assign values to fields, but only $project can be used to reshape the data.
- The `$count` stage returns a document with a field named in the parameters with the value set to the number of documents at this stage in the aggregation pipeline.

# $out stage

used to create a new collection from the output of an aggregation pipeline

writes documents returned from a pipeline into a collection

must be the last stage of the pipeline

creates a new collection if it doesn't exist

if exists, replaces the existing collection with new data

```c++
$out: {
  db: '<db>',
  coll: '<newcollection>'
}

// or

{ $out: '<newcollection>' } // uses the same db used in aggregation

db.zips.aggregate([
  {
    $group: {
      _id: 'State', //groups zipcodes by state
      total_pop: { $sum: '$pop'} // sums populations of zipcodes
    }
  },
  {
    $match: {
      total_pop: {$lt: 1000000} // matches documents with population less than 1M
    }
  },
  {
    $out: 'small_states' // writes result from pipeline into a new collection small_states
  }
])
```

there's more aggregation stages

## lab

```c++
db.sightings.aggregate([
  {
    $match: {
      date: {
        $gt: ISODate('2022-01-01T00:00:00.0Z'),
        $lt: ISODate('2023-01-01T00:00:00.0Z')
      }
    }
  },
  {
    $out: 'sightings_2022'
  }
])
```

- The `$out` stage outputs the documents in the aggregation pipeline to a new collection.
- Users must be careful not to overwrite any collections unintentionally when specifying the name of the collection to output the documents to.

# conclusion

aggregation is a technique to filter, sort, group, reshape and analyze data without changing the data

allows to gain insights about data stored in collections

aggregation pipelines and components of each stage

stages
- match
- group
- sort
- limit
- project
- set
- count
- out

order of stages defines the order of operations data will go through

# additional reading

https://www.mongodb.com/docs/manual/aggregation/?_ga=2.22239419.1211689507.1678384418-1031816687.1677704641

https://www.mongodb.com/docs/manual/aggregation/?_ga=2.22239419.1211689507.1678384418-1031816687.1677704641#std-label-aggregation-pipeline-intro

https://www.mongodb.com/docs/manual/reference/operator/aggregation/match/?_ga=2.22239419.1211689507.1678384418-1031816687.1677704641

https://www.mongodb.com/docs/manual/reference/operator/aggregation/group/?_ga=2.22239419.1211689507.1678384418-1031816687.1677704641

https://www.mongodb.com/docs/manual/reference/operator/aggregation/sort/?_ga=2.22239419.1211689507.1678384418-1031816687.1677704641

https://www.mongodb.com/docs/manual/reference/operator/aggregation/limit?_ga=2.201366417.1211689507.1678384418-1031816687.1677704641

https://www.mongodb.com/docs/manual/reference/operator/aggregation/project/?_ga=2.201366417.1211689507.1678384418-1031816687.1677704641

https://www.mongodb.com/docs/manual/reference/operator/aggregation/count/?_ga=2.201366417.1211689507.1678384418-1031816687.1677704641

https://www.mongodb.com/docs/manual/reference/operator/aggregation/set/?_ga=2.201366417.1211689507.1678384418-1031816687.1677704641

https://www.mongodb.com/docs/manual/reference/operator/aggregation/out/?_ga=2.201366417.1211689507.1678384418-1031816687.1677704641
