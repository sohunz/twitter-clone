import React, { useContext, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ThemeContext from "../../contexts/themes/ThemeContext";

const FeedNav = () => {
    const { theme } = useContext(ThemeContext);
    const [activeTab, setActiveTab] = useState("Following");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div
            className={
                theme === "dark"
                    ? "w-full bg-[#15202B] border-gray-700 border-b"
                    : "w-full bg-white text-black border-gray-200 border-b"
            }
        >
            <div className="flex justify-between items-center">
                <ul className="w-full h-full flex items-center justify-between">
                    <Link
                        to="/foryou"
                        className={`w-full font-semibold text-center py-4 ${
                            theme === "dark"
                                ? "hover:bg-gray-700"
                                : "hover:bg-[#EFF3F4]"
                        } cursor-pointer ${
                            activeTab === "For You"
                                ? theme === "dark"
                                    ? "border-b-4 border-[#1D9BF0] outline-4 text-white"
                                    : "border-b-4 border-[#1D9BF0] outline-4 text-black"
                                : "text-gray-500"
                        }`}
                        onClick={() => handleTabClick("For You")}
                    >
                        For You
                    </Link>
                    <Link
                        to="/following"
                        className={`w-full font-semibold text-center py-4 ${
                            theme === "dark"
                                ? "hover:bg-gray-700"
                                : "hover:bg-[#EFF3F4]"
                        } cursor-pointer  ${
                            activeTab === "Following"
                                ? theme === "dark"
                                    ? "border-b-4 border-[#1D9BF0] text-white"
                                    : "border-b-4 border-[#1D9BF0] text-black"
                                : "text-gray-500"
                        }`}
                        onClick={() => handleTabClick("Following")}
                    >
                        Following
                    </Link>
                </ul>
                <div className="w-[60px] h-[60px] flex justify-center items-center">
                    <div
                        className={
                            theme === "dark"
                                ? "w-[40px] h-[40px] flex items-center justify-center hover:bg-gray-700 rounded-full cursor-pointer"
                                : "w-[40px] h-[40px] flex items-center justify-center hover:bg-[#EFF3F4] rounded-full cursor-pointer"
                        }
                    >
                        <IoSettingsOutline size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedNav;
