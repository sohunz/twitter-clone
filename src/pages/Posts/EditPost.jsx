import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DataContext from "../../contexts/DataContext";

const EditPost = () => {
    const { id } = useParams();

    const [newTitle, setNewTitle] = useState([]);
    const data = useContext(DataContext);
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const response = await axios.get("http://localhost:8000/posts");
            setPosts(response.data);
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        fetchPosts();
        console.log("running..");
    }, [data]);

    const dataFiltered = posts.filter((item) => item.id === id);
    // console.log(dataFiltered);

    const img = dataFiltered.map((item) => item.image);
    // console.log(img[0]);

    const count = dataFiltered.map((item) => item.count);
    // console.log(count[0]);

    const isLiked = dataFiltered.map((item) => item.isLiked);
    // console.log(isLiked[0]);

    const createDate = dataFiltered.map((item) => item.createDate);
    console.log(createDate[0]);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const editPostTitle = async (id) => {
        try {
            if (newTitle.length !== 0) {
                await axios.put(`http://localhost:8000/posts/${id}`, {
                    title: newTitle,
                    image: img[0],
                    count: count[0],
                    isLiked: isLiked[0],
                    createDate: createDate,
                });
            } else {
                setNewTitle(dataFiltered.map((item) => item.title));
            }
            navigate("/following");
            scrollToTop();
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
