import React, { useContext } from "react";
import { BiArrowBack } from "react-icons/bi";
import ThemeContext from "../../../contexts/themes/ThemeContext";

const ProfileNav = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div
            className={
                theme === "dark"
                    ? "w-full bg-[#15202B] border-gray-700 border-b py-4"
                    : "w-full bg-white text-black border-gray-200 border-b py-4"
            }
        >
            <div className="flex items-center px-5">
                <div
                    className="rounded-full p-3 cursor-pointer hover:bg-gray-700"
                    onClick={() => window.history.back()}
                >
                    <BiArrowBack size={19} />
                </div>
                <p className="font-bold text-xl px-5">Profile</p>
            </div>
        </div>
    );
};

export default ProfileNav;
