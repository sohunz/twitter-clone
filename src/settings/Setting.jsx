import React from "react";
import SettingNav from "./SettingNav";
import { useContext } from "react";
import ThemeContext from "../contexts/themes/ThemeContext";
import { MdOutlineLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";

const Setting = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div
            className={
                theme === "dark"
                    ? "w-full border-gray-700 border-r"
                    : "w-full border-gray-200 border-r"
            }
        >
            <div className="sticky z-50 top-0">
                <SettingNav />
            </div>
            <p className="px-5 mt-5 mb-3 font-bold text-xl ">
                Background Themes
            </p>
            <div className="px-5 flex flex-row gap-3 mt-5">
                <button
                    className={
                        theme === "dark"
                            ? "border py-2 px-5 rounded-md flex items-center gap-2"
                            : "py-2 px-5 rounded-md flex items-center gap-2 outline-[#1D9BF0] outline "
                    }
                    onClick={() => setTheme("night")}
                >
                    <MdOutlineLightMode size={23} />
                    <p>Light Mode</p>
                </button>
                <button
                    className={
                        theme === "dark"
                            ? " py-2 px-5 rounded-md flex items-center gap-2 outline-[#1D9BF0] outline"
                            : "border py-2 px-5 rounded-md flex items-center gap-2 "
                    }
                    onClick={() => setTheme("dark")}
                >
                    <CiDark size={23} />
                    <p>Dark Mode</p>
                </button>
            </div>
        </div>
    );
};

export default Setting;
