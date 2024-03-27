import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SeeMore = ({ id }) => {
    // delete
    const deletePost = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/posts/${id}`);
            setPosts(posts.filter((post) => post.id !== id));
        } catch (err) {
            console.log(err.message);
        }
    };
    return (
        <ul className="absolute right-0 rounded-lg bg-[#15202B] flex flex-col overflow-hidden">
            <Link to={`/following/${id}`} className="bg-gray-700 py-2 px-5">
                Edit
            </Link>

            <li
                className="bg-gray-700 py-2 px-5"
                onClick={() => deletePost(id)}
            >
                Delete
            </li>
        </ul>
    );
};

export default SeeMore;
