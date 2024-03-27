import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DataContext from "../../contexts/DataContext";

const EditPost = () => {
    const { id } = useParams();

    const [newTitle, setNewTitle] = useState([]);
    const data = useContext(DataContext);

    const result = data.data.posts;

    const dataFiltered = result.filter((item) => item.id === id);
    console.log(dataFiltered);

    const editPostTitle = async (id) => {
        try {
            if (newTitle.length !== 0) {
                await axios.put(`http://localhost:8000/posts/${id}`, {
                    title: newTitle,
                    image: dataFiltered.map((item) => item.image),
                });
            } else {
                setNewTitle(dataFiltered.map((item) => item.title));
            }
            navigate("/following");
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
                placeholder={dataFiltered.map((item) => item.title)}
                className="w-full py-3 pl-7 pr-5 rounded-full bg-gray-800 outline-none mb-3"
                onChange={(e) => setNewTitle(e.target.value)}
            />{" "}
            <div className="mt-3">
                <button
                    onClick={() => editPostTitle(id)}
                    className=" bg-[#1D9BF0] px-7 py-[9px] rounded-full cursor-pointer"
                >
                    Update
                </button>
            </div>
        </div>
    );
};

export default EditPost;
