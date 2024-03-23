import React from "react";
import BookmarkNav from "./BookmarkNav";

const Explore = () => {
    return (
        <div className="w-full border-gray-700 border-r">
            <div className="sticky z-50 top-0">
                <BookmarkNav />
            </div>
        </div>
    );
};

export default Explore;
