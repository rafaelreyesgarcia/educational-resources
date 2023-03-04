const { MongoClient } = require('mongodb');
const uri = require('./atlas_uri');

// console.log(uri);

const client = new MongoClient(uri);
const dbname = "bank"

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log(`connected to the ${dbname} database.`);
  } catch (err) {
    console.log(`error, connecting to the database: ${err}`);
  }
};

const main = async () => {
  try {
    await connectToDatabase();
  } catch (err) {
    console.log(`error connecting to databae: ${err}`);
  } finally {
    await client.close();
    console.log(`closed connection to database: ${dbname}`);
  }
};

main();