# create EVM subnet on local network

## avalanche CLI 

with avalanche CLI developers can
- set up a local network
- create a subnet
- customize the subnet/VM configuration

[avalanche cli github](https://github.com/ava-labs/avalanche-cli)

```sh
curl https://raw.githubusercontent.com/ava-labs/avalanche-cli/main/scripts/install.sh --output install.sh

# run install script
sh install.sh

# change avalanche CLI directory to match avalanche CLI commands

cd bin 
export PATH=$PWD:$PATH
```

## creating subnet on local network using avalanche cli

```sh
avalanche subnet create firstsubnet
```

this command prompts several options
- chose VM: subnetEVM
- pick a chain ID: 1234
- token symbol: test
- subnet-EVM version: use latest version
- set fees: low disk user / low throughput
- airdrop: 1 million tokens to default address (not for production)
- add custom precompile to modify EVM: no

after selecting all options, the subnet will successfully be configured

```sh
# view a list of all subnets created
avalanche subnet list

# or in case of error
./avalanche subnet list
```

## deploy subnet to local network

```sh
avalanche subnet deploy firstsubnet
# select local network option
```

once deployed the configuration details are printed out in the terminal.

the RPC URL is a set of communication protocols and interfaces that the client uses to interact with blockchains.

RPC URL is the address of a node, so in order to interact with firstsubnet we need its RPC URL to be able to communicate with it

## understanding subnet details

```sh
avalanche subnet describe firstsubnet
```

- subnet and blockchain ID are generated on deployment.

details section
- subnet name
- chainID
- token name
- local network subnet ID
- local network blockchain ID

gas config section
- gasLimit
- minBaseFee
- targetGas
- BaseFeeChangeDenominator
- MinBlockGasCost
- MaxBlockGasCost
- TargetBlockRate
- BlockGasCostStep

airdrop section
- shows account that has been given all initial tokens

precompiles section
- shows information if option is selected when creating the configuration

## using postman to get chain ID of subnet

- in `avalanche` collections tab, open `EVM` folder and `POST eth_chainId`
- subnet RPC URL should be used as URL for the request

## using postman to check base fee of subnet

- base fee is minimum fee to charge for a tx on a blockchain
- this endpoint allows to query the base fee for each transaction on the subnet determined by the pre-set configuration during creation of the subnet

## cURL commands

- client URL, command line tool used to transfer data to and from a server.
- lets you communicate with a server by defining its location (URL) and the data you want to send it
- the server returns a response 

2 ways to obtain cURL commands to issue API calls to the blockchain
1. avalanche documentation
2. postmant's feature of converting requests to other programming languages, code snippets that convert the request to be formatted in the target language

## using cURL command to get chain ID

```sh
curl -X POST --data '{
  "jsonrpc":"2.0",
  "id"   :1,
  "method" :"eth_chainId",
  "params" :[]
}' -H 'content-type:application/json;' {replace_with_your_RPC_URL}
```

## using cURL command to get base fee of subnet

```sh
curl -X POST --data '{
  "jsonrpc":"2.0",
  "id"   :1,
  "method" :"eth_baseFee",
  "params" :[]
}' -H 'content-type:application/json;' {replace_with_your_RPC_URL}
```

## using cURL command to get account balance

```sh
curl -X POST --data '{                                                                           
  "jsonrpc":"2.0",
  "id"   :1,
  "method" :"eth_getBalance",
  "params" :[
"replace_with_the_airdrop_wallet_address",
 "latest"
   ]
}' -H 'content-type:application/json;' {replace_with_your_RPC_URL}
```


