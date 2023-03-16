const { MongoClient } = require('mongodb')
const express = require('express')
const cors = require('cors')

require('dotenv').config()
const app = express()
app.use(cors())

const port = 8080
const uri = process.env.MONGO_URI
const client = new MongoClient(uri)
const db_name = 'sample_mflix'
const collection_name = 'movies'
const db = client.db(db_name)
const collection = db.collection(collection_name)

app.get('/find', async (req, res) => {
  try {
    const { movie } = req.query;
    // const findDocuments = await collection.find({}).limit(3).toArray()
    // console.log('found documents ->', findDocuments.length)

    // const moviesCursor = await collection.find({year: 2010}).limit(3).toArray()
    // console.log('movies from 2010: ', moviesCursor)

    // const requestedMovie = await collection.findOne({title: {$regex: movie, $options: 'i'}}, {
    //   sort: {'imdb.rating': -1},
    //   projection: {_id: 0, title: 1, imdb: 1}
    // })
    // console.log('The Movie ->', requestedMovie);

    const requestedMovie = await collection.find({title: {$regex: movie, $options: 'i'}}, {
        sort: {'imdb.rating': -1},
        // projection: {_id: 0, title: 1, imdb: 1}
      }).toArray()
    console.log(requestedMovie)
    res.send(requestedMovie)
  } catch (err) {
    console.error(err)
  }
})

async function main () {
  try {

    const db = client.db(db_name)
    const collection = db.collection(collection_name)


  } catch (err) {
    console.error(err)
  } finally {
    await client.close()
    console.log(`client closed.`)
  }
}

async function startServer() {
  await client.connect()
  console.log(`connected to database...`)
  await db.command({ping: 1})
  console.log(`pinged the deployment.`)

  app.listen(port, () => {
    console.log(`server running on port ${port}`)
  })
}

startServer()


