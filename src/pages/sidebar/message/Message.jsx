import React, { useContext } from "react";
import MessageNav from "./MessageNav";
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
                <MessageNav />
            </div>
            <div className="inline-flex flex-col mt-16 px-32">
                <div>
                    <p className="text-3xl font-bold mb-3">
                        Welcome to your inbox!
                    </p>
                    <p
                        className={
                            theme === "dark" ? "text-gray-400" : "text-gray-500"
                        }
                    >
                        Drop a line, share posts and more with private
                        conversations between you and others on X.
                    </p>
                </div>
                <button
                    className={
                        theme === "dark"
                            ? "w-[200px] flex items-center justify-center gap-4 text-lg p-3 rounded-full cursor-pointer bg-[#1D9BF0] mt-7 "
                            : "w-[200px] flex items-center justify-center gap-4 text-lg p-3 rounded-full cursor-pointer bg-[#1D9BF0] mt-7 text-white "
                    }
                >
                    <p>Write a message</p>
                </button>
            </div>
        </div>
    );
};

export default Explore;
