const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const { createInterns, createMovies } = require("./interns");
const {
  returnFirstDoc,
  returnRating7,
  projectTitle,
} = require("./findInterns");

const { updateMovie } = require("./updateInterns");

const url = "mongodb://localhost:27017";

const dbName = "Quintin";

MongoClient.connect(url, (err, client) => {
  console.log("Database created by Quintin");

  const db = client.db(dbName);

  createInterns(db);

  createMovies(db);

  returnFirstDoc(db);

  returnRating7(db);

  projectTitle(db);

  updateMovie(db);

  client.close();
});
