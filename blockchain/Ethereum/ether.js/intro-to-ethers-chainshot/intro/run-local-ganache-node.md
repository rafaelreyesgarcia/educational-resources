JSON-RPC is a way to send and receive JSON formatted messages between a client and a server.

sample request to a server

```sh
# request
{
  "jsonrpc":"2.0",
  "method":"eth_getBalance",
  "params"["0x407d73d8a49eeb85d32cf465507dd71d507100c1","latest"],
  "id":1 //main chain ID
}

# response
{
  "jsonrpc": "2.0",
  "id": 83,
  "result": "0xc30ba7" // block number in hex format :D
}
```

make the same JSON-RPC request in a command line

```sh
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":83}' https://eth-mainnet.alchemyapi.io/v2/gZgOOh1X3cpVWXeVR9EL51zC1vpbggIF
```

windows command doesn't allow single quotes and has to escape inner double ones

```cmd
curl -X POST --data “{\“jsonrpc\”:\”2.0\”,\”method\”:\”eth_blockNumber\”,\”params\”:[],\”id\”:83}” https://eth-mainnet.alchemyapi.io/v2/gZgOOh1X3cpVWXeVR9EL51zC1vpbggIF
```

install ganache

quick start it

setup network manually in metamask




