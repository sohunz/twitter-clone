import React, { useContext } from "react";
import FeedNav from "../feed/FeedNav";
import { Outlet } from "react-router-dom";
import Post from "../Posts/Post";
import ThemeContext from "../../contexts/themes/ThemeContext";

const Feed = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div
            className={
                theme === "dark"
                    ? "w-full border-gray-700 border-r bg-[#15202B]"
                    : "w-full border-gray-200 border-r text-black bg-white"
            }
        >
            <div className="sticky z-50 top-0">
                <FeedNav />
            </div>
            <div className="px-5">
                <Post />
                <Outlet />
            </div>
        </div>
    );
};

export default Feed;
