import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditPost = () => {
    const { id } = useParams();

    const [newTitle, setNewTitle] = useState([]);

    const editPostTitle = async (id) => {
        try {
            if (newTitle.length !== 0) {
                await axios.put(`http://localhost:8000/posts/${id}`, {
                    title: newTitle,
                });
                navigate("/following");
            } else {
                console.log("enter a post title");
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    const navigate = useNavigate();

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
                <button
                    onClick={() => editPostTitle(id)}
                    className={
                        newTitle.length === 0
                            ? " bg-[#1D9BF0] px-7 py-[9px] rounded-full cursor-default opacity-50"
                            : " bg-[#1D9BF0] px-7 py-[9px] rounded-full cursor-pointer"
                    }
                    disabled={newTitle.length === 0}
                >
                    Update
                </button>
            </div>
        </div>
    );
};

export default EditPost;
