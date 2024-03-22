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

const Sidebar = () => {
    return (
        <div className=" min-w-[260px] max-w-[260px] min-h-screen border-gray-700 border-r ">
            <div className="w-full h-screen flex flex-col gap-3 justify-between px-2">
                <div>
                    <div className=" px-1 pt-1">
                        <div className="inline-block rounded-full p-3 hover:bg-gray-800 cursor-pointer ">
                            <FaXTwitter size={30} />
                        </div>
                    </div>
                    <ul>
                        <li className=" flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-gray-800 rounded-full cursor-pointer  ">
                            <GoHomeFill size={28} />
                            <p>Home</p>
                        </li>
                        <li className=" flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-gray-800 rounded-full cursor-pointer  ">
                            <FiSearch size={28} />
                            <p>Explore</p>
                        </li>
                        <li className=" flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-gray-800 rounded-full cursor-pointer  ">
                            <RiNotification4Line size={28} />
                            <p>Notifications</p>
                        </li>
                        <li className=" flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-gray-800 rounded-full cursor-pointer  ">
                            <MdOutlineEmail size={28} />
                            <p>Messages</p>
                        </li>
                        <li className=" flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-gray-800 rounded-full cursor-pointer  ">
                            <RiFileListLine size={28} />
                            <p>Lists</p>
                        </li>
                        <li className=" flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-gray-800 rounded-full cursor-pointer  ">
                            <VscBookmark size={28} />
                            <p>Bookmarks</p>
                        </li>
                        <li className=" flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-gray-800 rounded-full cursor-pointer  ">
                            <HiOutlineUsers size={28} />
                            <p>Communities</p>
                        </li>
                        <li className=" flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-gray-800 rounded-full cursor-pointer  ">
                            <FaXTwitter size={28} />
                            <p>Premium</p>
                        </li>
                        <li className=" flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-gray-800 rounded-full cursor-pointer  ">
                            <HiOutlineUser size={28} />
                            <p>Profile</p>
                        </li>
                        <li className=" flex items-center gap-4 text-lg py-3 px-4 duration-200 hover:bg-gray-800 rounded-full cursor-pointer  ">
                            <CiCircleMore size={28} />
                            <p>More</p>
                        </li>
                        <li className=" flex items-center justify-center gap-4 text-lg p-3 rounded-full cursor-pointer bg-[#1D9BF0] mt-2 ">
                            <p>Post</p>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-between items-center py-3 px-4 duration-200 hover:bg-gray-800 rounded-full cursor-pointer  mb-5">
                    <div className="flex gap-3">
                        <div className="rounded-full overflow-hidden w-[50px] h-[50px]">
                            <img
                                src="https://qph.cf2.quoracdn.net/main-qimg-68d52a4c9747f85b66e6b385c1c707d2-lq"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <p>Olivia Rodrigo</p>
                            <p className="text-gray-500">@love</p>
                        </div>
                    </div>
                    <div>
                        <RiMoreLine size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
