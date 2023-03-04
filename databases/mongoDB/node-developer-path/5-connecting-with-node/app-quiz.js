const {MongoClient} = require('mongodb');
const uri = 'mongodb+srv://rafael:rafael@myatlasclusteredu.m63aaer.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const listDatabases = async (client) => {
  const databasesList = await client.db().admin().listDatabases();
  console.log('databases:')
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

const main = async () => {
  try {
    await client.connect()
    await listDatabases(client)
    await client.close()
  } catch (err) {
    console.log(err)
  }
}

main();