/*This is the backend Node server for the ShElf Shopping list application*/
import express, {Express} from 'express';
import mongoose from 'mongoose';
import cors from "cors";

const PORT : string | number = process.env.PORT || 4000;
const app : Express = express();

// CORS enables access to a resource from a different origin (i.e: the client)
// When the client frontend requests a resource, the response will additionally contain a stamp that tells your browser to allow resource sharing across different origins.
app.use(cors({
    origin: 'http://localhost:3000'
})); // add origin to this function to allow those apps to communicate

// Database uri
const uri: string =
`
mongodb+srv://
${process.env.MONGODB_USERNAME}:
${process.env.MONGODB_PASSWORD}@clustergcb.gq6neu4.mongodb.net/
${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority
`;

app.get("/", function(req, res){
    res.send("HELLO WORLD");
    });
  

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT);
})