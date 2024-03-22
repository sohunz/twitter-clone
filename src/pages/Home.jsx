import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Trending from "./trending/Trending";
import Feed from "./feed/Feed";
import UseFetch from "../hooks/UseFetch";

const Home = () => {
    const data = UseFetch("http://localhost:8000/trending");
    console.log(data);

    return (
        <div className="max-w-[1280px] mx-auto">
            <div className="flex">
                <div className="max-w-[260px] flex-1">
                    <div className="sticky top-0">
                        <Sidebar />
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex gap-8">
                        <Feed />
                        <Trending />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
