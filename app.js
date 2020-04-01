const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const createCollection = require("./collection");

const url = "mongodb://localhost:27017";

const dbName = "Quintin";

MongoClient.connect(url, (err, client) => {
  console.log("Database created by Quintin");

  const db = client.db(dbName);

  createCollection(db, () => {
    client.close();
  });
});
