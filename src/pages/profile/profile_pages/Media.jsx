import React, { useEffect, useState } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { PiDotLight } from "react-icons/pi";
import { IoChatboxOutline } from "react-icons/io5";
import { FaRetweet } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa6";
import { RiMoreLine } from "react-icons/ri";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Media = () => {
    const [media, setMedia] = useState([]);

    const fetchMedia = async () => {
        try {
            const response = await axios.get("http://localhost:8000/posts");
            setMedia(response.data);
        } catch (err) {
            console.log("oop", err.message);
        }
    };

    useEffect(() => {
        fetchMedia();
        console.log("useEffect running...");
    }, []);

    console.log(media);

    const handleMedia = media.filter((item) => item.image !== "");

    return (
        // <div className="w-full">
        //     <div className="inline-flex flex-col mt-5 px-20 ml-10 ">
        //         <div className="">
        //             <p className="text-3xl font-bold mb-3">
        //                 Lights, camera … attachments!
        //             </p>
        //             <p className="text-gray-400">
        //                 When you post photos or videos, they will show up here.
        //             </p>
        //         </div>
        //     </div>
        // </div>
        <div>
            {handleMedia.map((item, index) => {
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
                                src="https://admin.itsnicethat.com/images/_fsej_vmVYPAz138de7knz6lEFA=/243516/format-webp%7Cwidth-1440/twitter-x-logo-graphic-design-itsnicethat-01.jpeg"
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
                                        Sohunz
                                    </p>
                                    <RiVerifiedBadgeFill
                                        size={18}
                                        className="text-[#1D9BF0]"
                                    />
                                </span>
                                <div className="flex items-center gap-0">
                                    <p className="text-gray-400">@sohunz</p>
                                    <div className="">
                                        <PiDotLight />
                                    </div>
                                    <p className="text-gray-400">
                                        {item.createDate}
                                    </p>
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
                                            27
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
                                    <div className="flex items-center gap-2">
                                        <FaHeart
                                            size={16}
                                            className={
                                                item.count > 0
                                                    ? "text-[#F91880]"
                                                    : "text-gray-400"
                                            }
                                        />
                                        <p
                                            className={
                                                item.count > 0
                                                    ? "text-[#F91880]"
                                                    : "text-gray-400"
                                            }
                                        >
                                            {item.count}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <IoIosStats
                                            size={17}
                                            className="text-gray-400"
                                        />
                                        <p className="text-[14px] text-gray-400">
                                            2,5K
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaRegBookmark
                                            size={16}
                                            className="text-gray-400"
                                        />
                                        <p className="text-[14px] text-gray-400">
                                            67
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
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default Media;
