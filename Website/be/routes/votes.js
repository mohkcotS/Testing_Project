import { Router } from "express";
import { createVote } from "../handlers/votes.js";
const voteRouter = Router();
voteRouter.post("/", createVote)
export default voteRouter;
