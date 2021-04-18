var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db("library");
    dbo.createCollection("films", function (err, res) {
        if (err) {
            throw err;
        }

        console.log("Collection films was created!");

        db.close();
    });
});

module.exports = MongoClient;