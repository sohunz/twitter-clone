import React, { useContext, useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import axios from "axios";
import DataContext from "../../contexts/DataContext";
import ThemeContext from "../../contexts/themes/ThemeContext";

const MyProfileNav = () => {
    const data = useContext(DataContext);
    const [posts, setPosts] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await axios.get("http://localhost:8000/posts");
            setPosts(response.data);
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [data]);

    const { theme } = useContext(ThemeContext);

    return (
        <>
            <div
                className={
                    theme === "dark"
                        ? "w-full bg-[#15202B] border-gray-700 border-b py-3"
                        : "w-full bg-white text-black border-gray-200 border-b py-3"
                }
            >
                <div className="flex items-center px-5 gap-3">
                    <div
                        className={
                            theme === "dark"
                                ? "rounded-full p-3 cursor-pointer hover:bg-gray-700"
                                : "rounded-full p-3 cursor-pointer hover:bg-[#F0F0F0]"
                        }
                        onClick={() => window.history.back()}
                    >
                        <BiArrowBack size={19} />
                    </div>
                    <div className="flex flex-col justify-start">
                        {/* <p className="font-bold text-lg">Olivia Rodrigo</p> */}
                        <span className="flex items-center gap-1">
                            <p className="font-bold text-lg">Sohunz</p>
                            <RiVerifiedBadgeFill
                                size={18}
                                className="text-[#1D9BF0]"
                            />
                        </span>
                        <p
                            className={
                                theme === "dark"
                                    ? "text-sm text-gray-400"
                                    : "text-sm text-gray-500"
                            }
                        >
                            {posts.length} posts
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyProfileNav;
