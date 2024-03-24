import React from "react";
import { BiArrowBack } from "react-icons/bi";

const ListNav = () => {
    return (
        <div className="w-full bg-[#15202B] border-gray-700 border-b py-4">
            <div className="flex items-center px-5">
                <div
                    className="rounded-full p-3 cursor-pointer hover:bg-gray-700"
                    onClick={() => window.history.back()}
                >
                    <BiArrowBack size={19} />
                </div>
                <p className="font-bold text-xl px-5">Lists</p>
            </div>
        </div>
    );
};

export default ListNav;
