// lib/mongodb.js
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectToDatabase() {
  if (!client.isConnected) {
    await client.connect();
  }
  return client.db('stuiiDb'); 
}

module.exports = connectToDatabase;
