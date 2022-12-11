# **core 1**

## **reading and writing data on solana**

### **client**

interacts with the blockchain

can be
- website
- terminal
- etc

clients send requests to the blockchain (transactions)

transactions don't go directly to the blockchain

first go through **RPC**

### **Remote Procedure Call (RPC)**

- devnet
- testnet
- mainnet

gateway to access data on the blockchain

### **solana blockchain state**

data of solana accounts on the ledger

transactions can modify the state

everything on solana are accounts

### **accounts**

- executables
- wallets
- data
- etc

wallet has a public and private key

private key lets sign transactions

pay fee to validators (0.0001SOL)

interface for a wallet (ts node scripts)

## **reading data from the blockchain**

### **accounts on solana***

smart contracts on solana are programs 

programs are stateless they don't store anything except code

accounts are used for storage, contracts, native blockchain programs

**data accounts**

store data

two types 
- system owned accounts
- PDA (program derived address) acounts

**account fields**

- lamports  
number of lamports owned by this account

- owner  
program owner of this account

- executable  
if this account can process instructions (is executable)

- data  
raw data byte array stored by this account

- rent_epoch  
next epoch will owe rent

**lamports**

smallest unit of solana

one lamport = 0.000000001 SOL

public keys act like an address for the account

> solana addresses are base58 encoded strings

`executable` is a boolean field that tells if the account has executable data

**program accounts**

store executable programs, smart contracts

**native accounts**

core blockchain functions (stake, vote)

### **reading from the network**

JSON RPC endpoint can read and write to the blockchain

program (rust, C, C++) solana BPF bytecode gets deployed to the solana network

a client (command line, interface, JS SDK, rust SDK, etc) can query or create a transaction using a JSON RPC endpoint

make an API call to JSON RPC with data 

it communicates with the network

**making an API call to get the balance of an account**

```js
async function getBalanceUsingJSONRPC(address: string): Promise<number> {
  const url = clusterApiUrl('devnet')
  
  console.log(url);

  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
      'jsonrpc': '2.0',
      'id': 1,
      'method': 'getBalance',
      'params': [
        address
      ]
    })
  }).then(response => response.json())
    .then(json => {
      if (json.error) {
        throw json.error
      }

      return json['result']['value'] as number;
    })
    .catch(error => {
      throw error
    });
}

```

makes a post request telling the RPC what to do based in the body as parameters

parameters specify RPC version, id, method and parameters the method needs.

**solana web3.js SDK**

```js
async function getBalanceUsingWeb3(address: PublicKey): Promise<number> {
  const connection = new Connection(clusterApiUrl('devnet'));
  return connection.getBalance(address);
}
```

### **building a balancer**

universal balance fetcher to fetch balance of any account


installs repo dependencies (npm i, next.js)

```cmd
git clone https://github.com/buildspace/solana-intro-frontend.git

cd solana-intro-front-end

git checkout starter

npm i

```

**run next.js app**

`npm run dev`

**install solana/web3.js library**

`npm install @solana/web3.js`

**import solana/web3.js library**

`import * as web3 from '@solana/web3.js';`

**validate input field if is a solana address**

`const key = new web3.PublicKey(address);`

**make a connection to JSON RPC**

```js
  const addressSubmittedHandler = (address: string) => {
    const key = new web3.PublicKey(address);
    setAddress(key.toBase58())

    const connection = new web3.Connection(web3.clusterApiUrl('devnet'))
    
    connection.getBalance(key).then(balance => {
      setBalance(balance / web3.LAMPORTS_PER_SOL)
    })
  }
```

`key.toBase58` sets the address  
econdes solana addresses as strings

`connection` establishes a connection with devnet

`setBalance` saving the address balance to state

**error handling**

```js
const addressSubmittedHandler = (address: string) => {
  try {
    setAddress(address)

    const key = new web3.PublicKey(address)
    const connection = new web3.Connection(web3.clusterApiUrl('devnet'));

    connection.getBalance(key).then(balance => {
      setBalance(balance / web3.LAMPORTS_PER_SOL)
    });
  } catch (error) {
    setAddress('')
    setBalance(0)
    alert(error)
  }
}
```

