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

app.get("/api", function (req, res) {
  var currentObject = {};
  var currentDate = new Date();
  currentObject["unix"] = currentDate.getTime();
  currentObject["utc"] = currentDate.toUTCString();
  res.json(currentObject);
});

app.get("/api/:date", function (req, res) {
  var tempDate = req.params.date;
  var createObj = {};
  if (tempDate.indexOf(`-`) != -1 || tempDate.includes('GMT')) {
    var UTCDate = new Date(tempDate);
    createObj["unix"] = UTCDate.getTime();
    createObj["utc"] = UTCDate.toUTCString();
    if (UTCDate == `Invalid Date` || tempDate.match(/[a-zA-Z]/)) {
<<<<<<< HEAD
     return res.json({ error: "Invalid Date" })
    }
   return res.json(createObj);
=======
      return res.send({ error: "Invalid Date" })
    }
    return res.send(createObj);
>>>>>>> 92cc622a012fb0b777c40f646f55ec2e0a7921c6
  }
  createObj["unix"] = parseInt(tempDate);
  var UTCDate = new Date(parseInt(tempDate));
  if (UTCDate == `Invalid Date` || tempDate.match(/[a-zA-Z]/)) {
<<<<<<< HEAD
   return res.json({ error: "Invalid Date" })
  }
  UTCDate = UTCDate.toUTCString();
  createObj["utc"] = UTCDate;
 return res.json(createObj);
=======
    return res.send({ error: "Invalid Date" })
  }
  UTCDate = UTCDate.toUTCString();
  createObj["utc"] = UTCDate;
  return res.send(createObj);
});

app.get("/api", function (req, res) {
  var currentObject = {};
  var currentDate = new Date();
  currentObject["unix"] = currentDate.getTime();
  currentObject["utc"] = currentDate.toUTCString();
  return res.send(currentObject);
>>>>>>> 92cc622a012fb0b777c40f646f55ec2e0a7921c6
});
// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
