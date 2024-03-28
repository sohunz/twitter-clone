import React, { useContext, useEffect, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { RiNotification4Line } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { RiFileListLine } from "react-icons/ri";
import { VscBookmark } from "react-icons/vsc";
import { HiOutlineUsers } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi";
import { CiCircleMore } from "react-icons/ci";
import { RiMoreLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "axios";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import DataContext from "../../contexts/DataContext";
import { IoSettingsOutline } from "react-icons/io5";
import ThemeContext from "../../contexts/themes/ThemeContext";

const Sidebar = () => {
    const data = useContext(DataContext);
    const [notificationCount, setNotificationCount] = useState(0);

    const fetchPost = async () => {
        try {
            const response = await axios.get("http://localhost:8000/posts");
            setNotificationCount(
                response.data.reduce(
                    (count, post) => count + (post.count || 0),
                    0
                )
            );
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        fetchPost();
    }, [data]);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const { theme } = useContext(ThemeContext);
    return (
        <div
            className={
                theme === "dark"
                    ? "min-w-[280px] max-w-[280px] min-h-screen border-gray-700 border-r "
                    : "bg-white text-black min-w-[280px] max-w-[280px] min-h-screen border-gray-200 border-r "
            }
        >
            <div className="w-full h-screen flex flex-col gap-3 justify-between px-2">
                <div className="mb-2">
                    <div className=" px-1 pt-1">
                        <Link
                            to="/following"
                            className="inline-block rounded-full px-3 py-[5px] cursor-pointer  "
                        >
                            <FaXTwitter size={30} />
                        </Link>
                    </div>
                    <ul>
                        <Link to="/following" onClick={scrollToTop}>
                            <li
                                className={
                                    theme === "dark"
                                        ? " flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-gray-800 rounded-full cursor-pointer font-semibold"
                                        : " flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-[#EFF3F4] rounded-full cursor-pointer font-semibold  "
                                }
                            >
                                <GoHomeFill size={28} />
                                <p>Home</p>
                            </li>
                        </Link>
                        <Link to="/explore" onClick={scrollToTop}>
                            <li
                                className={
                                    theme === "dark"
                                        ? " flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-gray-800 rounded-full cursor-pointer font-semibold"
                                        : " flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-[#EFF3F4] rounded-full cursor-pointer font-semibold  "
                                }
                            >
                                <FiSearch size={28} />
                                <p>Explore</p>
                            </li>
                        </Link>
                        <Link to="/notification" onClick={scrollToTop}>
                            <li
                                className={
                                    theme === "dark"
                                        ? " flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-gray-800 rounded-full cursor-pointer font-semibold relative"
                                        : " flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-[#EFF3F4] rounded-full cursor-pointer font-semibold relative"
                                }
                            >
                                <RiNotification4Line size={28} />
                                <p>Notifications</p>
                                {notificationCount > 0 && (
                                    <div
                                        className={
                                            theme === "dark"
                                                ? "absolute bg-red-600 w-[20px] h-[20px] rounded-full flex justify-center items-center top-2 left-7"
                                                : "absolute bg-red-600 w-[20px] h-[20px] rounded-full flex justify-center items-center top-2 left-7 text-white"
                                        }
                                    >
                                        <p className="text-[12px] font-normal">
                                            {notificationCount}
                                        </p>
                                    </div>
                                )}
                            </li>
                        </Link>
                        <Link to="message" onClick={scrollToTop}>
                            <li
                                className={
                                    theme === "dark"
                                        ? " flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-gray-800 rounded-full cursor-pointer font-semibold"
                                        : " flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-[#EFF3F4] rounded-full cursor-pointer font-semibold  "
                                }
                            >
                                <MdOutlineEmail size={28} />
                                <p>Messages</p>
                            </li>
                        </Link>
                        <Link to="/list" onClick={scrollToTop}>
                            <li
                                className={
                                    theme === "dark"
                                        ? " flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-gray-800 rounded-full cursor-pointer font-semibold"
                                        : " flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-[#EFF3F4] rounded-full cursor-pointer font-semibold  "
                                }
                            >
                                <RiFileListLine size={28} />
                                <p>Lists</p>
                            </li>
                        </Link>
                        <Link to="/bookmark" onClick={scrollToTop}>
                            <li
                                className={
                                    theme === "dark"
                                        ? " flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-gray-800 rounded-full cursor-pointer font-semibold"
                                        : " flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-[#EFF3F4] rounded-full cursor-pointer font-semibold"
                                }
                            >
                                <VscBookmark size={28} />
                                <p>Bookmarks</p>
                            </li>
                        </Link>
                        <Link to="/community" onClick={scrollToTop}>
                            <li
                                className={
                                    theme === "dark"
                                        ? " flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-gray-800 rounded-full cursor-pointer font-semibold"
                                        : " flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-[#EFF3F4] rounded-full cursor-pointer font-semibold  "
                                }
                            >
                                <HiOutlineUsers size={28} />
                                <p>Communities</p>
                            </li>
                        </Link>
                        <Link to="/premium" onClick={scrollToTop}>
                            <li
                                className={
                                    theme === "dark"
                                        ? " flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-gray-800 rounded-full cursor-pointer font-semibold"
                                        : " flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-[#EFF3F4] rounded-full cursor-pointer font-semibold  "
                                }
                            >
                                <FaXTwitter size={28} />
                                <p>Premium</p>
                            </li>
                        </Link>
                        <Link to="/profile" onClick={scrollToTop}>
                            <li
                                className={
                                    theme === "dark"
                                        ? " flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-gray-800 rounded-full cursor-pointer font-semibold"
                                        : " flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-[#EFF3F4] rounded-full cursor-pointer font-semibold  "
                                }
                            >
                                <HiOutlineUser size={28} />
                                <p>Peoples</p>
                            </li>
                        </Link>
                        <Link
                            to="/setting"
                            className={
                                theme === "dark"
                                    ? " flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-gray-800 rounded-full cursor-pointer font-semibold"
                                    : " flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-[#EFF3F4] rounded-full cursor-pointer font-semibold  "
                            }
                            onClick={scrollToTop}
                        >
                            <IoSettingsOutline size={28} />
                            <p>Setting</p>
                        </Link>
                        <li className=" flex items-center justify-center gap-4 text-lg p-3 rounded-full cursor-pointer bg-[#1D9BF0] mt-2 font-semibold">
                            <p>Post</p>
                        </li>
                    </ul>
                </div>
                <Link
                    to="/user"
                    className={
                        theme === "dark"
                            ? "flex justify-between items-center py-3 px-2 duration-200 hover:bg-gray-800 rounded-full cursor-pointer  mb-5"
                            : "flex justify-between items-center py-3 px-2 duration-200 hover:bg-[#EFF3F4] rounded-full cursor-pointer  mb-5"
                    }
                    onClick={scrollToTop}
                >
                    <div className="flex gap-3">
                        <div className="rounded-full overflow-hidden w-[45px] h-[45px]">
                            <img
                                src="https://admin.itsnicethat.com/images/_fsej_vmVYPAz138de7knz6lEFA=/243516/format-webp%7Cwidth-1440/twitter-x-logo-graphic-design-itsnicethat-01.jpeg"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            {/* <p className="font-bold text-[16px]">Sohunz</p> */}
                            <span className="flex items-center gap-1">
                                <p className="font-bold text-lg">Sohunz</p>
                                <RiVerifiedBadgeFill
                                    size={18}
                                    className="text-[#1D9BF0]"
                                />
                            </span>
                            <p className="text-gray-400 text-sm">@sohunz</p>
                        </div>
                    </div>
                    <div>
                        <RiMoreLine size={20} />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
