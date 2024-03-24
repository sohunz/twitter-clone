import React from "react";
import ListNav from "./ListNav";

const Explore = () => {
    return (
        <div className="w-full border-gray-700 border-r">
            <div className="sticky z-50 top-0">
                <ListNav />
            </div>
            <div>
                <p className="px-5 mt-5 mb-3 font-bold text-xl ">
                    Discover new Lists
                </p>
                <p className="px-5 mt-5 mb-3 font-bold text-xl ">Your Lists</p>
            </div>
        </div>
    );
};

export default Explore;
