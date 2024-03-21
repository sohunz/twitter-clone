import React from "react";
import FeedNav from "../feed/FeedNav";

const Feed = () => {
    return (
        <div className="w-full border-r">
            <div className="sticky z-50 top-0">
                <FeedNav />
            </div>
            <div>
                <p>Feed</p>
            </div>
        </div>
    );
};

export default Feed;
