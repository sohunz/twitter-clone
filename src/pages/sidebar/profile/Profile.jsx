import React, { useEffect, useState } from "react";
import ProfileNav from "./ProfileNav";
import axios from "axios";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Explore = () => {
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        const response = await axios.get("http://localhost:8000/peoples");
        setUsers(response.data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="w-full border-gray-700 border-r">
            <div className="sticky z-50 top-0">
                <ProfileNav />
            </div>
            <p className="px-5 mt-5 mb-5 font-bold text-xl ">
                Peoples you may know
            </p>
            {users.map((item) => {
                return (
                    <li
                        className="hover:bg-[#2a323d] duration-200 cursor-pointer py-4 px-5 list-none"
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
                                    <p className="text-gray-400">
                                        @{item.username}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <button className="text-sm px-5 py-2 rounded-full bg-white text-black font-semibold">
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
