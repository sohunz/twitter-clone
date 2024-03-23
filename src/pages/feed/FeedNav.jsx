import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const FeedNav = () => {
    const [activeTab, setActiveTab] = useState("Following");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="w-full bg-[#15202B] border-gray-700 border-b">
            <div className="flex justify-between items-center">
                <ul className="w-full h-full flex items-center justify-between">
                    <Link
                        to="/foryou"
                        className={`w-full font-bold text-center py-4 hover:bg-gray-700 cursor-pointer ${
                            activeTab === "For You"
                                ? "border-b-2 border-blue-500 outline-4 text-white"
                                : "text-gray-500"
                        }`}
                        onClick={() => handleTabClick("For You")}
                    >
                        For You
                    </Link>
                    <Link
                        to="/following"
                        className={`w-full font-bold text-center py-4 hover:bg-gray-700 cursor-pointer  ${
                            activeTab === "Following"
                                ? "border-b-2 border-blue-500 text-white"
                                : "text-gray-500"
                        }`}
                        onClick={() => handleTabClick("Following")}
                    >
                        Following
                    </Link>
                </ul>
                <div className="w-[60px] h-[60px] flex justify-center items-center">
                    <div className="w-[40px] h-[40px] flex items-center justify-center hover:bg-gray-700 rounded-full cursor-pointer">
                        <IoSettingsOutline size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedNav;
