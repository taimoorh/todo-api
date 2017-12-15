const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//   db.collection('Todos').find({
//       _id: new ObjectID("5a29017b192c140874fc94cb")
//   }).toArray().then((docs) => {
//       console.log(JSON.stringify(docs , undefined , 2));
//   }, (error) => {
//       console.log(error);
//   });


// db.collection('Todos').find().count().then((count) => {
//     console.log(`the count is ${count}`);
// }, (error) => {
//     console.log(error);
// });

db.collection('Users').find({
    name: 'Alex'
}).toArray().then((res) => {
    console.log(JSON.stringify(res, undefined , 2));
}, (error) => {
    console.log(error);
});
  
//  db.close();
});