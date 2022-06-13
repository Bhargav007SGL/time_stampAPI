// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/:date", function (req, res) {
  var tempDate = req.params.date;
  var createObj = {};
  if (tempDate.indexOf(`-`) != -1) {
    var UTCDate = new Date(tempDate);
    createObj["unix"] = UTCDate.getTime();
    createObj["utc"] = UTCDate.toUTCString();
    if (UTCDate == `Invalid Date` || tempDate.match(/[a-zA-Z]/)) {
      res.send({ error: "Invalid Date" })
    }
    res.send(createObj);
  }
  createObj["unix"] = tempDate;
  var UTCDate = new Date(parseInt(tempDate));
  if (UTCDate == `Invalid Date` || tempDate.match(/[a-zA-Z]/)) {
    res.send({ error: "Invalid Date" })
  }
  UTCDate = UTCDate.toUTCString();
  createObj["utc"] = UTCDate;
  res.send(createObj);
});

app.get("/api", function (req, res) {
  var currentObject = {};
  var currentDate = new Date();
  currentObject["unix"] = currentDate.getTime();
  currentObject["utc"] = currentDate.toUTCString();
  res.send(currentObject);
});
// listen for requests :)
var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + 3000);
});
