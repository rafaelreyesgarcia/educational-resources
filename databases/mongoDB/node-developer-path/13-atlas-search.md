# relevance-based search and search indexes

relevance-based vs database search

search index vs database index

components of a search index

relevance-based search is when surface records based on a search term, is not a database search for a particular record.

search through relevant items and return relevant results

atlas search starts with search indexes (used to specify how the search algo should work with a set of data)

not the same as database indexes

**database indexes** are used by developers and administrators to make queries easy and more efficient

**search indexes** specify how records are referenced for relevance-based search. Are used by application end users that queries information.

search index

```c++
{
  "analyzer": "lucene.standard",
  "searchAnalyzer": "lucene.standard",
  "mappings": {
    "dynamic": false,
    "fields": {
      "company": {
        "type": "string",
        "analyzer": "lucene.whitespace",
      },
      "employees": {
        "type": "string",
        "analyzer": "lucene.standard"
      }
    }
  }
}
```

- A search index is used to describe how the application search algorithm should work. You can customize this with Atlas Search.

# creating a search index with dynamic mapping

overview

- create a search index
- set option for dynamic mapping
- test with a query

search indexes define how a search should be performed

a search index with dynamic mapping means that when the search algorithm is run, all fields are indexed except booleans, objectIds and timestamps

atlas search tab can create a search index

visual editor or JSON editor available

`Lucene` is an open source search engine library that is the industry standard for relevance-based search

standard refers to how the data is tokenized into searchable chunks.

40+ index analyzers for multi-languages

a dynamic search looks through all of the fields for the user search term requires dynamic mapping.

a score is assigned to each result. Relevant score as calculated using lucene scoring

## lab

```c++
{
  "name": "sample_supplies-sales-dynamic",
  "searchAnalyzer": "lucene.standard",
  "analyzer": "lucene.standard",
  "collectionName": "sales",
  "database": "sample_supplies",
  "mappings": {
      "dynamic": true
  }
}

atlas clusters search indexes create --clusterName myAtlasClusterEDU -f /app/search_index.json

atlas clusters search indexes list --clusterName myAtlasClusterEDU --db sample_supplies --collection sales

// 2

mongosh -u myAtlasDBUser -p myatlas-001 $MY_ATLAS_CONNECTION_STRING/sample_supplies

db.sales.aggregate([
  {
    $search: {
      index: 'sample_supplies-sales-dynamic',
      text: {
        query: 'notepad', path: { 'wildcard': '*' }
      } } },
  {
    $set: {
      score: { $meta: "searchScore" }
      }
  }
])
```

- A search with a dynamic index will query against all of the fields, including nested fields.

- Dynamic field mapping is used to search all of the fields for the search term, with equal weight placed on all fields.

# static field mapping

default is dynamic mapping, indexing all fields

statically mapping certain fields ensures only working with relevant fields

the fields being queried are always the same

minimizes the number of fields to be indexed

create a search index defining the database and collection in atlas ui

## lab

```c++
{
  "name": "sample_supplies-sales-static",
  "searchAnalyzer": "lucene.standard",
  "analyzer": "lucene.standard",
  "collectionName": "sales",
  "database": "sample_supplies",
  "mappings": {
    "dynamic": false,
    "fields": {
      "storeLocation": {
          "type": "string"
      }
    }
  }
}

atlas clusters search indexes create --clusterName myAtlasClusterEDU -f /app/search_index.json

atlas clusters search indexes list --clusterName myAtlasClusterEDU --db sample_supplies --collection sales

// 2
mongosh -u myAtlasDBUser -p myatlas-001 $MY_ATLAS_CONNECTION_STRING/sample_supplies

db.sales.aggregate([
  {
    $search: {
      index: 'sample_supplies-sales-static',
      text: {
        query: 'London', path: { 'wildcard': '*' }
      } } },
  {
    $set: {
      score: { $meta: "searchScore" }
      }
  }
])
```

- Compound operators are used to search based on multiple operators or to give weight to certain fields. They are not reflected in this code. Review the value within "fields" and try again.

```c++
{
  "mappings": {
    "dynamic": false,
    "fields": {
      "common_name": [
      {
        "dynamic": true,
        "type": "document"
      },
      {
        "type": "string"
      }
      ]
    }
  }
}
```

# $search and compound operators

atlas includes a built-in query tool to test basic operations of search indexes

$search stage to customize

