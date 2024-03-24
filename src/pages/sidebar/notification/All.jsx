import React from "react";
import { RiMoreLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { PiDotLight } from "react-icons/pi";

const All = () => {
    return (
        <>
            <div className=" hover:bg-gray-800 py-5">
                <div className="px-5">
                    <div className="flex justify-between items-center px-2 duration-200  rounded-full cursor-pointer">
                        <div className="flex gap-3 items-start">
                            <div className="flex gap-3">
                                <div className="rounded-full overflow-hidden w-[45px] h-[45px]">
                                    <img
                                        src="https://qph.cf2.quoracdn.net/main-qimg-68d52a4c9747f85b66e6b385c1c707d2-lq"
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-bold text-[16px]">
                                        Olivia Rodrigo
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        @sohun
                                    </p>
                                </div>
                            </div>
                            <div className="pt-1">
                                <PiDotLight />
                            </div>

                            <div className="flex items-center">
                                <p className="pr-1">has liked you post </p>
                                <FaHeart
                                    color="#C0392B"
                                    className="pt-[4px]"
                                    size={20}
                                />
                                <div className="">
                                    <PiDotLight />
                                </div>
                                <p className="text-sm text-gray-500">2mn ago</p>
                            </div>
                        </div>
                        <div>
                            <RiMoreLine size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default All;
