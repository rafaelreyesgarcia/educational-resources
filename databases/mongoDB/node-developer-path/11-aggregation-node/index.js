import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config()

const uri = process.env.MONGODB_URI
const client = new MongoClient(uri);

const pipeline = [
  {$match: { balance: { $lt: 130000 } } },
  {
    $group: {
      _id: '$account_type',
      total_balance: { $sum: '$balance' },
      avg_balance: { $avg: '$balance' },
      total_accounts: {$count: {}}
    }
  }
]

const pipeline2 = [
  // stage 1: match - filter documents (checking, balance >= 1500)
  {
    $match: {account_type: 'checking', balance: {$gte: 1500}},
  },
  // stage 2: sort - sort documents by balance in descending order
  {
    $sort: { balance: -1}
  },
  // stage 3: project - project requested fields and compute gbp_balance field
  {
    $project: {
      _id: 0,
      account_id: 1,
      account_type: 1,
      balance: 1,
      gbp_balance: { $divide: ['$balance', 1.3]}
    }
  }
]

const aggregation = async () => {
  try {

    let accounts = client.db('bank').collection('accounts')
    let result = await accounts.aggregate(pipeline2)
    for await (const doc of result) {
      console.log(doc)
    }
  } catch (err) {
    console.error(err)
  } finally {
    await client.close()
  }
}

const main = async () => {
  try {
    await client.connect()
    console.log(`connected to database.`)
    const accounts = client.db('bank').collection('accounts')
    const documentsToFind = {balance: {$gt: 5000}}
    const cursor = await accounts.find(documentsToFind)
    cursor.forEach(doc => console.log(doc))
  aggregation()
  } catch (err) {
    console.log(err)
  }
}

main()