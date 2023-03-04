# intro

overview
- how to use the connection string
- where to locate connection string
- what is the connection string

allows to connect to a cluster and work with data

describes the host and options for connecting to a database

connection can be made through
- shell
- compass
- applications

two connection types for connection strings
- standard format (connects to standalone clusters, replica sets or sharded clusters)
- DNS seed list format (provides a DNS server list to a connection string, more flexibility of deployment, ability to change servers in rotation without reconfiguring clients)

connect with your application
- select driver and version

a connection string
`mongodb+srv://<username>:<password>@myatlasclusteredu.m63aaer.mongodb.net/?retryWrites=true&w=majority`

`mongodb` identifies the mongoDB connection string

connection string from atlas dashboard uses a DNS seed list entry with a list of hosts we can connect to

is the required prefix that identifies this as a standard connection string

`+srv` sets the TLS security option to true automatically, tells mongoDB to use the DNS seed list

`<username>:<password>` username and password created in the database dashboard

are the credentials that the client attempts to authenticate with. If no credientials are given, MongoDB will attempt to authenticate with the admin user

`@myatlasclusterEDU.m63aaer.mongodb.net/` host and optional port number to database, default 27017

is where our database instance is running. You can specify a host name, IP address, or UNIX domain socket. MongoDB's default port number is 27017

`?retryWrites=true&w=majority` options to be included

connection timeout, TLS, SSL, connection pooling and read/write concerns

retryWrites tells drives to automatically retry when certain write operations fail

1. Which of the pre-formatted connection strings are available in the Atlas dashboard? (Select all that apply.)

MongoDB provides a pre-formatted connection string to use with the MongoDB Shell. The connection string looks like the following:

`mongosh "mongodb+srv://myatlasclusteredu.m63aaer.mongodb.net/myFirstDatabase" --apiVersion 1 --username <username>`

MongoDB provides a pre-formatted connection string to use when connecting to an application. The connection string looks like the following:

`mongodb+srv://<username>:<password>@myatlasclusteredu.m63aaer.mongodb.net/?retryWrites=true&w=majority`

MongoDB provides a pre-formatted connection string to use with MongoDB Compass. The connection string looks like the following:

`mongodb+srv://<username>:<password>@myatlasclusteredu.m63aaer.mongodb.net/test`

# connecting to a cluster with the shell

the mongoDB shell uses the node.js REPL environment

REPL enables javascript
- variables
- functions
- conditionals
- loops
- control flow statements

REPL allows to use javascript expressions within the mongodb shell

# install mongodb shell

download shell zip file

add `mongosh` binary to `PATH` environment variable

control panel -> system and security -> advanced system settings -> environment variables

in system variables select `path` and `edit`

add a `new` environment variable

add filepath to the extracted `mongosh` binary

alternative is to install mongosh.msi

install on macOS

`brew install mongosh`

# lab

`atlas auth login`

1. use ATLAS cli to get a connection string

`mongosh` is used to connect to atlas cluster

`atlas clusters connectionStrings describe myAtlasClusterEDU`

standard connection string

`mongodb+srv://myatlasclusteredu.m63aaer.mongodb.net`

2. command gets the connection string and stores it in an environment variable.

`MY_ATLAS_CONNECTION_STRING=$(atlas clusters connectionStrings describe myAtlasClusterEDU | sed "1 d")`

`mongosh -u myAtlasDBUser -p myatlas-001 $MY_ATLAS_CONNECTION_STRING`

`db.hello()` helper command that outputs a document that describes the role of the `mongod` instance that's connected to `mongosh`


`mongosh -u myAtlasDBUser -p myatlas-001 mongodb+srv://myatlasclusteredu.m63aaer.mongodb.net`

1. Which REPL environment does the MongoDB Shell use? (Select one.)

The MongoDB Shell uses a Node REPL environment. This means that we are able to use JavaScript variable declaration, function declaration, and loops.

2. After you've installed mongosh, run mongosh -help in your terminal. Select all of the options that appear in the terminal from the following list: (Select all that apply.)

--help

--host

--file

# connecting to an atlas cluster with compass

graphical user interface to query and analyze data and compose aggregation pipelines.

> MongoDB Compass is a graphical user interface (GUI) for querying, aggregating, and analyzing data in MongoDB.

`mongodb+srv://<username>:<password>@myatlasclusteredu.m63aaer.mongodb.net/test`

compass ui

- my queries - aggregations and queries can be saved
- databases (metadata of databases available in cluster, can create a new database)
- performance (monitor performance metrics)

collections ui

- documents (search to filter documents)
- aggregations (aggregation statements to run against collections, can be exported to other languages)
- schema (help analyze structure of documents and helps optimizing)
- explain plan (understand performance of queries running against database)
- indexes (indexes that exist on specific collections, performance of specific queries)
- validation (create rules to enforce structure of documents on update and insert statements)

atlas compass allows to
- query data
- compose aggregation pipelines
- analyze data

steps to connect
1. download atlas compass
2. connect to a cluster in atlas
3. atlas cluster connection string for compass
4. new connection copy connection string with username and password
5. connect

# connecting to an atlas cluster from an application

drivers allow an application to connect to a database using a connection string.

user authentication protects access to data

if our IP address is not whitelisted, a connection error will ocurr (IP addresses can be whitelisted in `network access` tab in atlas ui)

without proper username and password a connection error will ocurr (users and passwords are managed in `database access` tab)

1. How can you fix the following error? (Select one.)

`MongoServerSelectionError: connection <monitor> to 34.239.188.169:27017 closed`

This is a network access error. You need to check the Network Access panel to ensure that your desired IP address is on the allowlist. If not, you may experience a connection timeout.

`MongoServerError: bad auth : Authentication failed`

Often, a simple misspelling of login credentials will result in an authentication error.

Even if you enter the correct username and password, you should confirm that you are connecting to the correct database deployment if you receive an authentication error.

# additional reading

https://www.mongodb.com/docs/guides/atlas/connection-string/?_ga=2.190775724.604663874.1677704641-1031816687.1677704641

https://www.mongodb.com/docs/manual/reference/connection-string/?_ga=2.190775724.604663874.1677704641-1031816687.1677704641

https://www.mongodb.com/docs/mongodb-shell/?_ga=2.190775724.604663874.1677704641-1031816687.1677704641

https://www.mongodb.com/products/compass/?_ga=2.159973818.604663874.1677704641-1031816687.1677704641

https://www.mongodb.com/docs/atlas/driver-connection/?_ga=2.159973818.604663874.1677704641-1031816687.1677704641

https://www.mongodb.com/docs/atlas/troubleshoot-connection/?_ga=2.159973818.604663874.1677704641-1031816687.1677704641