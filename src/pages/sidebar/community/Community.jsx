import React, { useContext } from "react";
import CommunityNav from "./CommunityNav";
import { RiMoreLine } from "react-icons/ri";
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
                <CommunityNav />
            </div>
            <div>
                <p className="px-5 mt-5 font-bold text-xl mb-5">
                    Discover Communities
                </p>
                <div
                    className={
                        theme === "dark"
                            ? "px-5 mb-3 flex justify-between hover:bg-[#1E2732] py-4 cursor-pointer"
                            : "px-5 mb-3 flex justify-between hover:bg-[#EFF3F4] py-4 cursor-pointer"
                    }
                >
                    <div className="flex gap-5">
                        <div className=" rounded-xl overflow-hidden w-[100px] h-[100px]">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/1200px-X_logo.jpg"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-between">
                            <div>
                                <p className="font-bold">Twitter</p>
                                <p className="text-sm font-semibold">
                                    590K{" "}
                                    <span
                                        className={
                                            theme === "dark"
                                                ? "text-gray-400"
                                                : "text-gray-500"
                                        }
                                    >
                                        Members
                                    </span>
                                </p>
                            </div>
                            <div className="inline-flex">
                                <p
                                    className={
                                        theme === "dark"
                                            ? " bg-[#1D9BF0] px-5 py-1 text-sm rounded-full cursor-pointer"
                                            : " bg-[#1D9BF0] px-5 py-1 text-sm rounded-full cursor-pointer text-white"
                                    }
                                >
                                    Join
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-1">
                        <RiMoreLine size={18} />
                    </div>
                </div>
                <div
                    className={
                        theme === "dark"
                            ? "px-5 mb-3 flex justify-between hover:bg-[#1E2732] py-4 cursor-pointer"
                            : "px-5 mb-3 flex justify-between hover:bg-[#EFF3F4] py-4 cursor-pointer"
                    }
                >
                    <div className="flex gap-5">
                        <div className=" rounded-xl overflow-hidden w-[100px] h-[100px]">
                            <img
                                src="https://i0.wp.com/theenglishaccenttutor.com/wp-content/uploads/2022/08/3C376CCB-F2A4-4418-A65C-5C114B9D6235.jpeg?resize=500%2C500&ssl=1"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-between">
                            <div>
                                <p className="font-bold">Elon Musk</p>
                                <p className="text-sm font-semibold">
                                    346K{" "}
                                    <span
                                        className={
                                            theme === "dark"
                                                ? "text-gray-400"
                                                : "text-gray-500"
                                        }
                                    >
                                        Members
                                    </span>
                                </p>
                            </div>
                            <div className="inline-flex">
                                <p
                                    className={
                                        theme === "dark"
                                            ? " bg-[#1D9BF0] px-5 py-1 text-sm rounded-full cursor-pointer"
                                            : " bg-[#1D9BF0] px-5 py-1 text-sm rounded-full cursor-pointer text-white"
                                    }
                                >
                                    Join
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-1">
                        <RiMoreLine size={18} />
                    </div>
                </div>
                <div
                    className={
                        theme === "dark"
                            ? "px-5 mb-3 flex justify-between hover:bg-[#1E2732] py-4 cursor-pointer"
                            : "px-5 mb-3 flex justify-between hover:bg-[#EFF3F4] py-4 cursor-pointer"
                    }
                >
                    <div className="flex gap-5">
                        <div className=" rounded-xl overflow-hidden w-[100px] h-[100px]">
                            <img
                                src="https://i.guim.co.uk/img/media/2965737a8d6966d949a9c7bfc255af426b5a79ac/443_69_2406_1444/master/2406.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e8224f4f999aad1326f43373a2a7d781"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-between">
                            <div>
                                <p className="font-bold">Travis Scott</p>
                                <p className="text-sm font-semibold">
                                    149K{" "}
                                    <span
                                        className={
                                            theme === "dark"
                                                ? "text-gray-400"
                                                : "text-gray-500"
                                        }
                                    >
                                        Members
                                    </span>
                                </p>
                            </div>
                            <div className="inline-flex">
                                <p
                                    className={
                                        theme === "dark"
                                            ? " bg-[#1D9BF0] px-5 py-1 text-sm rounded-full cursor-pointer"
                                            : " bg-[#1D9BF0] px-5 py-1 text-sm rounded-full cursor-pointer text-white"
                                    }
                                >
                                    Join
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-1">
                        <RiMoreLine size={18} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;
