const express = require('express')
const app = express();
const port = 80;


var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = "mongodb://18215030:rmfFf5OmF9YbLcsdYkKJZ2HYSSs3S8bwG2PbHVlZkrWlv9q5FHlsgN7JAJzkCaAIhGhwzzT1lYOOv4IYn0ZmNw==@18215030.mongo.cosmos.azure.com:10255/?ssl=true&appName=@18215030@";
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;



//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log("Connection Successful!");
    
    // define Schema
    var NamaSchema = mongoose.Schema({
      nama: String,
      umur: Number
    });
 
    // compile schema to model
    var Nama = mongoose.model('NAMA', NamaSchema, 'ok123');
 
    // a document instance
    var book1 = new Nama({ nama: 'Kukuh', umur: 40 });
 
    // save model to database
    book1.save(function (err, book) {
      if (err) return console.error(err);
    });
    
});


app.get('/ok', (req, res) => {
  
  res.send(
    'hai'
  )
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});