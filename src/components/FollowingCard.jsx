import React, { useContext, useEffect, useState } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { PiDotLight } from "react-icons/pi";
import { IoChatboxOutline } from "react-icons/io5";
import { FaRetweet } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa6";
import DataContext from "../contexts/DataContext";
import { RiMoreLine } from "react-icons/ri";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const FollowingCard = () => {
    const data = useContext(DataContext);
    const [posts, setPosts] = useState([]);
    const [modalToggles, setModalToggles] = useState([]);
    const [likedPosts, setLikedPosts] = useState({});

    const toggleLike = async (postId) => {
        try {
            // Toggle liked status locally
            const updatedLikedPosts = { ...likedPosts };
            updatedLikedPosts[postId] = !updatedLikedPosts[postId];
            setLikedPosts(updatedLikedPosts);

            // Update liked status in JSON server
            await axios.patch(`http://localhost:8000/posts/${postId}`, {
                isLiked: updatedLikedPosts[postId],
            });

            // Save updated likedPosts to localStorage
            localStorage.setItem(
                "likedPosts",
                JSON.stringify(updatedLikedPosts)
            );
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        const storedLikedPosts = JSON.parse(localStorage.getItem("likedPosts"));
        if (storedLikedPosts) {
            setLikedPosts(storedLikedPosts);
        }
    }, []);

    const fetchPost = async () => {
        try {
            const response = await axios.get("http://localhost:8000/posts");
            setPosts(response.data);
            setModalToggles(Array(response.data.length).fill(false));
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        fetchPost();
        console.log("hello");
    }, [data]);

    const toggleModal = (index) => {
        const newToggles = [...modalToggles];
        newToggles[index] = !newToggles[index];
        setModalToggles(newToggles);
    };

    // delete
    const deletePost = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/posts/${id}`);
            setPosts(posts.filter((post) => post.id !== id));
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <div>
            {posts.map((item, index) => {
                return (
                    <div
                        className="w-full flex gap-3 items-start border-gray-700 border-b pb-5 mt-5"
                        key={item.id}
                    >
                        <Link
                            to="/user"
                            className="rounded-full overflow-hidden w-[45px] min-w-[45px] h-[45px] min-h-[45px]"
                        >
                            <img
                                src="https://qph.cf2.quoracdn.net/main-qimg-68d52a4c9747f85b66e6b385c1c707d2-lq"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </Link>
                        <div className="w-full">
                            <Link
                                to="/user"
                                className="inline-flex items-center gap-2"
                            >
                                <span className="flex items-center gap-1">
                                    <p className="font-semibold text-[17px]">
                                        Olivia Rodrigo
                                    </p>
                                    <RiVerifiedBadgeFill
                                        size={18}
                                        className="text-[#1D9BF0]"
                                    />
                                </span>
                                <div className="flex items-center gap-0">
                                    <p className="text-gray-400">@sohun</p>
                                    <div className="">
                                        <PiDotLight />
                                    </div>
                                    <p className="text-gray-400">1m</p>
                                </div>
                            </Link>
                            <div>
                                <p className="text-gray-200">{item.title}</p>
                                <div className="rounded-2xl overflow-hidden mt-5 max-w-[538px] max-h-[660px]">
                                    <img src={item.image} />
                                </div>
                                <div className="mt-5 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <IoChatboxOutline
                                            size={18}
                                            className="text-gray-400"
                                        />
                                        <p className="text-[14px] text-gray-400">
                                            143
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaRetweet
                                            size={20}
                                            className="text-gray-400"
                                        />
                                        <p className="text-[14px] text-gray-400">
                                            123
                                        </p>
                                    </div>
                                    {/* <div className="flex items-center gap-2">
                                        <FaRegHeart
                                            size={16}
                                            className="text-gray-400"
                                        />
                                        <p className="text-[14px] text-gray-400">
                                            9K
                                        </p>
                                    </div> */}
                                    {likedPosts[item.id] ? (
                                        <div className="flex items-center gap-2">
                                            <FaHeart
                                                size={16}
                                                className="text-red-500 cursor-pointer"
                                                onClick={() =>
                                                    toggleLike(item.id)
                                                }
                                            />
                                            <p className="text-[14px] text-gray-400">
                                                9K
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2">
                                            <FaRegHeart
                                                size={16}
                                                className="text-gray-400 cursor-pointer"
                                                onClick={() =>
                                                    toggleLike(item.id)
                                                }
                                            />
                                            <p className="text-[14px] text-gray-400">
                                                9K
                                            </p>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-2">
                                        <IoIosStats
                                            size={17}
                                            className="text-gray-400"
                                        />
                                        <p className="text-[14px] text-gray-400">
                                            42K
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaRegBookmark
                                            size={16}
                                            className="text-gray-400"
                                        />
                                        <p className="text-[14px] text-gray-400">
                                            420
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className=" cursor-pointer">
                            <RiMoreLine
                                size={20}
                                onClick={() => toggleModal(index)}
                            />
                            <div
                                className={
                                    modalToggles[index] ? "block" : "hidden"
                                }
                            >
                                <div className=" relative">
                                    <ul className="absolute right-0 rounded-lg bg-[#15202B] flex flex-col overflow-hidden">
                                        <Link
                                            to={`/following/${item.id}`}
                                            className="bg-gray-700 py-2 px-5"
                                            onClick={() =>
                                                editPostTitle(item.id)
                                            }
                                        >
                                            Edit
                                        </Link>
                                        <li
                                            className="bg-gray-700 py-2 px-5"
                                            onClick={() => deletePost(item.id)}
                                        >
                                            Delete
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default FollowingCard;
