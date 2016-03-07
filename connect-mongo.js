var argsInt = parseInt(process.argv[2]);

var mongo = require('mongodb').MongoClient
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  if (err) throw err;
  
  db.collection('parrots').find({
    age: {
      $gt: argsInt
    }
  }).toArray(function(err, docs) {
    if (err) throw err
    console.log(docs)
    db.close()
  });
  
});