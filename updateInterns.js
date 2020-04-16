module.exports.updateMovie = async (db) => {
  const updatedMovie = await db
    .collection("myMovies")
    .findOneAndUpdate(
      { movie: "The Banker" },
      { $set: { movie: "The matrix", year: "2012", rating: "10" } },
      { returnOriginal: false }
    );
  console.log(updatedMovie.value);
};
