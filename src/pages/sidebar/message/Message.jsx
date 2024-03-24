import React from "react";
import MessageNav from "./MessageNav";

const Explore = () => {
    return (
        <div className="w-full border-gray-700 border-r">
            <div className="sticky z-50 top-0">
                <MessageNav />
            </div>
            <div className="inline-flex flex-col mt-16 px-32">
                <div>
                    <p className="text-3xl font-bold mb-3">
                        Welcome to your inbox!
                    </p>
                    <p className="text-gray-400">
                        Drop a line, share posts and more with private
                        conversations between you and others on X.
                    </p>
                </div>
                <button className="w-[200px] flex items-center justify-center gap-4 text-lg p-3 rounded-full cursor-pointer bg-[#1D9BF0] mt-7 ">
                    <p>Write a message</p>
                </button>
            </div>
        </div>
    );
};

export default Explore;
