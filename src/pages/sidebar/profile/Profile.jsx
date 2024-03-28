import React, { useContext, useEffect, useState } from "react";
import ProfileNav from "./ProfileNav";
import axios from "axios";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import ThemeContext from "../../../contexts/themes/ThemeContext";

const Explore = () => {
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        const response = await axios.get("http://localhost:8000/peoples");
        setUsers(response.data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const { theme } = useContext(ThemeContext);

    return (
        <div
            className={
                theme === "dark"
                    ? "w-full border-gray-700 border-r"
                    : "w-full border-gray-200 border-r"
            }
        >
            <div className="sticky z-50 top-0">
                <ProfileNav />
            </div>
            <p className="px-5 mt-5 mb-5 font-bold text-xl ">
                Peoples you may know
            </p>
            {users.map((item) => {
                return (
                    <li
                        className={
                            theme === "dark"
                                ? "hover:bg-[#2a323d] duration-200 cursor-pointer py-4 px-5 list-none"
                                : "hover:bg-[#EFF3F4] duration-200 cursor-pointer py-4 px-5 list-none"
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
        </div>
    );
};

export default Explore;
