import React, { useContext, useState } from "react";
import { IoImageOutline } from "react-icons/io5";
import { TfiLayoutListThumb } from "react-icons/tfi";
import { FaRegFaceSmile } from "react-icons/fa6";
import { BsCalendarDate } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { RiVideoLine } from "react-icons/ri";
import axios from "axios";
import Resizer from "react-image-file-resizer";
import ThemeContext from "../../contexts/themes/ThemeContext";

const Post = () => {
    const { theme } = useContext(ThemeContext);
    const createDate = new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
    });

    const [getInput, setGetInput] = useState({
        title: "",
        image: "",
        count: 0,
        createDate: createDate,
    });

    const handleChange = async (e) => {
        if (e.target.type === "file") {
            const file = e.target.files[0];
            if (file) {
                try {
                    Resizer.imageFileResizer(
                        file,
                        538,
                        660,
                        "JPEG",
                        80,
                        0,
                        (uri) => {
                            setGetInput({ ...getInput, image: uri });
                        },
                        "base64" // output type
                    );
                } catch (error) {
                    console.error("Error resizing image:", error);
                }
            }
        } else {
            setGetInput({ ...getInput, title: e.target.value });
        }
    };

    const submit = () => {
        axios
            .post("http://localhost:8000/posts", getInput)
            .then(() => {
                setGetInput({
                    title: "",
                    image: "",
                    count: 0,
                    isLiked: false,
                    createDate,
                }); // Clear title and image after successful post
            })
            .catch((error) => {
                console.error("Error submitting post:", error);
            });
    };

    return (
        <div
            className={
                theme === "dark"
                    ? "border-gray-700 border-b"
                    : "border-gray-200 border-b"
            }
        >
            <div className="flex items-center gap-4 mt-5 ">
                <div className="rounded-full overflow-hidden w-[45px] h-[45px]">
                    <img
                        src="https://eu-images.contentstack.com/v3/assets/blt949ea8e16e463049/blt50bdd682bfd35c56/64be7cae56d6563cec7eb5dd/ROqzFNVh_400x400.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="What is happening?!"
                        className={
                            theme === "dark"
                                ? "bg-[#15202B] outline-none border-0 text-xl"
                                : "bg-white text-black outline-none border-0 text-xl"
                        }
                        onChange={handleChange}
                        value={getInput.title}
                    />
                </div>
            </div>
            <div className="flex items-center justify-between py-5">
                <div className="flex items-center gap-1">
                    <div
                        className={
                            theme === "dark"
                                ? "rounded-full p-2 hover:bg-gray-800 cursor-pointer"
                                : "rounded-full p-2 hover:bg-[#EFF3F4] cursor-pointer"
                        }
                    >
                        <label
                            htmlFor="fileInput"
                            className="flex items-center space-x-2 cursor-pointer"
                        >
                            <IoImageOutline
                                size={19}
                                className="text-[#1D9BF0]"
                            />
                            <input
                                id="fileInput"
                                type="file"
                                onChange={handleChange}
                                accept="image/*"
                                className="hidden"
                            />
                        </label>
                    </div>
                    <div
                        className={
                            theme === "dark"
                                ? "rounded-full p-2 hover:bg-gray-800 cursor-pointer"
                                : "rounded-full p-2 hover:bg-[#EFF3F4] cursor-pointer"
                        }
                    >
                        <RiVideoLine size={20} className="text-[#1D9BF0]" />
                    </div>
                    <div
                        className={
                            theme === "dark"
                                ? "rounded-full p-2 hover:bg-gray-800 cursor-pointer"
                                : "rounded-full p-2 hover:bg-[#EFF3F4] cursor-pointer"
                        }
                    >
                        <TfiLayoutListThumb
                            size={19}
                            className="text-[#1D9BF0]"
                        />
                    </div>

                    <div
                        className={
                            theme === "dark"
                                ? "rounded-full p-2 hover:bg-gray-800 cursor-pointer"
                                : "rounded-full p-2 hover:bg-[#EFF3F4] cursor-pointer"
                        }
                    >
                        <FaRegFaceSmile size={19} className="text-[#1D9BF0]" />
                    </div>
                    <div
                        className={
                            theme === "dark"
                                ? "rounded-full p-2 hover:bg-gray-800 cursor-pointer"
                                : "rounded-full p-2 hover:bg-[#EFF3F4] cursor-pointer"
                        }
                    >
                        <BsCalendarDate className="text-[#1D9BF0]" />
                    </div>
                    <div
                        className={
                            theme === "dark"
                                ? "rounded-full p-2 hover:bg-gray-800 cursor-pointer"
                                : "rounded-full p-2 hover:bg-[#EFF3F4] cursor-pointer"
                        }
                    >
                        <GrLocation size={19} className="text-[#1D9BF0]" />
                    </div>
                </div>
                <div>
                    <button
                        className={
                            getInput.title !== ""
                                ? " bg-[#1D9BF0] px-5 py-[6px] rounded-full cursor-pointer font-semibold text-white"
                                : "bg-[#1D9BF0] px-5 py-[6px] rounded-full cursor-default font-bold opacity-50 text-white"
                        }
                        onClick={submit}
                        disabled={getInput.title === ""}
                    >
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Post;
