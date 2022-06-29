/*This is the backend Node server for the ShElf Shopping list application*/
const express = require('express');
var cors = require('cors');

const API_PORT = 4000;
const app = express();

// CORS enables access to a resource from a different origin (i.e: the client)
// When the client frontend requests a resource, the response will additionally contain a stamp that tells your browser to allow resource sharing across different origins.
app.use(cors());

app.listen(API_PORT, () => {
    console.log('listening on port' + API_PORT);
})