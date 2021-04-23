const {MongoClient, ObjectID} = require('mongodb');
var obj=new ObjectID();


MongoClient.connect('mongodb://localhost:27017/Family_Details', (err, client) => {
  if(err) {
    return console.log('Unable to connect the MongoDB server');
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('Family_Details')
  // toArray() - array of objects
  db.collection('family_details').find().toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch the datas',err);
  });

 // db.close();
});