**executable**

```jsx
const [isExecutable, setIsExecutable] = useState(false)

connection.getAccountInfo(key).then(info => {
        setIsExecutable(info?.executable ?? false)
      })

return (
  <p>{`is it executable? ${isExecutable ? 'hell yeah!' : 'nope'}`}</p>
)
```

**acccount with non-zero balance**  
B1aLAAe4vW8nSQCetXnYqJfRxzTjnbooczwkUJAr7yMS

**executable account**  
ComputeBudget111111111111111111111111111111

## **writing data on the blockchain**

### **keypairs**

to write on the blockchain, transactions have to be submitted

transaction can be rejected if certain conditions aren't met

key pairs consist in public and private pairs

public key points to the address of an account

each pub key has a corresponding private/secret key

web3.js library has a couple of helper functions

```js
// get a new keypair
const ownerKeypair = keypair.generate()

// get the public key (address)
const publicKey = ownerKeypair.publicKey

// get secret key
const secretKey = ownerKeypair.secretKey

```

secret key formats

- mnemonic phrase   
pill tomorrow foster begin walnut borrow virtual kick shift mutual shoe scatter

- bs58 string  
5MaiiCavjCmn9Hs1o3eznqDEhRwxo7pXiAYez7keQUviUkauRiTMD8DrESdrNjN8zd9mTmVhRvBJeg5vhyvgrAhG

- bytes  
[ 174, 47, 154, 16, 202, 193, 206, 113, 199, 190, 53, 133, 169, 175, 31, 56, 222, 53, 138, 189, 224, 216, 117,173, 10, 149, 53, 45, 73, 251, 237, 246, 15, 185, 186, 82, 177, 240, 148, 69, 241, 227, 167, 80, 141, 89, 240, 121, 121, 35, 172, 247, 68, 251, 226, 218, 48, 63, 176, 109, 168, 89, 238, 135, ]

```js
// private key as an array of bytes

const secret = JSON.parse(process.env.PRIVATE_KEY ?? "") as number[]
const secretKey = uint8Array.from(secret)
const keypairFromSecretKey = keypair.fromSecretKey(secretKey)
```

takes the private key in bytes format, parses it as array of numbers

casting that into a uint array

the uint array creates a keypair object from secret key 

> all modifications to state happen through transactions

all transactions interact with programs on the network

transactions give instructions to programs to execute and modify the state of the ledger

**transaction instructions**

- identifier of a program to invoke
- array of accounts that will be read from/or written to
- data structured as byte array defined for the program being invoked

### **make and send a transaction**

system program to transfer SOL

create a transfer function 

```js
const transaction = new Transaction()

const sendSolInstruction = SystemProgram.transfer({
  fromPubkey: sender,
  toPubkey: recipient,
  lamports: LAMPORTS_PER_SOL * amount
})

transaction.add(sendSolInstruction);
```

you can add multiple instructions to one transactions and they'll be carried out sequentially

send a transaction

```js
const signature = sendAndConfirmTransaction(
  connection,
  transaction,
  [senderKeypair]
)
```

***connection***

how we talk to the network via JSON RPC

***transaction***

instructions in the transfer function

last argument an array of signers

keypairs sign transactions. some transactions require multiple signatures

signing is necessary to only make changes that we are authorized to

a transfer instruction would require to prove you own the coins prior to sending them to another account

```js
export type TransactionIntructions = {
  keys: Array<AccountMeta>;
  programId: PublicKey;
  data?: Buffer;
};
```

an instruction contains 
- array of keys of type AccountMeta
- public key/addresses of the program being invoked
- an optional buffer containing data to feed the program

**keys**

each object in array represents an account that will be read from or written to during a tx execution

nodes know which accounts will be involved in a transaction

each object in the keys array must include
- `pubkey` public key of account
- `isSigner` boolean representing whether or not the account is a signer 
- `isWritable` boolean whether or not the account in written to during the tx execution.

