import React from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { PiDotLight } from "react-icons/pi";
import { IoChatboxOutline } from "react-icons/io5";
import { FaRetweet } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa6";

const Following = () => {
    return (
        <div className="mt-5 border-gray-700 border-b pb-5">
            <div className="flex gap-3 items-start">
                <div class="rounded-full overflow-hidden w-[45px] min-w-[45px] h-[45px] min-h-[45px]">
                    <img
                        src="https://qph.cf2.quoracdn.net/main-qimg-68d52a4c9747f85b66e6b385c1c707d2-lq"
                        alt=""
                        class="w-full h-full object-cover"
                    />
                </div>
                <div className="">
                    <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1">
                            <p className="font-bold">Gracie Abrams</p>
                            <RiVerifiedBadgeFill
                                size={18}
                                className="text-[#1D9BF0]"
                            />
                        </span>
                        <div className="flex items-center gap-0">
                            <p className="text-gray-400">@GracieAbrams</p>
                            <div className="">
                                <PiDotLight />
                            </div>
                            <p className="text-gray-400">Jan 23</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-200">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci eum nostrum distinctio et illum
                            deserunt molestiae, est, dolore consequatur totam
                            sed sunt iure voluptatem numquam fuga! Ratione quo
                        </p>
                        <div className="rounded-2xl overflow-hidden mt-5 max-w-[538px] max-h-[660px]">
                            <img
                                src="https://www.coupdemainmagazine.com/sites/default/files/styles/hero_image/public/article/19472/hero-19472-490933394.jpg?itok=OL8vUk6I"
                                alt=""
                            />
                        </div>
                        <div className="mt-5 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <IoChatboxOutline
                                    size={18}
                                    className="text-gray-400"
                                />
                                <p className="text-[14px] text-gray-400">450</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaRetweet
                                    size={20}
                                    className="text-gray-400"
                                />
                                <p className="text-[14px] text-gray-400">123</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaRegHeart
                                    size={16}
                                    className="text-gray-400"
                                />
                                <p className="text-[14px] text-gray-400">20K</p>
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
            </div>
        </div>
    );
};

export default Following;
