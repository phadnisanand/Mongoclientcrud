const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/';
const dbName = 'myDatabase';
const client = new MongoClient(url, { useUnifiedTopology: true });

let db;

client.connect().then(() => {
  console.log("Connected successfully to MongoDB server");
  db = client.db(dbName);
}).catch(err => {
  console.error("Failed to connect to MongoDB server", err);
});

const getUsersCollection = () => db.collection('users');

module.exports = { getUsersCollection };
