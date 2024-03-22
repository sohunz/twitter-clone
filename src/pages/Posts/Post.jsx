import React, { useContext, useState } from "react";
import { IoImageOutline } from "react-icons/io5";
import { TfiLayoutListThumb } from "react-icons/tfi";
import { FaRegFaceSmile } from "react-icons/fa6";
import { BsCalendarDate } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { RiVideoLine } from "react-icons/ri";
import axios from "axios";

const Post = () => {
    const [getInput, setGetInput] = useState({});

    const handleChange = (e) => {
        setGetInput({ title: e.target.value });
    };

    const submit = () => {
        axios.post("http://localhost:8000/posts", getInput);
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
                        onChange={handleChange} // Changed from onClick to onChange
                        value={getInput.title} // Controlled component: value is set to the state
                    />
                </div>
            </div>
            <div className="flex items-center justify-between py-5">
                <div className="flex items-center gap-5">
                    <IoImageOutline size={19} className="text-[#1D9BF0]" />
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
