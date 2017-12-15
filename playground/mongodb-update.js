const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


// findOneAndUpdate
db.collection('Todos').findOneAndUpdate({
  _id: new ObjectID("5a293961c7d57f9b6344f75b")
}, {
  $set:{
    completed: true
  }
},{
 returnOriginal: false 
}).then((result) => {
    console.log(result.value);
})  
//  db.close();
});