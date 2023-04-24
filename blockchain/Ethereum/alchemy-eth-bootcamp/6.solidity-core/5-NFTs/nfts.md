# non fungible tokens

two token standards ERC721 and ERC1155

data that is stored off-chain is often referred as `metadata`

if data is not on-chain it cannot be used in smart contract business logic.

## metadata storage

nft collections use decentralized file networks (IPFS and arweave)

IPFS uses **content addressing** to store data on a peer to peer network

data is stored as a hash of the contents

when requesting an image, you provide a hash and IPFS goes to find someone who is serving that hash.

https://proto.school/

looking up a resource on IPFS is done by providing the hash in the query to find the resource in question.

looking up a resource on the internet is by providing a URL and finds the location of the resource.

traditionally, if you store metadata on a server, you rely on that server to run all the time.

with IPFS, anyone serving the image can fulfill the request. if everyone stops serving the image, you can still do it yourself and the IPFS reference will still resolve.

IPFS doesn't guarantee permanence but you can incentivize anyone to host the resource.