```c++
$search: {
  'index': '<index-name>',
  '<operator-name>' | '<collector-name>': {
    <operator-specification> | <collector-specification>
  },
  'highlight': {
    <highlight-options>
  },
  'count': {
    <count-options>
  },
  'returnStoredSource': true | false
}
```

`$compound` operator is nested in the search stage

specifies clauses different fields should have in the search ranking

clauses
- must (should only include results that match the cluase)
+ must not (negation of must)
- should (assign a weight to records that match the clause)
- filter (eliminates search results that don't match clauses but doesn't affect the score)

```c++
$search {
  "compound": {
    "must": [{
      "text": {
        "query": "field",
        "path": "habitat"
      }
    }],
    "should": [{
      "range": {
        "gte": 45,
        "path": "wingspan_cm",
        "score": {"constant": {"value": 5}}
      }
    }]
  }
}
```

## lab

```c++
db.sales.aggregate([
  {
    $search: {
      index: 'sample_supplies-sales-static',
      "compound": {
        "filter": [
          {
            "text": {
              "query": "Online",
              "path": "purchaseMethod"
            }
          }
        ],
        "should": [
          {
            "text": {
              "query": "notepad",
              "path": "items.name",
              "score": { "constant": { "value": 5 } }
            }
          }
        ]
      }
    }
  },
  {
    $project: {
    "items.name": 1.
    "purchaseMethod": 1,
    "score": { $meta: "searchScore" }
    }
  }
])
```

- "Must", "must not", "should", and "filter" are all clauses, but "filter" does not impact the score given to the results.

# group search results using facets

facets are buckets that we group our search results into

`$searchMeta` allows to see the facets and how many results are in each bucket

```c++
{
  'facet': {
    'operator': {
      'text': {
        'query': ['Northern Cardinal'],
        'path': 'species_common'
      }
    },
    'facets': {
      'sightingWeekFacet': {
        'type': 'date',
        'path': 'date',
        'boundaries': [
          ISODate('2022-01-01'),
          ISODate('2022-01-15'),
          ISODate('2022-01-22')
        ],
        'default': 'other'
      }
    }
  }
}
```

"facet" is an operator within $searchMeta. "operator" refers to the search operator - the query itself. "facets" operator is where we put the definition of the buckets for the facets.

## lab

```json
{
  "name": "sample_supplies-sales-facets",
  "searchAnalyzer": "lucene.standard",
  "analyzer": "lucene.standard",
  "collectionName": "sales",
  "database": "sample_supplies",
  "mappings": {
    "dynamic": true,
    "fields": {
    "purchaseMethod": [
      {
      "dynamic": true,
      "type": "document"
      },
      {
      "type": "string"
      }
    ],
    "storeLocation": [
      {
      "dynamic": true,
      "type": "document"
      },
      {
      "type": "stringFacet"
      }
    ]
    }
  }
}

atlas clusters search indexes list --clusterName myAtlasClusterEDU --db sample_supplies --collection sales

atlas clusters search indexes list --clusterName myAtlasClusterEDU --db sample_supplies --collection sales

// 3

// mongosh -u myAtlasDBUser -p myatlas-001 $MY_ATLAS_CONNECTION_STRING/sample_supplies

db.sales.aggregate([
  {
    $searchMeta: {
      index: 'sample_supplies-sales-facets',
        "facet": {
            "operator": {
                "text": {
                    "query": "In store",
                    "path": "purchaseMethod"
                }
            },
            "facets": {
                "locationFacet": {
                    "type": "string",
                    "path": "storeLocation",
                }
            }
        }
    }
  }
])
```

# additional reading

https://www.mongodb.com/docs/atlas/atlas-search/atlas-search-overview/?_ga=2.221798168.1211689507.1678384418-1031816687.1677704641

https://www.mongodb.com/docs/atlas/atlas-search/create-index/?_ga=2.221798168.1211689507.1678384418-1031816687.1677704641

https://www.mongodb.com/docs/atlas/atlas-search/query-syntax/?_ga=2.221798168.1211689507.1678384418-1031816687.1677704641#std-label-query-syntax-ref

https://www.mongodb.com/docs/atlas/atlas-search/compound/?_ga=2.221798168.1211689507.1678384418-1031816687.1677704641

https://www.mongodb.com/docs/atlas/atlas-search/facet/?_ga=2.221798168.1211689507.1678384418-1031816687.1677704641