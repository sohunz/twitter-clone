import React, { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ThemeContext from "../contexts/themes/ThemeContext";

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
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const { theme } = useContext(ThemeContext);

    return (
        <ul className="absolute right-0 rounded-lg flex flex-col overflow-hidden">
            <Link
                to={`/following/${id}`}
                className={
                    theme === "dark"
                        ? "bg-gray-700 py-2 px-5"
                        : "bg-gray-200 py-2 px-5"
                }
                onClick={scrollToTop}
            >
                Edit
            </Link>

            <li
                className={
                    theme === "dark"
                        ? "bg-gray-700 py-2 px-5"
                        : "bg-gray-200 py-2 px-5"
                }
                onClick={() => deletePost(id)}
            >
                Delete
            </li>
        </ul>
    );
};

export default SeeMore;
