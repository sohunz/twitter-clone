import React, { useContext } from "react";
import ThemeContext from "../../../contexts/themes/ThemeContext";

const Articles = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="w-full">
            <div className="inline-flex flex-col mt-5 px-20 ml-10 ">
                <div className="">
                    <p className="text-3xl font-bold mb-3">
                        Write Articles on X
                    </p>
                    <p
                        className={
                            theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }
                    >
                        You must be subscribed to Premium+ to write Articles on
                        X
                    </p>
                </div>
                <button
                    className={
                        theme === "dark"
                            ? "w-[250px] flex items-center justify-center gap-4 text-lg p-3 rounded-full cursor-pointer bg-white text-black mt-7 font-medium "
                            : "w-[250px] flex items-center justify-center gap-4 text-lg p-3 rounded-full cursor-pointer bg-black text-white mt-7 font-medium "
                    }
                >
                    <p>Upgrade to Premium+</p>
                </button>
            </div>
        </div>
    );
};

export default Articles;
