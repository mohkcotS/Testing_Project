import { pool } from "../DB/index.js";

export const getAllJokes = async (req, res) => {
  try {
    const userToken = req.headers["user_token"];

    if (!userToken) {
      return res.status(400).json({ message: "Missing user token" });
    }

    const [rows] = await pool.promise().query(`SELECT * FROM jokes WHERE id NOT IN ( SELECT joke_id FROM votes WHERE user_token = ?) ORDER BY created_at ASC LIMIT 1`,
        [userToken]
      );

    return res.json(rows);
  } catch (error) {
    console.error("Error getting jokes:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
