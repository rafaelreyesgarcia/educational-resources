# avalanchego apis

goals
- describe APIs and their use
- describe avalanchego
- use avalanchego to interact with the blockchain
- describe keystore API

## introduction to APIs

application programming interface

- software intermediaries that allow two applications to communicate with each other.
- API lets a product or service communicate with others components.
- can be used to access data from third-parties
- can be used to hide complexity to perform tasks
- can extend functionality
- be used as gatekeepers (a centralized method to access resources or perform tasks)
- APIs use a set of definitions and protocols.
- act as messengers between 2 systems taking requests and returning responses back to a user.

## avalanche public API server

-allows developers to interact with the network without needing to run a node.
- can issue API calls on the three built in blockchains
- run by avalanchego nodes behind a load balancer ensuring a high availability and high request throughput
- the base URL endpoint has to be modified depending the network you want to connect to.

URL endpoints
avalanche mainnet - https://api.avax.network
avalanche fuji testnet - https://api.avax-test.network

- in addition to access a specific endpoint, appending the correct endpoint to the URL is needed.

## avalanchego APIs

cURL stands for **client URL**

is a command line tool that developers use to send data to and from a server.

cURL allows to communicate with a server by specifying its location and some data to be sent to it

cURL is a frequently used tool to send API calls.

you need to be familiar with cURL to send API calls so avalanche created a postman collection to download and import to issue API calls with.

## postman

- GUI that issues API calls in a formatted and readable manner.
- postmant collections are a group of saved requests.
- every request sent in postman appears under history.
- reusing requests is convenient.
- time-consuming to find a request in history.
- saving all requests as a group for later easier access.
- avalanche environment for postman defines IP variables, avalanche addresses and similar common variables.

1. create postman account and download app or use web version.
2. create a workspace and import links

[avalanche postman collection](https://raw.githubusercontent.com/ava-labs/avalanche-postman-collection/master/Avalanche.postman_collection.json)

[environment variables](https://raw.githubusercontent.com/ava-labs/avalanche-postman-collection/master/Example-Avalanche-Environment.postman_environment.json)

3. set the environment variables to active.
4. change baseURL by changing CURRENT_VALUE value to https://api.avax-test.network

## making calls to p-chain

- avalanche folder in collections tab.
- expand platformVM and press on POST getBalance
- in the body of the request change address to the address you want to read.
- 
