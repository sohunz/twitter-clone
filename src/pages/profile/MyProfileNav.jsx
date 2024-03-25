import React, { useContext, useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { PiCalendarDuotone } from "react-icons/pi";
import axios from "axios";
import DataContext from "../../contexts/DataContext";

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

    return (
        <>
            <div className="w-full bg-[#15202B] border-gray-700 border-b py-3">
                <div className="flex items-center px-5 gap-3">
                    <div
                        className="rounded-full p-3 cursor-pointer hover:bg-gray-700"
                        onClick={() => window.history.back()}
                    >
                        <BiArrowBack size={19} />
                    </div>
                    <div className="flex flex-col justify-start">
                        <p className="font-bold text-lg">Olivia Rodrigo</p>
                        <p className="text-sm text-gray-400">
                            {posts.length} posts
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyProfileNav;
