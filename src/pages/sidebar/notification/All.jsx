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
                                        src="https://admin.itsnicethat.com/images/_fsej_vmVYPAz138de7knz6lEFA=/243516/format-webp%7Cwidth-1440/twitter-x-logo-graphic-design-itsnicethat-01.jpeg"
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-bold text-[16px]">
                                        Sohunz
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        @sohunz
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
