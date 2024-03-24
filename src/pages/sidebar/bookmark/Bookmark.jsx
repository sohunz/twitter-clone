import React from "react";
import BookmarkNav from "./BookmarkNav";

const Explore = () => {
    return (
        <div className="w-full border-gray-700 border-r">
            <div className="sticky z-50 top-0">
                <BookmarkNav />
            </div>
            <div className="flex flex-col items-center mt-16">
                <p className="text-3xl font-bold mb-3">Save posts for later</p>
                <p className="text-gray-400">
                    Bookmark posts to easily find them again in the future.
                </p>
            </div>
        </div>
    );
};

export default Explore;
