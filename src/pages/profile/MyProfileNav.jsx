import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { PiCalendarDuotone } from "react-icons/pi";

const MyProfileNav = () => {
    return (
        <>
            <div className="w-full bg-[#15202B] border-gray-700 border-b py-4">
                <div className="flex items-center px-5 gap-3">
                    <div
                        className="rounded-full p-3 cursor-pointer hover:bg-gray-700"
                        onClick={() => window.history.back()}
                    >
                        <BiArrowBack size={19} />
                    </div>
                    <div className="flex flex-col justify-start">
                        <p className="font-bold text-lg">Olivia Rodrigo</p>
                        <p className="text-sm text-gray-400">0 posts</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyProfileNav;
