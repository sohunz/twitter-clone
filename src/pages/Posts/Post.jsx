import React from "react";
import { IoImageOutline } from "react-icons/io5";
import { TfiLayoutListThumb } from "react-icons/tfi";
import { FaRegFaceSmile } from "react-icons/fa6";
import { BsCalendarDate } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { RiVideoLine } from "react-icons/ri";

const Post = () => {
    return (
        <div className="border-gray-700 border-b">
            <div className="flex items-center gap-4 mt-5 ">
                <div class="rounded-full overflow-hidden w-[45px] h-[45px]">
                    <img
                        src="https://qph.cf2.quoracdn.net/main-qimg-68d52a4c9747f85b66e6b385c1c707d2-lq"
                        alt=""
                        class="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="What is happening?!"
                        className="bg-[#15202B] outline-none border-0 text-xl"
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
                    <p className=" bg-[#1D9BF0] px-5 py-[6px] rounded-full">
                        Post
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Post;
