# what is node.js

open-source, server-side javascript runtime environment

run javascript applications outside of the browser.

wrapper around javascript engine called **v8**

node.js uses the v8 engine outisde of a browser.

enables robust, modular applications.

noSQL database technologies (couchDB, mongoDB) use javascript and JSON for queries and schemas.

node.js applications
- http web servers
- microservices/serverless API backends
- drivers for database access and querying
- interactive command-line interfaces
- desktop applications
- IoT real-time client and server libraries
- plugins for desktop
- shell scripts for file manipulation, network access
- machine learning libraries and models

node is
- high performant
- handles real-time data and heavy data flows

# how node works

node is a js runtime wrapper around the v8 engine

node can interpret and run js code on a host machine outside of a browser

runtime has access to OS I/O, file system and network

based on a single-threaded event loop

efficiently handles concurrent operations

**concurrency**
ability of the event loop to perform js callback functions

single threaded means js has only one call stack, being able to perform one operation at the time.

event loop runs code, collects and processes evemts. runs next subtasks in the event queue.

I/O operations or network calls to remote servers are blocking operations.

**blocking operation**
blocks subsequent tasks until operation is finished before next operation proceeds.

non-blocking model can run multiple I/O operations at the same time.

## node architecture

event driven architecture

event loop handles orchestration and a worker pool blocks tasks.

event loop allows node to handle concurrent operations

**phases of the event loop**
- **timers** (callbacks scheduled by `setTimeout` and `setInterval`)
- **callbakcs** run pending callbacks
- **poll** retrieves incoming I/O events and runs I/O related callbacks.
- **check** allows callbacks to be run after the poll phase is completed
- **close callbacks** closes events and callbacks.

## performance

js produces the same performance as low-level languages because of the V8 engine performance boosts.

event-driven nature of javascript makes composing server tasks fast and performant.

## asyncrhonous programming

node powers the event-based model with a built-in non-blocking I/O APIs to handle file system and database manipulation.

libuv library provides these apis.

making a request to read file from a disk, node doesn't block queued tasks.

non-blocking I/O interface notifies node.js when the file is ready.

**versions**

```
v[major].[minor].[patch]
```

# why node

node is a single-threaded non-blocking runtime based on event-driven I/O paradigm.

if a remote client makes a request, a server running on node would handle the request, construct and send back a response, and move to next request, without blocking queued tasks.

node was designed to handle a high number of concurrent requests.

# trying node

node has a built-in read-eval-print loop REPL.

REPL is an interactive console environment to enter javascript code so node interprets, runs and prints the code.

REPL mode
- read - reads and parses input (error if input is invalid)
- eval - evaluates input
- print - prints computed results
- loop - loops and waits for the user to enter a new command

`node` enables the REPL environment

you can execute javascript code from the terminal by entering the REPL environment

you can also create a file and execute it in the terminal with `node file.js`

# knowledge check

1. What is Node.js?
a javascript runtime

2. how does node handle concurrent tasks?
uses a single event loop for concurrent tasks

3. a good use case for a node.js app?
app requires a non-blocking event-driven server






