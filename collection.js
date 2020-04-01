module.exports = function(db, callback) {
  db.createCollection("interns", (err, results) => {
    console.log("Interns collection created");
    callback();
  });
};
