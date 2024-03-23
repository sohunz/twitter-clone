import ExploreNav from "./ExploreNav";
import React from "react";
import Trend from "../../trending/trend/Trend";

const Explore = () => {
    return (
        <div className="w-full border-gray-700 border-r">
            <div className="sticky z-50 top-0">
                <ExploreNav />
            </div>
            <p className="px-5 mt-5 mb-3 font-bold text-xl ">Trending Now</p>
            <Trend />
            <p className="px-5 mt-5 mb-3 font-bold text-xl ">Music Trending</p>
            <Trend />
            <p className="px-5 mt-5 mb-3 font-bold text-xl ">Sports Trending</p>
            <Trend />
        </div>
    );
};

export default Explore;
