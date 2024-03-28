import React from "react";
import SettingNav from "./SettingNav";
import { useContext } from "react";
import ThemeContext from "../contexts/themes/ThemeContext";

const Setting = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    console.log(theme);

    return (
        <div className="w-full border-gray-700 border-r">
            <div className="sticky z-50 top-0">
                <SettingNav />
            </div>
            <p className="px-5 mt-5 mb-3 font-bold text-xl ">
                Background Themes
            </p>
            <div className="px-5 flex flex-row gap-3 mt-5">
                <button
                    className="border py-2 px-5 rounded-md"
                    onClick={() => setTheme("night")}
                >
                    Light Mode
                </button>
                <button
                    className="border py-2 px-5 rounded-md"
                    onClick={() => setTheme("dark")}
                >
                    Dark Mode
                </button>
            </div>
        </div>
    );
};

export default Setting;
