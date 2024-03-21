import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Trending from "./trending/Trending";
import Feed from "./feed/Feed";

const Home = () => {
    return (
        <div className="max-w-[1280px] mx-auto">
            <div className="flex">
                <div className="max-w-[260px] flex-1">
                    <div className="sticky top-0">
                        <Sidebar />
                    </div>
                </div>
                <div className="flex-1">
                    {/* <div className="sticky top-0 z-50">
                        <Navbar />
                    </div> */}
                    <div className="flex">
                        <Feed />
                        <Trending />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
