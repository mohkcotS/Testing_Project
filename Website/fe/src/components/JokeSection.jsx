import { useEffect, useState } from "react";
import axios from "axios";

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function setCookie(name, value, days = 365) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; path=/; expires=${expires}`;
}
export const JokeSection = () => {
    const [joke, setJoke] = useState({});

    const fetchJoke = async () => {
        try {
            const userToken = getCookie("userToken");
            const res = await axios.get("http://localhost:5000/api/v1/jokes", {
                headers: {
                    "user_token": userToken
                }
            });
            setJoke(res.data.length > 0 ? res.data[0] : null);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleVote = async (like, jokeId) => {
        if (!jokeId) return;

        const userToken = getCookie("userToken");
        const vote_type = like ? "like" : "dislike";

        try {
            await axios.post("http://localhost:5000/api/v1/votes", {
                joke_id: jokeId,
                user_token: userToken,
                vote_type
            });

            fetchJoke();
        } catch (err) {
            console.error("Lỗi khi gửi vote:", err);
        }
    };

    useEffect(() => {
        let userToken = getCookie("userToken");
        if (!userToken) {
            userToken = crypto.randomUUID();
            setCookie("userToken", userToken);
        }
        fetchJoke();
    }, []);
    
    return (
        <div className="h-100 w-full border-b-1 border-gray-300 flex flex-col justify-center items-center">
            <div className="flex w-full flex-col gap-12 h-60 pt-4 justify-center items-center">
                <p className={`w-[800px] ${joke && joke.content ? "" : "text-center"}`}>
                    {joke && joke.content ? joke.content : "That's all the jokes for today! Come back another day!"}
                </p>
                <hr className="px-10 w-[40%] text-gray-200" />
            </div>

            <div className="h-40 w-[40%] flex justify-center gap-5 text-white">
                <button onClick={() => handleVote(true, joke?.id)} className="w-[40%] h-12 bg-[#2c7edb] cursor-pointer">This is Funny!</button>
                <button onClick={() => handleVote(false, joke?.id)} className="w-[40%] h-12 bg-[#29b363] cursor-pointer">This is not funny!</button>
            </div>
        </div>
    )
}