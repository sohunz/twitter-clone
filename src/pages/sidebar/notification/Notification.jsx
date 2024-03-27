import React, { useState } from "react";
import NotificationNav from "./NotificationNav";
import { Link, Outlet } from "react-router-dom";

const Notification = () => {
    const [activeTab, setActiveTab] = useState("All");

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="w-full border-gray-700 border-r bg-[#15202B]">
            <div className="sticky z-50 top-0">
                <NotificationNav />
            </div>
            <div className="border-gray-700 border-b sticky z-40 top-[75px] bg-[#15202B] ">
                <header className="w-full">
                    <nav className="w-full flex justify-evenly">
                        <Link
                            to="all"
                            className={`w-full text-center py-4 hover:bg-gray-700 duration-200 cursor-pointer ${
                                activeTab === "All"
                                    ? "border-b-2 border-[#1D9BF0]"
                                    : ""
                            }`}
                            onClick={() => handleTabClick("All")}
                        >
                            All
                        </Link>
                        <Link
                            to="verified"
                            className={`w-full text-center py-4 hover:bg-gray-700 duration-200 cursor-pointer ${
                                activeTab === "Verified"
                                    ? "border-b-2 border-blue-500"
                                    : ""
                            }`}
                            onClick={() => handleTabClick("Verified")}
                        >
                            Verified
                        </Link>
                        <Link
                            to="mention"
                            className={`w-full text-center py-4 hover:bg-gray-700 duration-200 cursor-pointer ${
                                activeTab === "Mentions"
                                    ? "border-b-2 border-blue-500"
                                    : ""
                            }`}
                            onClick={() => handleTabClick("Mentions")}
                        >
                            Mentions
                        </Link>
                    </nav>
                </header>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Notification;
