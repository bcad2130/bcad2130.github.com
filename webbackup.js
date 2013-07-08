var yes = [
	{"a" : 1, "b" : 2},
	{"a" : 10, "b" : 20}
];
var jsp = "";

// Retrieve
var MongoClient = require('mongodb').MongoClient;

var mongoUri = process.env.MONGOLAB_URI || 
  process.env.MONGOHQ_URL || 
  'mongodb://localhost/mydb';

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/spots", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
  
  //var collection = db.collection('spots');
  
  //db.collection('spots', {w:1}, function(err, collection) {});

  db.createCollection('spots', {w:1}, function(err, collection) {}); 
  

  
  //var cursor = collection.find();
  
  //printjson( cursor[4]);
  
  var collection = db.collection('spots');
  var doc1 = {'hello':'doc1'};
  var doc2 = {'hello':'doc2'};
  var lotsOfDocs = [{'hello':'doc3'}, {'hello':'doc4'}];

  collection.insert(doc1, {w:1}, function(err, result) {
	collection.findOne({'hello':'doc1'}, function(err, cat) {
		console.log( cat );
		});
  });
  //for (var i = 1; i <= 20; i++) collection.insert( { "space" : i , "taken" : "no" } )
  collection.insert(doc2, {w:1}, function(err, result) {});

  collection.insert(lotsOfDocs, {w:1}, function(err, result) {});
  
  var docs = [{mykey:1}, {mykey:2}, {mykey:3}];

  collection.insert(docs, {w:1}, function(err, result) {

    collection.find().toArray(function(err, items) {});

    var stream = collection.find({mykey:{$ne:2}}).stream();
    stream.on("data", function(item) {});
    stream.on("end", function() {});

    collection.findOne({mykey:1}, function(err, item) {
		console.log(item);console.log("item");
	});
  });
});




function parse(str) {
	jsp = eval("("+str+")");
}

var express = require('express');

var app = express.createServer(express.logger());

app.post('/', function(request, response) {
});


app.get('/', function(request, response) {
  //response.send('Hello World!');
  //parse(yes);
  if(request.params.spot.empty == true){
	
  }
  response.send(yes);
  console.log(request.params + "<==========");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});