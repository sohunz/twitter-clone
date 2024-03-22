import React, { useContext } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { PiDotLight } from "react-icons/pi";
import { IoChatboxOutline } from "react-icons/io5";
import { FaRetweet } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa6";
import DataContext from "../contexts/DataContext";
import { RiMoreLine } from "react-icons/ri";

const FollowingCard = () => {
    const data = useContext(DataContext);
    const result = data.data.posts;
    const posts = result.reverse();

    return (
        <div>
            {posts.map((item) => {
                return (
                    <div
                        className="w-full flex gap-3 items-start border-gray-700 border-b pb-5 mt-5"
                        key={item.id}
                    >
                        <div className="rounded-full overflow-hidden w-[45px] min-w-[45px] h-[45px] min-h-[45px]">
                            <img
                                src="https://qph.cf2.quoracdn.net/main-qimg-68d52a4c9747f85b66e6b385c1c707d2-lq"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-full">
                            <div className="flex items-center gap-2">
                                <span className="flex items-center gap-1">
                                    <p className="font-bold">Twitter</p>
                                    <RiVerifiedBadgeFill
                                        size={18}
                                        className="text-[#1D9BF0]"
                                    />
                                </span>
                                <div className="flex items-center gap-0">
                                    <p className="text-gray-400">@twitter</p>
                                    <div className="">
                                        <PiDotLight />
                                    </div>
                                    <p className="text-gray-400">June 23</p>
                                </div>
                            </div>
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
                                            450
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
                                        <FaRegHeart
                                            size={16}
                                            className="text-gray-400"
                                        />
                                        <p className="text-[14px] text-gray-400">
                                            20K
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <IoIosStats
                                            size={17}
                                            className="text-gray-400"
                                        />
                                        <p className="text-[14px] text-gray-400">
                                            120K
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaRegBookmark
                                            size={16}
                                            className="text-gray-400"
                                        />
                                        <p className="text-[14px] text-gray-400">
                                            120K
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <RiMoreLine size={20} />
                    </div>
                );
            })}
        </div>
    );
};

export default FollowingCard;
