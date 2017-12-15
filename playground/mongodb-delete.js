const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

// deleteMany
// db.collection('Todos').deleteMany({text: "Eat Lunch"}).then((result) => {
//     console.log(result);
// });

// delteOne
// db.collection('Todos').deleteOne({text: "Eat Lunch"}).then((result) => {
//     console.log(result);
// });

// findOneAndDelete
db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
    console.log(result.value);
})  
//  db.close();
});