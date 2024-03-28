import React, { useContext } from "react";
import DataContext from "../../../contexts/DataContext";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import ThemeContext from "../../../contexts/themes/ThemeContext";

const People = () => {
    const data = useContext(DataContext);
    const peoples = data.data.peoples;

    const peoplesFiltered = peoples.slice(0, 3);

    const { theme } = useContext(ThemeContext);

    return (
        <ul>
            {peoplesFiltered.map((item) => {
                return (
                    <li
                        className={
                            theme === "dark"
                                ? "hover:bg-[#2a323d] duration-200 cursor-pointer py-4 px-5"
                                : "hover:bg-[#EFF3F4] duration-200 cursor-pointer py-4 px-5"
                        }
                        key={item.id}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex gap-3">
                                <div className="rounded-full overflow-hidden w-[40px] h-[40px]">
                                    <img
                                        src={item.image}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <span className="flex items-center gap-1">
                                        <p className="font-bold">{item.name}</p>
                                        <RiVerifiedBadgeFill
                                            size={16}
                                            className="text-[#1D9BF0]"
                                        />
                                    </span>
                                    <p
                                        className={
                                            theme === "dark"
                                                ? "text-gray-400"
                                                : "text-gray-500"
                                        }
                                    >
                                        @{item.username}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <button
                                    className={
                                        theme === "dark"
                                            ? "text-sm px-5 py-2 rounded-full bg-white text-black font-semibold"
                                            : "text-sm px-5 py-2 rounded-full bg-black text-white font-semibold"
                                    }
                                >
                                    Follow
                                </button>
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default People;