**programId**

public key associated with the program you want to interact with

sending a transaction

```js
async function callProgram(
  connection: web3.Connection,
  payer: web3.Keypair,
  programId: web3.PublicKey,
  programDataAccount: web3.PublicKey
) {
  const instruction = new web3.TransactionInstruction({
    keys: [
      {
        pubkey: programDataAccount,
        isSigner: false,
        isWritable: true
      },
    ],
    programId,
  });

  const sig = await web3.sendAndConfirmTransaction(
    connection,
    new web3.Transaction().add(instruction),
    [payer]
  )

}
```

for every transaction broadcasted, validators must provide space and processing power.

fees are a reward to validators for their work

## **build an interaction script**

build a local client with just typescript. Faster than setting up a front-end and build UI

work in a single TS file and run it asynchronously 


### **setup local solana client**

`npx create-solana-client solana-intro-client`

say yes to install `create-solana-client`


### **setting up client script**

`index.ts` import dependencies and add `initializeKeypair` function

```ts
// We're adding these
import * as Web3 from '@solana/web3.js';
import * as fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

// creates a keypair if we don't have one

async function initializeKeypair(connection: Web3.Connection): Promise<Web3.Keypair> {
  if (!process.env.PRIVATE_KEY) {
    console.log('Generating new keypair... 🗝️');
    const signer = Web3.Keypair.generate();

    console.log('Creating .env file');
    fs.writeFileSync('.env', `PRIVATE_KEY=[${signer.secretKey.toString()}]`);

    return signer;
  }

  const secret = JSON.parse(process.env.PRIVATE_KEY ?? '') as number[];
  const secretKey = Uint8Array.from(secret);
  const keypairFromSecret = Web3.Keypair.fromSecretKey(secretKey);
  return keypairFromSecret;
}

async function main() {
}

main()
  .then(() => {
    console.log('Finished successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
```

`npm start` will setup the solana client in one command

- `Web3.Keypair.generate()` call writes the result to local dotenv

.gitignore .evn to not publish the private key to a git repository

`airdropSolIfNeeded()` function

- `getBalance`checks the balance, if its under 1 then we call the function
- blockhash and block height are block identifiers used to communicate to the network that we're up to date and that these are recent transactions.

### **call on-chain program**

the program we want to interact with

```js
const PROGRAM_ID = new Web3.PublicKey("ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa");

const PROGRAM_DATA_PUBLIC_KEY = new Web3.PublicKey("Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod");
```

- `PROGRAM_ID` address of the program
- `PROGRAM_DATA_PUBLIC_KEY` address of the account that stores data for the program.

executable code and stateful data are stored separately on solana

```js
async function pingProgram(connection: Web3.Connection, payer: Web3.Keypair) {
  const transaction = new Web3.Transaction()
  const instruction = new Web3.TransactionInstruction({
    // Instructions need 3 things 
    
    // 1. The public keys of all the accounts the instruction will read/write
    keys: [
      {
        pubkey: PROGRAM_DATA_PUBLIC_KEY,
        isSigner: false,
        isWritable: true
      }
    ],
    
    // 2. The ID of the program this instruction will be sent to
    programId: PROGRAM_ID
    
    // 3. Data - in this case, there's none!
  })

  transaction.add(instruction)
  const transactionSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [payer])

  console.log(
    `Transaction https://explorer.solana.com/tx/${transactionSignature}?cluster=devnet`
    )
}
```

- instructions is an object with three properties, the public key of all the accounts the instructions will read/write, the id of the program and the data

- `keys` is an array of account metadata for each account this instruction will read from or write to.

- you need to know what accounts will be read or written otherwise the instruction will be invalid as you can't interact with the program properly

- this tx doesn't require a signature from data account so `isSigner` is set to false. `isWritable` is true as the account will be written to.

- by explicitly defining the accounts we want to interact with, the runtime knows which txs to run in parallel

```js
// add to main()

await pingProgram(connection, signer);
```
