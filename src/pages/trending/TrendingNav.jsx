import React, { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import ThemeContext from "../../contexts/themes/ThemeContext";

const TrendingNav = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div
            className={
                theme === "dark"
                    ? "w-full py-2 bg-[#15202B]"
                    : "w-full py-2 bg-white text-black"
            }
        >
            <div className="relative">
                <FiSearch
                    size={19}
                    className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                    type="text"
                    placeholder="Search"
                    className={
                        theme === "dark"
                            ? "w-full py-3 pl-14 pr-5 rounded-full bg-gray-800 outline-none"
                            : "w-full py-3 pl-14 pr-5 rounded-full bg-[#EFF3F4] outline-none"
                    }
                />
            </div>
        </div>
    );
};

export default TrendingNav;
