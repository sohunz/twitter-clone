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
    const [getInput, setGetInput] = useState({ title: "", image: "" });

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
                setGetInput({ title: "", image: "" }); // Clear title and image after successful post
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
                        src="https://qph.cf2.quoracdn.net/main-qimg-68d52a4c9747f85b66e6b385c1c707d2-lq"
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
                <div className="flex items-center gap-5">
                    <label
                        htmlFor="fileInput"
                        className="flex items-center space-x-2 cursor-pointer"
                    >
                        <IoImageOutline size={19} className="text-[#1D9BF0]" />
                        <input
                            id="fileInput"
                            type="file"
                            onChange={handleChange}
                            accept="image/*"
                            className="hidden"
                        />
                    </label>

                    <RiVideoLine size={20} className="text-[#1D9BF0]" />
                    <TfiLayoutListThumb size={19} className="text-[#1D9BF0]" />
                    <FaRegFaceSmile size={19} className="text-[#1D9BF0]" />
                    <BsCalendarDate className="text-[#1D9BF0]" />
                    <GrLocation size={19} className="text-[#1D9BF0]" />
                </div>
                <div>
                    <p
                        className=" bg-[#1D9BF0] px-5 py-[6px] rounded-full cursor-pointer"
                        onClick={submit}
                    >
                        Post
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Post;
