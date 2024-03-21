import React from "react";
import { IoSettingsOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className=" w-full bg-[#15202B] border-b">
            <div className="flex justify-between items-center">
                <ul className="w-full h-full flex items-center justify-between">
                    <li className="w-full text-center py-4 hover:bg-gray-700 cursor-pointer duration-200">
                        For you
                    </li>
                    <li className="w-full text-center py-4 hover:bg-gray-700 cursor-pointer duration-200">
                        Following
                    </li>
                </ul>
                <div className="w-[60px] h-[60px] flex justify-center items-center">
                    <div className=" w-[40px] h-[40px] flex items-center justify-center hover:bg-gray-700 rounded-full cursor-pointer">
                        <IoSettingsOutline size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
