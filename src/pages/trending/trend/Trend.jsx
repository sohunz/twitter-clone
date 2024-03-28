import React, { useContext } from "react";
import { RiMoreLine } from "react-icons/ri";
import DataContext from "../../../contexts/DataContext";
import ThemeContext from "../../../contexts/themes/ThemeContext";

const Trend = () => {
    const data = useContext(DataContext);
    const trend = data.data.trending;
    const { theme } = useContext(ThemeContext);
    return (
        <ul className="">
            {trend.map((item) => {
                return (
                    <li
                        className={
                            theme === "dark"
                                ? "flex justify-between items-start hover:bg-[#2a323d] py-2 px-5 cursor-pointer duration-200"
                                : "flex justify-between items-start hover:bg-[#EFF3F4] py-2 px-5 cursor-pointer duration-200"
                        }
                        key={item.id}
                    >
                        <div key={item.id}>
                            <p
                                className={
                                    theme === "dark"
                                        ? "text-gray-400 text-[13px]"
                                        : "text-gray-600 text-[13px]"
                                }
                            >
                                {item.category}
                            </p>
                            <p
                                className={
                                    theme === "dark"
                                        ? "font-semibold text-gray-200"
                                        : "font-semibold text-black"
                                }
                            >
                                {item.title}
                            </p>
                            <p
                                className={
                                    theme === "dark"
                                        ? "text-gray-400 text-[13px]"
                                        : "text-gray-600 text-[13px]"
                                }
                            >
                                {item.posts} posts
                            </p>
                        </div>
                        <div className="pt-1">
                            <RiMoreLine size={18} />
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default Trend;
