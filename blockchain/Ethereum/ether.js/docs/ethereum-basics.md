# events

logs and filtering allow efficient queries of indexed data and provide lower cost data storage.

## filters

a log is created by a contract, it can include up to 4 pieces of data to be indexed by

indexed data added to a bloom filter, data structure allowing efficient filtering.

solidity provides two types of events
- anonymous
- non anonymous


# security

**side channel attacks**

something orthogonal to the implementation of the algorithm can be exploited.

**released data**
in javascript, memory may not be securely allocated or securely released.

`new Buffer(16)` would re-use old memory that has been released, meaning code that runs later may have access to discarded data.

a buffer stores a private key, a future function can request a new buffer still having access to the private key.

**timing attack**

garbage collection attack

**key derivation function**

encrypting and decrypting  a wallet is done with the `script` algorithm.

a memory and CPU intensive algorithm computes a key for a given password

the point of being memory and CPU intensive is to only allow a single computer compute a small number of results in a fixed amount of time so if an attacker would require many more computers and more time for multiple attempts


