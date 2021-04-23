const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Family_Details', (err, client) => {
  if(err) {
    return console.log('Unable to connect the MongoDB server');
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('Family_Details');
  db.collection('family_details').findOneAndDelete({Name: "Abhijeet Yadav"}).then((result) => {
    console.log(result, undefined, 2);
  });

 
});
