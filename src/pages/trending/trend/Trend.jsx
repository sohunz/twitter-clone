import React from "react";
import { RiMoreLine } from "react-icons/ri";

const Trend = () => {
    return (
        <ul>
            <li className="flex justify-between items-start hover:bg-gray-700 py-2 px-4">
                <div>
                    <p className="text-gray-400 text-[13px]">Music Trending</p>
                    <p className="font-bold">Travis Scott</p>
                    <p className="text-gray-400 text-[13px]">100K posts</p>
                </div>
                <div className="pt-1">
                    <RiMoreLine size={18} />
                </div>
            </li>
        </ul>
    );
};

export default Trend;
