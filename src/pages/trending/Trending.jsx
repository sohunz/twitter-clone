import React from "react";
import TrendingNav from "./TrendingNav";
import { RiMoreLine } from "react-icons/ri";

const Trending = () => {
    return (
        <div className="max-w-[350px] min-w-[350px]">
            <div className="a sticky z-50 top-0">
                <TrendingNav />
            </div>
            <div className=" ">
                <div className="border rounded-2xl p-3 mt-3">
                    <p className="text-xl font-bold mb-1">
                        Subscribe to Premium
                    </p>
                    <p className="mb-2">
                        Subscribe to unlock new features and if eligible,
                        receive a share of ads revenue.
                    </p>
                    <button className="bg-[#1D9BF0] px-5 py-[6px] rounded-full font-bold">
                        Subscribe
                    </button>
                </div>
                <div className="border rounded-2xl py-2 mt-3 overflow-hidden">
                    <p className="text-xl mb-3 px-3 font-bold p-2">
                        Tranding for you
                    </p>
                    <ul>
                        <li className="flex justify-between hover:bg-gray-700 py-2 px-4">
                            <div>
                                <p className="text-gray-400 text-[13px]">
                                    Music Trending
                                </p>
                                <p>Travis Scott</p>
                                <p className="text-gray-400 text-[13px]">
                                    100K posts
                                </p>
                            </div>
                            <div>
                                <RiMoreLine size={18} />
                            </div>
                        </li>
                        <li className="flex justify-between hover:bg-gray-700 py-2 px-4">
                            <div>
                                <p className="text-gray-400 text-[13px]">
                                    Music Trending
                                </p>
                                <p>Travis Scott</p>
                                <p className="text-gray-400 text-[13px]">
                                    100K posts
                                </p>
                            </div>
                            <div>
                                <RiMoreLine size={18} />
                            </div>
                        </li>
                        <li className="flex justify-between hover:bg-gray-700 py-2 px-4">
                            <div>
                                <p className="text-gray-400 text-[13px]">
                                    Music Trending
                                </p>
                                <p>Travis Scott</p>
                                <p className="text-gray-400 text-[13px]">
                                    100K posts
                                </p>
                            </div>
                            <div>
                                <RiMoreLine size={18} />
                            </div>
                        </li>
                        <p className="text-[#1D9BF0] px-4 mt-4 cursor-pointer">
                            Show more
                        </p>
                    </ul>
                </div>
                <div className="border rounded-2xl py-2 mt-3 overflow-hidden">
                    <p className="text-xl mb-3 font-bold py-2 px-3">
                        Who to follow
                    </p>
                    <ul>
                        <li className="hover:bg-gray-700 py-4 px-3">
                            <div className="flex items-center justify-between">
                                <div className="flex gap-3">
                                    <div class="rounded-full overflow-hidden w-[40px] h-[40px]">
                                        <img
                                            src="https://qph.cf2.quoracdn.net/main-qimg-68d52a4c9747f85b66e6b385c1c707d2-lq"
                                            alt=""
                                            class="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p>Olivia Rodrigo</p>
                                        <p className="text-gray-400">@love</p>
                                    </div>
                                </div>
                                <div>
                                    <button className="text-sm px-5 py-2 rounded-full bg-white text-black">
                                        Follow
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li className="hover:bg-gray-700 py-4 px-3">
                            <div className="flex items-center justify-between">
                                <div className="flex gap-3">
                                    <div class="rounded-full overflow-hidden w-[40px] h-[40px]">
                                        <img
                                            src="https://qph.cf2.quoracdn.net/main-qimg-68d52a4c9747f85b66e6b385c1c707d2-lq"
                                            alt=""
                                            class="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p>Olivia Rodrigo</p>
                                        <p className="text-gray-400">@love</p>
                                    </div>
                                </div>
                                <div>
                                    <button className="text-sm px-5 py-2 rounded-full bg-white text-black">
                                        Follow
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li className="hover:bg-gray-700 py-4 px-3">
                            <div className="flex items-center justify-between">
                                <div className="flex gap-3">
                                    <div class="rounded-full overflow-hidden w-[40px] h-[40px]">
                                        <img
                                            src="https://qph.cf2.quoracdn.net/main-qimg-68d52a4c9747f85b66e6b385c1c707d2-lq"
                                            alt=""
                                            class="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p>Olivia Rodrigo</p>
                                        <p className="text-gray-400">@love</p>
                                    </div>
                                </div>
                                <div>
                                    <button className="text-sm px-5 py-2 rounded-full bg-white text-black">
                                        Follow
                                    </button>
                                </div>
                            </div>
                        </li>
                        <p className="text-[#1D9BF0] px-4 mt-4 cursor-pointer">
                            Show more
                        </p>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Trending;
