import React, { useContext } from "react";
import BookmarkNav from "./BookmarkNav";
import ThemeContext from "../../../contexts/themes/ThemeContext";

const Explore = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div
            className={
                theme === "dark"
                    ? "w-full border-gray-700 border-r"
                    : "w-full border-gray-200 border-r"
            }
        >
            <div className="sticky z-50 top-0">
                <BookmarkNav />
            </div>
            <div className="flex flex-col items-center mt-16">
                <p className="text-3xl font-bold mb-3">Save posts for later</p>
                <p
                    className={
                        theme === "dark" ? "text-gray-400" : "text-gray-500"
                    }
                >
                    Bookmark posts to easily find them again in the future.
                </p>
            </div>
        </div>
    );
};

export default Explore;
