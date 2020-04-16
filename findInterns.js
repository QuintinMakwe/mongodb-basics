module.exports.returnFirstDoc = async (db) => {
  const firstDoc = await db.collection("myMovies").find({}).toArray();
  console.log(firstDoc[0]);
};

module.exports.returnRating7 = async (db) => {
  const movies = await db.collection("myMovies").find({ rating: 7 }).toArray();
  console.log(movies);
};

module.exports.projectTitle = async (db) => {
  const projection = await db
    .collection("myMovies")
    .find({})
    .project({ movie: 1 })
    .toArray();
  console.log(projection);
};
