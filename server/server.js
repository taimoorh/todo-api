var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos' , (req , res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((docs) => {
        res.send(docs);
    }, (err) => {
        res.status(400).send(err.errors.text);
    });
});

app.get('/todos' , (req, res) => {
    Todo.find().then((docs) => {
        res.send(docs);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
  
    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }
  
    Todo.findById(id).then((todo) => {
      if (!todo) {
        return res.status(404).send();
      }
  
      res.send({todo});
    }).catch((e) => {
      res.status(400).send();
    });
});
  
app.listen(port , () => {
console.log('Port is running');
});


module.exports = {app};