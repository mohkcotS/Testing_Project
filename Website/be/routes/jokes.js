import { Router } from "express";
import { getAllJokes } from "../handlers/jokes.js";
const jokeRouter = Router();
jokeRouter.get("/", getAllJokes)
export default jokeRouter;
