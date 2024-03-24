import React, { useState } from "react";
import MyProfileNav from "./MyProfileNav";
import { PiCalendarDuotone } from "react-icons/pi";
import { Link, Outlet } from "react-router-dom";

const MyProfile = () => {
    const [activeTab, setActiveTab] = useState("Posts");

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    return (
        <div className="w-full border-gray-700 border-r">
            <div className="sticky z-50 top-0">
                <MyProfileNav />
            </div>
            <div className="border-gray-700 border-b">
                <div className="bg-gray-600 w-ful h-[220px] relative">
                    <div className="w-[150px] h-[150px] bg-cyan-400 rounded-full absolute bottom-[-75px] right-[50px] left-5 border-4 border-gray-800 overflow-hidden">
                        <img
                            src="https://qph.cf2.quoracdn.net/main-qimg-68d52a4c9747f85b66e6b385c1c707d2-lq"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="px-5 flex justify-between items-start">
                    <div className="pt-24 ">
                        <div>
                            <p className="text-xl font-bold">Olivia Rodrigo</p>
                            <p className="text-gray-400">@sohun</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <PiCalendarDuotone size={22} className="pt-1" />
                            <p className="text-gray-400 my-2">
                                Joined April 2023
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <p>
                                12{" "}
                                <span className="text-gray-400">Following</span>
                            </p>
                            <p>
                                12M{" "}
                                <span className="text-gray-400">Follower</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <button className="border py-[5px] px-5 rounded-full mt-5">
                            Edit profile
                        </button>
                    </div>
                </div>
                <div className="mt-7 px-5">
                    <header className="w-full">
                        <nav className="w-full flex justify-evenly">
                            <Link
                                to="posts"
                                className={`w-full text-center py-4 hover:bg-gray-700  cursor-pointer ${
                                    activeTab === "Posts"
                                        ? "border-b-2 border-blue-500 font-bold"
                                        : "text-gray-400"
                                }`}
                                onClick={() => handleTabClick("Posts")}
                            >
                                Posts
                            </Link>
                            <Link
                                to="replies"
                                className={`w-full text-center py-4 hover:bg-gray-700  cursor-pointer ${
                                    activeTab === "Replies"
                                        ? "border-b-2 border-blue-500 font-bold"
                                        : "text-gray-400"
                                }`}
                                onClick={() => handleTabClick("Replies")}
                            >
                                Replies
                            </Link>
                            <Link
                                to="highlights"
                                className={`w-full text-center py-4 hover:bg-gray-700  cursor-pointer ${
                                    activeTab === "Highlights"
                                        ? "border-b-2 border-blue-500 font-bold"
                                        : "text-gray-400"
                                }`}
                                onClick={() => handleTabClick("Highlights")}
                            >
                                Highlights
                            </Link>
                            <Link
                                to="articles"
                                className={`w-full text-center py-4 hover:bg-gray-700  cursor-pointer ${
                                    activeTab === "Articls"
                                        ? "border-b-2 border-blue-500 font-bold"
                                        : "text-gray-400"
                                }`}
                                onClick={() => handleTabClick("Articls")}
                            >
                                Articles
                            </Link>
                            <Link
                                to="media"
                                className={`w-full text-center py-4 hover:bg-gray-700  cursor-pointer ${
                                    activeTab === "Media"
                                        ? "border-b-2 border-blue-500 font-bold"
                                        : "text-gray-400"
                                }`}
                                onClick={() => handleTabClick("Media")}
                            >
                                Media
                            </Link>
                            <Link
                                to="likes"
                                className={`w-full text-center py-4 hover:bg-gray-700  cursor-pointer ${
                                    activeTab === "Likes"
                                        ? "border-b-2 border-blue-500 font-bold"
                                        : "text-gray-400"
                                }`}
                                onClick={() => handleTabClick("Likes")}
                            >
                                Likes
                            </Link>
                        </nav>
                    </header>
                </div>
            </div>
            <div className="px-5 mt-5">
                <Outlet />
            </div>
        </div>
    );
};

export default MyProfile;
