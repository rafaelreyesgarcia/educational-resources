# api key

API key is a unique identifier that grants access to an API

secret token to access a set of methods

store it in an env file to secure acces to it

quotes are only necessary if there's a space in the value

whitespace surrounding the value has no effect in a `.env` file

# 2 topics

`eth_getLogs` JSON/RPC endpoint retrieves the logs of a contract

can be used to determined total amount transfered by a particular address.

topics categorize the logs to search specific events.

topics are 32-byte hash values representing information related to the event

topics are used to filter and sort log entries

to filter for Transfer events, provide `eth_getLogs` with the topic to search for.

first topic is the *event signature*

take transfer event and hash it to get the topic representing the transfer event

stripping down a function to the function signature means removing spaces, parenthesis, commas, keywords and argument names, leave event and indexed but not types

```
event Transfer(address indexed _from, address indexed _to, uint256 _value);

Transfer(address, address, uint256);
```

the stripped down event is hashed  to get the signature so topics become available in `eth_getLogs`

add first 4 bytes to calldata of transaction

# indexed topics

`event Transfer(address indexed _from, address indexed _to, uint256 _value)`

when a topic is marked as indexed the EVM will hash the topic's value before storing it in the log entry

clients can then search for log entries based on the values of indexed topics

the first topic is the event signature, there's a max of 4 topics

the 2nd to 4th topics are indexed parameters in ordered they're defined

0x28c6c06298d514db089934071355e5743bf21d60 pad the address to

pad address out to 32 bytes

an address is 20 bytes (40 hexadecimal characters)

32 bytes is a 64 hexadecimal characters

