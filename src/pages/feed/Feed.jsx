import React from "react";
import FeedNav from "../feed/FeedNav";
import { Outlet } from "react-router-dom";
import Post from "../Posts/Post";

const Feed = () => {
    return (
        <div className="w-full border-gray-700 border-r">
            <div className="sticky z-50 top-0">
                <FeedNav />
            </div>
            <div className="px-5">
                <Post />
                <Outlet />
                <Outlet />
                <Outlet />
                <Outlet />
                <Outlet />
            </div>
        </div>
    );
};

export default Feed;
