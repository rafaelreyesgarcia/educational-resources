# mappings

**hash table** data structure that implements an associative array (dictionary).

in a dictionary, data is stored as a collection of key-value pairs.

position of data within array determined by applying a hashing algorithm to the key.

a `key` represents data to be stored in the hash table.

key is fed into a hash function which produces a hash value.

the hash value determines the index where the data will be stored in the hash table.

anytime you look up a value by key, you get the value stored in the hash table.

hash functions are deterministic

hash tables enable O(1) constant time

hash tables don't require brute force search or a for loop to lookup a value.

hashtables are called *mappings* in solidity

```
mapping(_KeyType => _ValueType) public mappingName;
```

useful for address association

associate addreses to a specific value.

```
mapping(address => uint) public sodasPurchased;
```

ERC-20 tokens use a `balanceOf` mapping to keep track of user balances.

nested mapping define multiple relationships.

DAOs might need to keep track of many proposals and whether addresses vote for or against that proposal.

https://docs.soliditylang.org/en/v0.8.4/internals/layout_in_storage.html

https://docs.openzeppelin.com/contracts/3.x/erc20

https://solidity-by-example.org/mapping/

https://ethereum.stackexchange.com/questions/2592/store-data-in-mapping-vs-array

https://ethereum.stackexchange.com/questions/46457/send-tokens-using-approve-and-transferfrom-vs-only-transfer

with a mapping each address can be mapped to a unique place in memory where it stores the uint balance.

lookingup the balance is done with square bracket notation accessing the address.

`balances[addr]`

storage location is found by hasing the balances variable location with the address as argument.

> best practice to use mappings, special usecases may require an array to iterate.

## 1. mapping definition

mapping allows to store and retrieve elements quickly with a `key`

key points to a location in memory where value is stored.

key can be of any data type.

it can't be a reference data type (`struct` and `array` or another `mapping`)

a location in memory is initialized at zero.

if a mapping is public, a getter is created so invoking the getter with an address will get the value of the mapping back using the address as key.

## 2. mapping retrieval

location of a `value` inside a mapping depends on
- variable position inside of the contract
- mapping key to find the value

variable position determined by where in the contract the mapping is defined

storage slot `0` is for the first variable and increments as more variables are defined.

```
keccak256(mappingKey + variablePositon);
```

results in a hash used to find the value stored by the mapping key.

`eth_getStorageAt` gets the memory at this location for a contract.

querying the storage position is possible independent of if `balances` is public or not.

> can scan storage of any contract by communicating with an ethereum node.

## 3. mapping removal

removing the first element of an array, means the subsequent elements have to be reordered (shifted down one position) becoming an expensive computation for large arrays.

a linked list helps *stiching* previous node with the next node.

## 4. map structs

## 5. types of balances

smart contracts can store either ether or token balances

native `value` on the message and transaction defines the ether amount.

for tokens, a `balances` mapping is updated.

smart contract is solely responsible for maintaining the user's balance.

no need to use `call` on an address to send token balances.

## 6. nested mappings

are useful for voting contracts to map an id, to an address to a boolean value.










