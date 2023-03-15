const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();
const uri = process.env.ATLAS_URI;

const client = new MongoClient(uri);
const dbname = 'bank'
const collection_name = 'accounts'

const connectedCollection = client.db(dbname).collection(collection_name)

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log(`connected to the ${dbname} database.`);
  } catch (err) {
    console.log(`error, connecting to the database: ${err}`);
  }
};

const sampleAccount = {
  account_holder: 'Linus Torvalds',
  account_id: 'MDB82900923',
  account_type: 'checking',
  balance: 10000,
  last_updated: new Date(),
}

const sampleAccounts = [
  {
    account_id: 'MDB93882395461',
    accoun_holder: 'ada lovelace',
    account_type: 'checking',
    balance: 50
  },
  {
    account_id: 'MDB846521384852',
    accoun_holder: 'rafael',
    account_type: 'savings',
    balance: 40
  }
]

const insertDocuments = async () => {
  try {
    /* insert documents */

    let oneResult = await connectedCollection.insertOne(sampleAccount)
    console.log(`inserted document: ${oneResult.insertedId}`)

    let manyResult = await connectedCollection.insertMany(sampleAccounts);
    console.log(`inserted ${manyResult.insertedCount} documents`)
    console.log(result)
  } catch (err) {
    console.log(`error inserting document(s): ${err}`)
  }
}

const documentsToFind = {balance: {$gt: 4700}}
const documentToFind = {_id: new ObjectId('640b8db41461be36bc8fadef')}

const findDocuments = async () => {
  try {
    /* find documents */

    let result = connectedCollection.find(documentsToFind)
    await result.forEach((doc) => console.log(doc))

    let singleDocument = await connectedCollection.findOne(documentToFind);
    console.log('found one document');
    console.log(singleDocument)
  } catch (err) {
    console.log(`error finding document(s): ${err}`)
  }
}

const countDocuments = async () => {
  try {
    /* count documents */
    let docCount = connectedCollection.countDocuments(documentsToFind);
    console.log(`found ${await docCount} documents`)
  } catch (err) {
    console.log(`error counting documents: ${err}`)
  }
}

const documentToUpdate = {_id: new ObjectId('640b8db41461be36bc8fadee')}
// update operation to perform on the document to update
// increase the balance by 100 with $inc
const documentUpdate = {$inc: {balance: 100}}

const documentsToUpdate = {account_type: 'checking'}
const documentsUpdate = {$push: {transfers_complete: 'TR413308000'}}

const updateDocuments = async () => {
  try {
    /* updating documents */
    let updateResult = await connectedCollection.updateOne(documentToUpdate, documentUpdate)
    updateResult.modifiedCount === 1
      ? console.log('updated one document')
      : console.log('no documents updated')
    
    let updatesResult = await connectedCollection.updateMany(documentsToUpdate, documentsUpdate)
    updatesResult.modifiedCount > 0
      ? console.log(`updated ${updatesResult.modifiedCount
      } documents`)
      : console.log('no documents updated')
  } catch (err) {
    console.log(`error updating document(s): ${err}`)
  }
}

const documentToDelete = {_id: new ObjectId('640bea05a7bdf1f7973b25df')}

const documentsToDelete = {balance: {$lt: 500}}

const deleteDocuments = async () => {
  try {
    let result = await connectedCollection.deleteOne(documentToDelete)
    result.deletedCount === 1
      ? console.log('deleted one document')
      : console.log('no document deleted')
  
    let manyDeletes = await connectedCollection.deleteMany(documentsToDelete)
    manyDeletes.deletedCount > 0
      ? console.log(`deleted ${manyDeletes.deletedCount} documents`)
      : console.log(`no documents deleted`)
  } catch (err) {
    console.log(`error deleting document(s): ${err}`)
  }
}

// collections
const accounts = client.db('bank').collection('accounts')
const transfers = client.db('bank').collection('transfers')

// account information
let account_id_sender = 'MDB82900923'
let account_id_receiver = 'MDB846521384673'
let tx_amount = 100

// start the client session
const sendTx = async () => {
  // starts a session
  const session = client.startSession()
  try {
    // begins a transaction
    const transactionResults = await session.withTransaction(async () => {
      // step 1: update account sender balance by decrementing balance by tx_amount
      const updateSenderResults = await accounts.updateOne(
        {account_id: account_id_sender},
        {$inc: {balance: -tx_amount}},
        {session}
      )
      console.log(
        `${updateSenderResults.matchedCount} document(s) matched the filter, updated ${updateSenderResults.modifiedCount} document(s) for the sender account.`
      )
      // step 2: update account receiver balance by incrementing balance by tx_amount
      const updateReceiverResults = await accounts.updateOne(
        {account_id: account_id_receiver},
        {$inc: {balance: tx_amount}},
        {session}
      )
      console.log(
        `${updateReceiverResults.matchedCount} document(s) matched the filter, updated ${updateReceiverResults.modifiedCount} document(s) for the receiver account.`
      )
      // step 3: insert the transfer document in the transfers collection'
      const transfer = {
        transfer_id: 'TR21872187',
        amount: tx_amount,
        from_account: account_id_sender,
        to_account: account_id_receiver,
      }

      const insertTransferResults = await transfers.insertOne(transfer, {session})
      console.log(
        `sucessfully inserted ${insertTransferResults.insertedId} into the transfers collection.`
      )
      // step 4: update transfers_complete field for the sender account
      const updateSenderTransferResults = await accounts.updateOne(
        {account_id: account_id_sender},
        {$push: {transfers_complete: transfer.transfer_id}},
        {session}
      )
      console.log(
        `${updateSenderTransferResults.matchedCount} document(s) matched in the transfers collection, updated ${updateSenderTransferResults.modifiedCount} document(s) for the sender account.`
      )
      // step 5: update transfers_complete for receiver
      const updateReceiverTransferResults = await accounts.updateOne(
        {account_id: account_id_receiver},
        {$push: {transfers_complete: transfer.transfer_id}},
        {session}
      )
      console.log(
        `${updateReceiverTransferResults.matchedCount} document(s) matched in the transfers collection, updated ${updateReceiverTransferResults} document(s) for the receiver account.`
      )

      console.log('committing transaction...')
    })
    if (transactionResults) {
      console.log('the reservation was successfully created.')
    } else {
      console.log('the transaction was intentionally aborted.')
    }
  } catch (err) {
    console.log(`transaction aborted: ${err}`)
    process.exit(1)
  } finally {
    // frees up connection resources
    await session.endSession()
    await client.close()
  }
}

const main = async () => {
  try {
    // await connectToDatabase();

    // await insertDocuments();

    // await findDocuments();

    // await countDocuments()

    // await updateDocuments()

    // await deleteDocuments()

    await sendTx()

  } catch (err) {
    console.log(`error connecting to databae: ${err}`);
  } finally {
    await client.close();
    console.log(`closed connection to database: ${dbname}`);
  }
};

main();