const {MongoClient, ObjectID} = require('mongodb');
console.log("Name  - Abhijeet Yadav");
console.log("Reg no. - 11800671");
console.log("Section - D1814");


MongoClient.connect('mongodb://localhost:27017/Family_Details', (err, client) => {
  if(err) {
    return console.log('Unable to connect the MongoDB server');
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('Family_Details');
  
  db.collection('family_details').find({Name: "Abhijeet Yadav"}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch the datas',err);
  });

});

