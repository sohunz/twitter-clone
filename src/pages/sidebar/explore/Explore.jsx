import ExploreNav from "./ExploreNav";
import React, { useContext } from "react";
import Trend from "../../trending/trend/Trend";
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
