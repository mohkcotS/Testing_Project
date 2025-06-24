import { pool } from "../DB/index.js";

export const createVote = async (req, res) => {
    try {
        const { joke_id, user_token, vote_type } = req.body;

        if (!joke_id || !user_token || !vote_type) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const query = `
            INSERT INTO votes (joke_id, user_token, vote_type)
            VALUES (?, ?, ?)
        `;

        await pool.promise().query(query, [joke_id, user_token, vote_type]);

        return res.status(201).json({ message: "Vote recorded successfully" });
    } catch (error) {
        console.error("Error inserting vote:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
