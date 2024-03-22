import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const EditPost = () => {
    const { id } = useParams();

    const [newTitle, setNewTitle] = useState([]);

    const editPostTitle = async (id) => {
        try {
            await axios.put(`http://localhost:8000/posts/${id}`, {
                title: newTitle,
            });
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <div className=" mt-5 px-10">
            <p className="font-bold text-xl mb-5 text-center">Edit Post</p>
            <input
                type="text"
                value={newTitle}
                placeholder="New Title"
                className="w-full py-3 pl-7 pr-5 rounded-full bg-gray-800 outline-none mb-3"
                onChange={(e) => setNewTitle(e.target.value)}
            />{" "}
            <div className="mt-3">
                <Link
                    to="/following"
                    onClick={() => editPostTitle(id)}
                    className=" bg-[#1D9BF0] px-5 py-[9px] rounded-full cursor-pointer"
                >
                    Update
                </Link>
            </div>
        </div>
    );
};

export default EditPost;
