// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Use body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create a new comment
app.post('/comments', function (req, res) {
  console.log(req.body);
  res.send('Comment added');
});

// Start server
app.listen(3000, function () {
  console.log('Server running on http://localhost:3000');
});
//