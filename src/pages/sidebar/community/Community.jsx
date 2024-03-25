import React from "react";
import CommunityNav from "./CommunityNav";
import { RiMoreLine } from "react-icons/ri";

const Explore = () => {
    return (
        <div className="w-full border-gray-700 border-r">
            <div className="sticky z-50 top-0">
                <CommunityNav />
            </div>
            <div>
                <p className="px-5 mt-5 font-bold text-xl mb-10">
                    Discover Communities
                </p>
                <div className="px-5 flex justify-between hover:bg-[#1E2732] py-4">
                    <div className="flex gap-5">
                        <div className=" rounded-xl overflow-hidden w-[100px] h-[100px]">
                            <img
                                src="https://qph.cf2.quoracdn.net/main-qimg-68d52a4c9747f85b66e6b385c1c707d2-lq"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-between">
                            <div>
                                <p className="font-bold">Olivia Rodrigo</p>
                                <p className="text-sm">
                                    40K{" "}
                                    <span className="text-gray-400">
                                        Members
                                    </span>
                                </p>
                            </div>
                            <div className="inline-flex">
                                <p className=" bg-[#1D9BF0] px-5 py-1 text-sm rounded-full cursor-pointer">
                                    Join
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-1">
                        <RiMoreLine size={18} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;
