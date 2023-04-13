# overview

representation of an asset on the ethereum network

assets can be
- shares
- reward system points
+ voting rights
- crypto
- tokens
- lottery tickets
- etc

increases compatibility of the ecosystem. A standard allows contracts to have variables and functions expected to be compliant to the standard.

an ERC-20 token contract uses a mapping to keep track of fungible tokens.

the ERC-20 standard defines a common interface.

rules each token has to follow in order to become compatible with the concept of a fungible token on ethereum.

functions that must be present in every implementation of the standard.

must include
- name, symbol and decimals are all optional fields
- totalSupply defines circulating supply
- balanceOf returns balance for particular user
- transfer allows transfers
- approve, transferFrom, allowance methods for other contracts moving funds

you can inherit an interface into smart contracts.

you must define methods declare on the interface.

create an ERC-20 compatible smart contract by inheriting the interface via `is`

data structures used
- **balances** is a mapping of token balances by owner. each transfer is a deduction from one balance and an addition to another balance.
- **allowances** mapping of allowances/delegate spending. nested mapping where the primary key is the address of token owner that maps to a spender address and amount delegated to spend.

two ways to change balances
- **transfer** a call to transfer
- **approve-transferFrom**

https://docs.openzeppelin.com/contracts/3.x/erc20

https://github.com/ethereumbook/ethereumbook/blob/develop/10tokens.asciidoc


by developing a standard contract interface, systems can interact with any token in the same way.

interface can refer to any set of public facing functions like an API

functions that can be accessed from the outside.

ERC-20 accepted in EIP-20 and adopted since then

# 1 erc20 tokens

you can transfer tokens or lend them via allowances

the token balance of an address is visible to the public

the term mint refers to the creation of a new token.

# 2 token configuration

**name** primary identifier and the **symbol** also an identifier

tokens can have their own custom **decimals** value indicate the number of places to move the decimal to get the representation of the token

market cap is current price multiplied by total supply.

these 3 values are not required purely added for usability

## decimals

a dollar is split in 100 cents.

decimals holds an integer 8bit unsigned integer to represent the number of decimal places tracked

1.03 maximum accuracy of dollar physical currency. decimals would be 2

bitcoin has a decimals value of 8 2.01020401 a satoshi (sat) is the smalles unit of measurement

ethereum tracks 18 decimals. smallest unit is wei 0.000000000000000001

# 3 balances

# 4 minting

set initial supply number of whole tokens multiplied bby 10**18

5 tokens in circulation = 5 * (10**18)

# 5 token transfers

# 6 transfer event

events allow clients to listen to what's happening inside the EVM.

a client subscribe to events on an ethereum node, then broadcast changes to the web interface

https://docs.alchemy.com/reference/transfers-api-quickstart