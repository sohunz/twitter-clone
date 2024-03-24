import React from "react";
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

const Sidebar = () => {
    return (
        <div className=" min-w-[280px] max-w-[280px] min-h-screen border-gray-700 border-r ">
            <div className="w-full h-screen flex flex-col gap-3 justify-between px-2">
                <div className="mb-2">
                    <div className=" px-1 pt-1">
                        <div className="inline-block rounded-full px-3 py-[5px] hover:bg-gray-800 cursor-pointer ">
                            <FaXTwitter size={30} />
                        </div>
                    </div>
                    <ul>
                        <Link to="/following">
                            <li className=" flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-gray-800 rounded-full cursor-pointer  ">
                                <GoHomeFill size={28} />
                                <p>Home</p>
                            </li>
                        </Link>
                        <Link to="/explore">
                            <li className=" flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-gray-800 rounded-full cursor-pointer  ">
                                <FiSearch size={28} />
                                <p>Explore</p>
                            </li>
                        </Link>
                        <Link to="/notification">
                            <li className=" flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-gray-800 rounded-full cursor-pointer  ">
                                <RiNotification4Line size={28} />
                                <p>Notifications</p>
                            </li>
                        </Link>
                        <Link to="message">
                            <li className=" flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-gray-800 rounded-full cursor-pointer  ">
                                <MdOutlineEmail size={28} />
                                <p>Messages</p>
                            </li>
                        </Link>
                        <Link to="/list">
                            <li className=" flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-gray-800 rounded-full cursor-pointer  ">
                                <RiFileListLine size={28} />
                                <p>Lists</p>
                            </li>
                        </Link>
                        <Link to="/bookmark">
                            <li className=" flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-gray-800 rounded-full cursor-pointer  ">
                                <VscBookmark size={28} />
                                <p>Bookmarks</p>
                            </li>
                        </Link>
                        <Link to="/community">
                            <li className=" flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-gray-800 rounded-full cursor-pointer  ">
                                <HiOutlineUsers size={28} />
                                <p>Communities</p>
                            </li>
                        </Link>
                        <Link to="/premium">
                            <li className=" flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-gray-800 rounded-full cursor-pointer  ">
                                <FaXTwitter size={28} />
                                <p>Premium</p>
                            </li>
                        </Link>
                        <Link to="/profile">
                            <li className=" flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-gray-800 rounded-full cursor-pointer  ">
                                <HiOutlineUser size={28} />
                                <p>Profile</p>
                            </li>
                        </Link>
                        <li className=" flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-gray-800 rounded-full cursor-pointer  ">
                            <CiCircleMore size={28} />
                            <p>More</p>
                        </li>
                        <li className=" flex items-center justify-center gap-4 text-lg p-3 rounded-full cursor-pointer bg-[#1D9BF0] mt-2 ">
                            <p>Post</p>
                        </li>
                    </ul>
                </div>
                <Link
                    to="/user"
                    className="flex justify-between items-center py-3 px-2 duration-200 hover:bg-gray-800 rounded-full cursor-pointer  mb-5"
                >
                    <div className="flex gap-3">
                        <div className="rounded-full overflow-hidden w-[45px] h-[45px]">
                            <img
                                src="https://qph.cf2.quoracdn.net/main-qimg-68d52a4c9747f85b66e6b385c1c707d2-lq"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <p className="font-bold text-[16px]">
                                Olivia Rodrigo
                            </p>
                            <p className="text-gray-400 text-sm">@sohun</p>
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
