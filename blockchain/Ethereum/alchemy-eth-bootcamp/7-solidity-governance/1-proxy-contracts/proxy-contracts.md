# storage slots

npm init -y

npm i hardhat

npx hardhat

npx hardhat node

npx hardhat run scripts/deploy.js

a storage slot is a spot where something is stored

2**256 storage slots in solidity

a variable can be allocated in any storage slot position

storage slot can be up to 32 bytes

uint256 fills entire storage slot

eth_getStorageAt is used to lookup any variable stored in a contract even without the public modifier that makes them available through a getter

```js
const value = hre.ethers.provider.getStorageAt(addr, '0x0');
```

returns the hexadecimal value of the variable

for mappings

keccak256(key + base slot of the mapping)

(0x1 + 0x2)
(0x2 + 0x2)
(0x3 + 0x3)
...

calculate storage slot of a mapping

```js
// padding to 32 bytes
const key = hexZeroPad(21, 32);
const baseSlot = hexZeroPad(0x2, 32).slice(2);
const slot = keccak256(key + baseSlot);
const value = await hre.ethers.provider.getStorageAt(addr, slot);

console.log(parseInt(value));
```

EIP-1967 has code to read/write arbitrary storage slots

all storage slots on the evm are 32 bytes (256 bits)

keccak hash creates a 256 bits output

```js
const slot = keccak256(toUtf8Bytes('rafael'));
const value = await hre.ethers.provider.getStorageAt(addr, slot);
```


```js
const storage = await hre.ethers.getContractAt('Storage', addr);

await storage.check();
```

# delegatecall

`<address>.delegatecall`

message context
- msg.sender
- msg.value
- storage

in a normal call that requires multiple contracts, each contract operates on its own context

`b.delegatecall(calldata)`

a delegatecall allows another contract to operate on the context of the contract delegating the call

proxy/implementation(logic)

the proxy lets the implementation contract to operate on the proxy context


## minimal proxy (clone)

save on gas by deploying one implementation and delegating to it

# evolution of proxies

npm init -y

npm i hardhat

npx hardhat

https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies#proxy-forwarding

