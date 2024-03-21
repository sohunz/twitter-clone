import React from "react";
import { FiSearch } from "react-icons/fi";

const TrendingNav = () => {
    return (
        <div className="w-full py-1 bg-[#15202B]">
            <div className="relative">
                <FiSearch
                    size={19}
                    className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full py-3 pl-14 pr-5 rounded-full bg-gray-800 outline-none"
                />
            </div>
        </div>
    );
};

export default TrendingNav;
