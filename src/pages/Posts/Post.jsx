import React, { useState } from "react";
import { IoImageOutline } from "react-icons/io5";
import { TfiLayoutListThumb } from "react-icons/tfi";
import { FaRegFaceSmile } from "react-icons/fa6";
import { BsCalendarDate } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { RiVideoLine } from "react-icons/ri";
import axios from "axios";
import Resizer from "react-image-file-resizer";

const Post = () => {
    const [getInput, setGetInput] = useState({
        title: "",
        image: "",
        count: 0,
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
                setGetInput({ title: "", image: "", count: 0, isLiked: false }); // Clear title and image after successful post
            })
            .catch((error) => {
                console.error("Error submitting post:", error);
            });
    };

    return (
        <div className="border-gray-700 border-b">
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
                        className="bg-[#15202B] outline-none border-0 text-xl"
                        onChange={handleChange}
                        value={getInput.title}
                    />
                </div>
            </div>
            <div className="flex items-center justify-between py-5">
                <div className="flex items-center gap-1">
                    <div className="rounded-full p-2 hover:bg-gray-800 cursor-pointer">
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

                    <div className="rounded-full p-2 hover:bg-gray-800 cursor-pointer">
                        <RiVideoLine size={20} className="text-[#1D9BF0]" />
                    </div>
                    <div className="rounded-full p-2 hover:bg-gray-800 cursor-pointer">
                        <TfiLayoutListThumb
                            size={19}
                            className="text-[#1D9BF0]"
                        />
                    </div>
                    <div className="rounded-full p-2 hover:bg-gray-800 cursor-pointer">
                        <FaRegFaceSmile size={19} className="text-[#1D9BF0]" />
                    </div>
                    <div className="rounded-full p-2 hover:bg-gray-800 cursor-pointer">
                        <BsCalendarDate className="text-[#1D9BF0]" />
                    </div>
                    <div className="rounded-full p-2 hover:bg-gray-800 cursor-pointer">
                        <GrLocation size={19} className="text-[#1D9BF0]" />
                    </div>
                </div>
                <div>
                    <button
                        className={
                            getInput.title !== ""
                                ? " bg-[#1D9BF0] px-5 py-[6px] rounded-full cursor-pointer font-semibold"
                                : "bg-[#1D9BF0] px-5 py-[6px] rounded-full cursor-default font-semibold opacity-50"
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
