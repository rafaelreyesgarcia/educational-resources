# programming secure smart contracts

- public chain
- quorum
- solo
- machines

building on top of computers

a blockchain is a logical machine built out of agreement (consensus)

**solo machine** is a physical conventional machine

**quorum machine** give rise to logical machines (permission quorum mechanisms like hyperledger)

**vats** is a level of abstraction between these machines

vats speak to each other with cryptographic messages authenticating the sender of messages

messages are sent using js ocaps

object capabilities subset (jessie)

agoric stack
- machines (public chain, quorum, solo,)
- vats
- JS ocaps
- erights (smart contracts)

while smart contract manipulate rights, they create new rights that can be manipulated by smart contracts

higher order contracting is possible with ocaps

agoric system comes in three layers
- VatTP (protocol that builds the vat level of abstraction)
- CapTP (capability transfer protocol)
- ERTP (electronic rights transfer protocol) rights and contract abstraction level from the cap level

## object-capabilities

A invokes B.method(C) passing C as an argument

messages references are the only thing that casues causality

an object can only affect another object by invoking (provoking) its public interface (behavior)

an object can only affect the world outside itself according to the references that holds

references are the only representation of permission

reference graph becomes identical from the access control graph

natural expressivity of object oriented programming is leveraged for rich security patterns like electronic rights and smart contracts

### immediate call, return

dot notation is the immediate control return control flow 

A invokes B.method(C) passing C

A calls B
transfers control to B
B executes and returns to A
everything that B does is part of A tx
A is suspended so B can call A anytime even though A could be transitioning state (the DAO hack was a re-entry attack leveraging an asynchronous callback while the caller was handling state)

this kind of call is only safe when both objects are in the same vat

## eventual send, promise

infix bang operator

A invokes B !method(C)

used for asynchronous invocations

sends the message through B eventually to be delivered to B in a separate tx

when A sends the message, a promise is returned with what the result will be

a promise protects both objects

A tx completes without being affected by B behavior, functionality and activity

when B receives the message starts a new tx

the same eventual send can be done in the promise

eventual sends are based on promises which are based on promised based on an early e-language co-created by mark miller

objects are hosted on different machines creating different vats as agoric is a decentralized network

traditional javascript only deals with one event loop (vat)

each object in a vat is divided in two sections
- local SES (Secure ecmascript)
- CapTP (serialization layer)

all the objects that are part of an application are inside the local SES

CapTP is the infrastrucutre that allows messages to be sent from one another

the captp in order to do serialization between vats needs a connection (references) between a pair of vats

import/export tables are the endpoints of an object. the export is the public interface that allows a certain object access 

computation on a blockchain can't keep secrets

hand off tables have a restricted rule only A can instruct C on what to export

only vat B can instruct vat C as to what to take out

when an object sends a message does it through a local proxy (route) that contains a serialized message

steps of serialization
- vat A gives vat B a give to message
- when vat B asks vat C an index that vat A made up, give it the object itself
- after `giveTo` the message is sent to vat B
- once it arrives is deserialized sending a `takeFrom`to C

the vatTP layer is in charge of encrypting and decrypting messages

CapTP is in charge of serialization and deserialization of messages

these routes have to eventually merge together but the order in which they merge is non-deterministic at which point a deterministic decision has to be made, this is before adding consensus 

### vats running on quorum chains

vat B is a 2 out of 3 quorum each layer of vatB is a separate physical machine, can be separately own, different administrative domains, trusted or not trusted

anything that 2 out of 3 machines in a quorum agree with is by definition what the vat did

instead of messages needing to be delivered separately, the vat reaches consensus so all layers coordinate with each other so there's an order agreement

messages are build up in consensus and when a decision has been made, messages are delivered in a specific order this is where validation proves that the messages are processing the same computation

there's adapters that manage vat routing

a vat is a unit of portability (migration)

# erights

object references are permissions



