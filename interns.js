module.exports.createInterns = (db) => {
  db.createCollection("interns", (err, results) => {
    console.log("Interns collection created");
  });
};

module.exports.createMovies = async (db) => {
  const insertedMovies = await db.collection("myMovies").insertMany([
    { movie: "The Banker", year: "2020", rating: 8 },
    { movie: "Bad Boys", year: "2020", rating: 7 },
    { movie: "The Hunt", year: "2020", rating: 7 },
    { movie: "Bloodshot", year: "2020", rating: 7.5 },
    { movie: "First Cow", year: "2020", rating: 6.5 },
  ]);
  console.log("just inserted them");
};
