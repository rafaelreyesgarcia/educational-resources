# intro to mongoDB atlas: developer data platform

atlas is a database as a service.

you don't have to manage the databse yourself, atlas handles the lifecylce details.

**replica set** data is stored in more than one server

ensures data redudancy and high availability

in atlas there's 2 types of **database deployments**
- serverless (scales on demand, only charges for usage)
- clusters (several mongodb servers together)

shared clusters include a free tier.

dedicated clusters are larger clusters that have enhanced security features. Preferred choice for production workflows

multiple cloud providers available when deploying a cluster.
- AWS
- google cloud
- microsoft azure

deploy in multiple regions and multiple clouds.

always have the option to change
- scaling tier
- region
- cloud provider

atlas includes operational insights and backups with point-in-time restore as well as online archive

**atlas CLI** **or administration API** manages everything.

**mongodb aggregation search query**

**atlas device sync** allows to keep data in sync between cloud and mobile or edge devices.

**atlas data lake** allows to extract data from databases to your own data lake environment.

data lake is optimized for analytical queries.

**atlas data federation** allows to
- query
- transform
- aggregate
- write

data from databases, data lakes or custom cloud storage provider.

atlas app services offer capabilities to build faster
- data API (read/write data with standard http requests)
- graphQL API
- create applications with event-driven architectures

# quiz

1. Which of the following is something that you can do with MongoDB Atlas? (Select all that apply.)

- Store your data with MongoDB's multi-cloud, global service.

The database is the core of MongoDB's developer data platform. It is a multi-cloud database service built for resilience, scale, and the highest levels of data privacy and security.

- Add search functionality to your application, like a search bar.

MongoDB Atlas Search is an embedded full-text search that gives you a seamless, scalable experience for building relevance-based app features.

- Write and host a full application in a managed cloud environment.

Application Services are cloud services that simplify building applications with Atlas.

- Query across multiple Atlas clusters to get a holistic view of your data.

Data Federation allows you to natively query, transform, and move data across AWS S3 and MongoDB Atlas clusters.

2. Which of the following statements are true about MongoDB Atlas Clusters? (Select all that apply.)

-  A MongoDB Atlas Cluster is a group of servers that are connected via a network that hold copies of your data.

- MongoDB Atlas Clusters can be deployed globally in a single geographical region or across multiple geographical regions, depending on the cluster tier.

Free and shared clusters can be deployed in a single geographical region, while dedicated clusters can be deployed across multiple geographical regions.

- Dedicated clusters provide access to all Atlas features.

# creating and deploying at atlas cluster

+ setup atlas account
- deploy atlas cluster
+ use data explorer

**organizations** group and define users and teams. grants access to projects.

**projects** define and organize resources.

creating separate projects for developing, testing and production environments is common.

## create a database

1. deploying a database

- serverless
- dedicated
- shared

the cloud provider and region settings
- AWS
- google cloud
- azure

regions
- north america
- south america
- europe
- middle east
- australia
- asia
- africa

cluster tier
- M0 free
- M2
- M5
- M10

additional settings
- turn on backup
- termination protection

2. security quickstart

no user or ip address can access the database by default.

- create an administrator user.
- create access point for IP address

in order to work from a local machine, an IP address has to be added to the access list of the cluster.

## database deployments

`load sample dataset` will add new sample data to the database.

after data is uploaded, data is visible in **data explorer**

`browse collections` open data explorer and allows to view, filter and modify data.

databases can have collections.

the documents can be filtered in a collection ` {field: value} `

# create an atlas account

use the atlas CLI to create an atlas account.

create an account

`atlas auth register`

copy verification code.

click registration tab to log into mongoDB and authenticate by pasting verification code.

then select a project to connect to.

# deploy atlas cluster

```sh
atlas setup --clusterName myAtlasClusterEDU --provider AWS --currentIp --skipSampleData --username myAtlasDBUser --password myatlas-001 | tee atlas_cluster_details.txt
```

command will leave you connected to the cluster through `mongosh`

# load sample dataset into atlas cluster using atlas CLI

`atlas clusters loadSampleData cluster2`

Sample Data Job 63ffd0c1bf2c192fb9e7df6c created.

then the sample dataset is designed to provide data to explore best practices in schema design.

# quiz

1. What is the default name assigned to your first Project in your Atlas account? (Select one.)

Project 0

2. What is the Data Size of your new Atlas cluster, Cluster0? (Select one.)

0.0

# additional reading

https://www.mongodb.com/basics/clusters?_ga=2.168149286.604663874.1677704641-1031816687.1677704641

https://www.mongodb.com/docs/atlas/?_ga=2.168149286.604663874.1677704641-1031816687.1677704641

https://www.mongodb.com/docs/atlas/getting-started/?_ga=2.193907882.604663874.1677704641-1031816687.1677704641

https://www.mongodb.com/docs/atlas/tutorial/deploy-free-tier-cluster/?_ga=2.193907882.604663874.1677704641-1031816687.1677704641

https://www.mongodb.com/docs/atlas/sample-data/?_ga=2.193907882.604663874.1677704641-1031816687.1677704641




