import React, { useContext } from "react";
import ListNav from "./ListNav";
import { IoAdd } from "react-icons/io5";
import ThemeContext from "../../../contexts/themes/ThemeContext";

const Explore = () => {
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
                <ListNav />
            </div>
            <div>
                <p className="px-5 mt-5 mb-5 font-bold text-xl ">
                    Discover new Lists
                </p>
                <div
                    className={
                        theme === "dark"
                            ? "px-5 mb-3 flex justify-between items-center hover:bg-[#1E2732] py-4 cursor-pointer"
                            : "px-5 mb-3 flex justify-between items-center hover:bg-[#EFF3F4] py-4 cursor-pointer"
                    }
                >
                    <div className="flex gap-5">
                        <div className="rounded-xl overflow-hidden w-[70px] h-[70px]">
                            <img
                                src="https://static01.nyt.com/images/2022/12/30/multimedia/30soccer-ronaldo-1-76fd/30soccer-ronaldo-1-76fd-mediumSquareAt3X.jpg"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-col">
                                <div>
                                    <p className="font-bold">
                                        Cristiano Ronaldo
                                    </p>
                                    <p
                                        className={
                                            theme === "dark"
                                                ? "text-[13px] text-gray-400"
                                                : "text-[13px] text-gray-500"
                                        }
                                    >
                                        250K Members
                                    </p>
                                </div>
                                <div className="flex text-[13px] gap-2 mt-2">
                                    <p
                                        className={
                                            theme === "dark"
                                                ? "bg-gray-700 rounded-full px-3"
                                                : "bg-gray-200 rounded-full px-3"
                                        }
                                    >
                                        #sport
                                    </p>
                                    <p
                                        className={
                                            theme === "dark"
                                                ? "bg-gray-700 rounded-full px-3"
                                                : "bg-gray-200 rounded-full px-3"
                                        }
                                    >
                                        #ronaldo
                                    </p>
                                    <p
                                        className={
                                            theme === "dark"
                                                ? "bg-gray-700 rounded-full px-3"
                                                : "bg-gray-200 rounded-full px-3"
                                        }
                                    >
                                        #football
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={
                            theme === "dark"
                                ? "border p-2 bg-white rounded-full cursor-pointer"
                                : "border p-2 bg-black rounded-full cursor-pointer"
                        }
                    >
                        <IoAdd
                            color={theme === "dark" ? "black" : "white"}
                            size={20}
                        />
                    </div>
                </div>
                <div
                    className={
                        theme === "dark"
                            ? "px-5 mb-3 flex justify-between items-center hover:bg-[#1E2732] py-4 cursor-pointer"
                            : "px-5 mb-3 flex justify-between items-center hover:bg-[#EFF3F4] py-4 cursor-pointer"
                    }
                >
                    <div className="flex gap-5">
                        <div className="rounded-xl overflow-hidden w-[70px] h-[70px]">
                            <img
                                src="https://i.pinimg.com/originals/36/91/77/3691771e78f9e7e8cbf76eab68851831.jpg"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-col">
                                <div>
                                    <p className="font-bold">Nissan GTR R35</p>
                                    <p
                                        className={
                                            theme === "dark"
                                                ? "text-[13px] text-gray-400"
                                                : "text-[13px] text-gray-500"
                                        }
                                    >
                                        350K Members
                                    </p>
                                </div>
                                <div className="flex text-[13px] gap-2 mt-2">
                                    <p
                                        className={
                                            theme === "dark"
                                                ? "bg-gray-700 rounded-full px-3"
                                                : "bg-gray-200 rounded-full px-3"
                                        }
                                    >
                                        #cars
                                    </p>
                                    <p
                                        className={
                                            theme === "dark"
                                                ? "bg-gray-700 rounded-full px-3"
                                                : "bg-gray-200 rounded-full px-3"
                                        }
                                    >
                                        #gtr
                                    </p>
                                    <p
                                        className={
                                            theme === "dark"
                                                ? "bg-gray-700 rounded-full px-3"
                                                : "bg-gray-200 rounded-full px-3"
                                        }
                                    >
                                        #gtrfan
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={
                            theme === "dark"
                                ? "border p-2 bg-white rounded-full cursor-pointer"
                                : "border p-2 bg-black rounded-full cursor-pointer"
                        }
                    >
                        <IoAdd
                            color={theme === "dark" ? "black" : "white"}
                            size={20}
                        />
                    </div>
                </div>
                <div
                    className={
                        theme === "dark"
                            ? "px-5 mb-3 flex justify-between items-center hover:bg-[#1E2732] py-4 cursor-pointer"
                            : "px-5 mb-3 flex justify-between items-center hover:bg-[#EFF3F4] py-4 cursor-pointer"
                    }
                >
                    <div className="flex gap-5">
                        <div className="rounded-xl overflow-hidden w-[70px] h-[70px]">
                            <img
                                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1513321478077/ByCWNxZMf.png"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-col">
                                <div>
                                    <p className="font-bold">
                                        Front End Developer
                                    </p>
                                    <p
                                        className={
                                            theme === "dark"
                                                ? "text-[13px] text-gray-400"
                                                : "text-[13px] text-gray-500"
                                        }
                                    >
                                        480K Members
                                    </p>
                                </div>
                                <div className="flex text-[13px] gap-2 mt-2">
                                    <p
                                        className={
                                            theme === "dark"
                                                ? "bg-gray-700 rounded-full px-3"
                                                : "bg-gray-200 rounded-full px-3"
                                        }
                                    >
                                        #webdev
                                    </p>
                                    <p
                                        className={
                                            theme === "dark"
                                                ? "bg-gray-700 rounded-full px-3"
                                                : "bg-gray-200 rounded-full px-3"
                                        }
                                    >
                                        #frontend
                                    </p>
                                    <p
                                        className={
                                            theme === "dark"
                                                ? "bg-gray-700 rounded-full px-3"
                                                : "bg-gray-200 rounded-full px-3"
                                        }
                                    >
                                        #webdevelopment
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={
                            theme === "dark"
                                ? "border p-2 bg-white rounded-full cursor-pointer"
                                : "border p-2 bg-black rounded-full cursor-pointer"
                        }
                    >
                        <IoAdd
                            color={theme === "dark" ? "black" : "white"}
                            size={20}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;
