# using mongodb node.js client libraries

when connecting to mongoDB there's a piece of middleware called drivers.

**driver** works in tandem with built-in node.json BSON package to interact with a mongoDB server

mongodb provides an asynchronous driver for node.js and other programming languages

driver establishes secure connection to mongodb clusters and executes database operations on behalf of client applications

drivers specify connection settings
- security
- write durability
- read isolation
- etc

applications must use the official driver

drivers adhere to best practices in supported programming languages.

# connecting to a cluster

install the driver using npm

connect to a mongoClient

instantiate a single mongoclient to be reused across all data requests.

initialize an npm project

`npm init -y`

install drivers and dependencies

`npm install mongodb`

retrieve connection string from atlas ui

`mongodb+srv://<username>:<password>@myatlasclusteredu.m63aaer.mongodb.net/?retryWrites=true&w=majority`

replace with database username and password

create `atlas_uri.js` to export the connection string to our entry point (`app.js`)

in `app.js` import MongoClient from `'mongodb'`

import `uri` from the `atlas_uri.js` file

instantiate a mongodb client

reference database name in a variable

create `connectToDatabase` async anonymous arrow function.

try block will invoke the `connect` method of the client instance

catch block will log an error if ocurs

create a main function that invokes `connectToDatabase` function.

finally block will close the connection by calling `close` method of the client instance.

an application should use a single mongoclient instance for all database requests.

mongoclients are resource intensive, would impact performance negatively if a new instance is created for each request.

You need only one `MongoClient` instance per Atlas cluster for your application. Having more than one `MongoClient` instance for a single Atlas cluster in your application will increase costs and negatively impact the performance of your database.

in the connection string
- You must replace the `<password>` placeholder with the password that corresponds your database user.
- You must replace the `<username>` placeholder with your username for the Atlas cluster if the username was not automatically added to the connection string.

# troubleshoot common errors

overview
- network access errors
- user authentication

connectivity issues may result from systems put in place to protect a database

by default atlas cluster has no access to outside world so network access has to be configured to whitelist an IP address.

# additional resources

https://www.mongodb.com/docs/drivers/?_ga=2.261032074.604663874.1677704641-1031816687.1677704641

https://www.mongodb.com/docs/drivers/node/current/?_ga=2.261032074.604663874.1677704641-1031816687.1677704641

https://www.mongodb.com/docs/guides/atlas/connection-string/?_ga=2.261032074.604663874.1677704641-1031816687.1677704641

https://www.mongodb.com/docs/manual/reference/connection-string/?_ga=2.261032074.604663874.1677704641-1031816687.1677704641

https://www.mongodb.com/docs/drivers/node/current/fundamentals/connection/connect/?_ga=2.261032074.604663874.1677704641-1031816687.1677704641#std-label-connect-to-mongodb

https://www.mongodb.com/docs/atlas/troubleshoot-connection/?_ga=2.261032074.604663874.1677704641-1031816687.1677704641

