/*This is the backend Node server for the ShElf Shopping list application*/
const express = require('express');
var cors = require('cors');

const API_PORT = 4000;
const app = express();

// CORS enables access to a resource from a different origin (i.e: the client)
// When the client frontend requests a resource, the response will additionally contain a stamp that tells your browser to allow resource sharing across different origins.
app.use(cors({
    origin: 'http://localhost:3000'
})); // add origin to this function to allow those apps to communicate

const testData = [
    {
        "id": "1",
        "item": "testItem",
        "done": "true"
    },
];

app.get("/", function(req, res){
    res.send("HELLO WORLD");
    });
  

app.listen(API_PORT, () => {
    console.log('Listening on port: ' + API_PORT);
})