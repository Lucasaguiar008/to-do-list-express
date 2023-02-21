const mongoose = require('mongoose')
mongoose.Promise = global.Promise

/*
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://lucasaguiar:lucasaguiar@cluster1.rujafxk.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("admin");
  // perform actions on the collection object
  client.close();
});*/

mongoose.connect('mongodb+srv://lucasaguiar:lucasaguiar@cluster1.rujafxk.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.error(err))


/*
// Original
mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.error(err))
*/