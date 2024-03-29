import React, { useContext, useState } from "react";
import MyProfileNav from "./MyProfileNav";
import { PiCalendarDuotone } from "react-icons/pi";
import { Link, Outlet } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { RiLink } from "react-icons/ri";
import ThemeContext from "../../contexts/themes/ThemeContext";

const MyProfile = () => {
    const [activeTab, setActiveTab] = useState("Posts");

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

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
                <MyProfileNav />
            </div>
            <div
                className={
                    theme === "dark"
                        ? "border-gray-700 border-b"
                        : "border-gray-200 border-b"
                }
            >
                <div className="bg-[#425364] w-full h-[190px] relative  z-0">
                    <div className="w-full h-[190px] overflow-hidden">
                        <img
                            src="https://pbs.twimg.com/profile_banners/323319539/1703842234/1080x360"
                            alt=""
                        />
                    </div>
                    <div className="w-[150px] h-[150px] bg-[#1D9BF0] rounded-full absolute bottom-[-75px] right-[50px] left-5 border-2 border-gray-800 overflow-hidden z-20">
                        <img
                            src="https://admin.itsnicethat.com/images/_fsej_vmVYPAz138de7knz6lEFA=/243516/format-webp%7Cwidth-1440/twitter-x-logo-graphic-design-itsnicethat-01.jpeg"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                {/* <div className="bg-[#425364] w-ful h-[190px] relative overflow-hidden z-0">
                    <img
                        src="https://pbs.twimg.com/profile_banners/224359740/1706041090/1080x360"
                        alt=""
                    />
                    <div className="w-[150px] h-[150px] bg-[#1D9BF0] rounded-full absolute bottom-[-75px] right-[50px] left-5 border-2 border-gray-800 overflow-hidden z-20">
                        <img
                            src="https://admin.itsnicethat.com/images/_fsej_vmVYPAz138de7knz6lEFA=/243516/format-webp%7Cwidth-1440/twitter-x-logo-graphic-design-itsnicethat-01.jpeg"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div> */}

                <div className="px-5 flex justify-between items-start">
                    <div className="pt-24 ">
                        <div>
                            <span className="flex items-center gap-1">
                                <p className="font-bold text-2xl">Sohunz</p>
                                <RiVerifiedBadgeFill
                                    size={18}
                                    className="text-[#1D9BF0]"
                                />
                            </span>
                            <p
                                className={
                                    theme === "dark"
                                        ? "text-gray-400"
                                        : "text-gray-600"
                                }
                            >
                                @sohunz
                            </p>
                        </div>
                        <div className=" mt-4">
                            <div>
                                <p>what's happening?!</p>
                            </div>

                            <div className=" text-gray-400 flex items-center gap-2">
                                <div className="flex items-center gap-1">
                                    <GrLocation />
                                    <p
                                        className={
                                            theme === "dark"
                                                ? "text-gray-400"
                                                : "text-gray-600"
                                        }
                                    >
                                        Everywhere
                                    </p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <RiLink size={22} className="pt-1" />
                                    <p className="text-[#1D9BF0] my-2">
                                        <a
                                            href=""
                                            className={
                                                theme === "dark"
                                                    ? "text-gray-400"
                                                    : "text-gray-600"
                                            }
                                        >
                                            about.x.com
                                        </a>
                                    </p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <PiCalendarDuotone
                                        size={22}
                                        className="pt-1"
                                    />
                                    <p
                                        className={
                                            theme === "dark"
                                                ? "text-gray-400 my-2"
                                                : "text-gray-600 my-2"
                                        }
                                    >
                                        Joined February 2007
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <p className="text-sm">
                                <span className="font-bold">12 </span>
                                <span
                                    className={
                                        theme === "dark"
                                            ? "text-gray-400"
                                            : "text-gray-600"
                                    }
                                >
                                    Following
                                </span>
                            </p>
                            <p className="text-sm">
                                <span className="font-bold">24M </span>
                                <span
                                    className={
                                        theme === "dark"
                                            ? "text-gray-400"
                                            : "text-gray-600"
                                    }
                                >
                                    Follower
                                </span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <button className="border-gray-600 border py-[5px] px-5 rounded-full mt-5">
                            Edit profile
                        </button>
                    </div>
                </div>
                <div className="mt-5 px-5">
                    <header className="w-full">
                        <nav className="w-full flex justify-evenly">
                            <Link
                                to="posts"
                                className={`w-full text-center py-4 ${
                                    theme === "dark"
                                        ? "hover:bg-gray-700"
                                        : "hover:bg-[#EFF3F4]"
                                }  cursor-pointer ${
                                    activeTab === "Posts"
                                        ? "border-b-2 border-[#1D9BF0] font-semibold"
                                        : theme === "dark"
                                        ? "text-gray-400"
                                        : "text-gray-600"
                                }`}
                                onClick={() => handleTabClick("Posts")}
                            >
                                Posts
                            </Link>
                            <Link
                                to="replies"
                                className={`w-full text-center py-4 ${
                                    theme === "dark"
                                        ? "hover:bg-gray-700"
                                        : "hover:bg-[#EFF3F4]"
                                }  cursor-pointer ${
                                    activeTab === "Replies"
                                        ? "border-b-2 border-[#1D9BF0] font-semibold"
                                        : theme === "dark"
                                        ? "text-gray-400"
                                        : "text-gray-600"
                                }`}
                                onClick={() => handleTabClick("Replies")}
                            >
                                Replies
                            </Link>
                            <Link
                                to="highlights"
                                className={`w-full text-center py-4 ${
                                    theme === "dark"
                                        ? "hover:bg-gray-700"
                                        : "hover:bg-[#EFF3F4]"
                                }  cursor-pointer ${
                                    activeTab === "Highlights"
                                        ? "border-b-2 border-[#1D9BF0] font-semibold"
                                        : theme === "dark"
                                        ? "text-gray-400"
                                        : "text-gray-600"
                                }`}
                                onClick={() => handleTabClick("Highlights")}
                            >
                                Highlights
                            </Link>
                            <Link
                                to="articles"
                                className={`w-full text-center py-4 ${
                                    theme === "dark"
                                        ? "hover:bg-gray-700"
                                        : "hover:bg-[#EFF3F4]"
                                }  cursor-pointer ${
                                    activeTab === "Articls"
                                        ? "border-b-2 border-[#1D9BF0] font-semibold"
                                        : theme === "dark"
                                        ? "text-gray-400"
                                        : "text-gray-600"
                                }`}
                                onClick={() => handleTabClick("Articls")}
                            >
                                Articles
                            </Link>
                            <Link
                                to="media"
                                className={`w-full text-center py-4 ${
                                    theme === "dark"
                                        ? "hover:bg-gray-700"
                                        : "hover:bg-[#EFF3F4]"
                                }  cursor-pointer ${
                                    activeTab === "Media"
                                        ? "border-b-2 border-[#1D9BF0] font-semibold"
                                        : theme === "dark"
                                        ? "text-gray-400"
                                        : "text-gray-600"
                                }`}
                                onClick={() => handleTabClick("Media")}
                            >
                                Media
                            </Link>
                            <Link
                                to="likes"
                                className={`w-full text-center py-4 ${
                                    theme === "dark"
                                        ? "hover:bg-gray-700"
                                        : "hover:bg-[#EFF3F4]"
                                }  cursor-pointer ${
                                    activeTab === "Likes"
                                        ? "border-b-2 border-[#1D9BF0] font-semibold"
                                        : theme === "dark"
                                        ? "text-gray-400"
                                        : "text-gray-600"
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
