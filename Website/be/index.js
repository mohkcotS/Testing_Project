import express from "express";
import cors from "cors";
import jokeRouter from "./routes/jokes.js";
import voteRouter from "./routes/votes.js";
import { connectToDatabase } from "./DB/index.js";

const app = express();
app.use(cors()); 
app.use(express.json());

app.use("/api/v1/jokes", jokeRouter);
app.use("/api/v1/votes", voteRouter);

const PORT = process.env.PORT || 5000;

connectToDatabase()
    .then(()=>{
        app.listen(PORT, () =>console.log("Server Open At PORT: ", PORT));
    })
    .catch((err)=>{
        console.log("Error occur with mysql connection. Error =" , err);
        process.exit(0)
    })

