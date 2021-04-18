require("@babel/register")({})
const express = require('express');
const mongoClient = require('./mongo-client');
const jsonParser = express.json()
const app = express();

app.listen(8181, function () {
    console.log('Express server listening on port 8181');
});

app.use(jsonParser); // JSON parsing
app.use(express.static(__dirname + "/public")); // static file serer ( public/  folder)
app.get('/api', function (req, res) {
    res.send('API is running');
});
