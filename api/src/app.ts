/**
 * This is the backend Node server for the ShElf Shopping list application
 */
import express, { Express } from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import router from "./routes";


const app : Express = express();

const PORT : string | number = process.env.PORT || 4000;

// allow cross origin requests from the client frontend of this project hosted on port 3000
app.use(cors({
    origin: 'http://localhost:3000'
})); // add origin to this function to allow those apps to communicate
app.use(router);

// Connnecting to DB
const uri: string =
`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@clustergcb.gq6neu4.mongodb.net/?retryWrites=true&w=majority`

mongoose
.connect(uri)
.then(() =>
    app.listen(PORT, () =>
        console.log(`Node server running on port http://localhost:${PORT}`)
    )
)
.catch(e => {
    throw e;
});
