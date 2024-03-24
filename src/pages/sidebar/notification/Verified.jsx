import React from "react";

const Verified = () => {
    return (
        <div className="w-full mt-10">
            <div className="flex flex-col justify-center items-center">
                <div className="w-[60%]">
                    <img
                        src="https://abs.twimg.com/responsive-web/client-web/verification-check-800x400.v1.52677a99.png"
                        alt=""
                    />
                </div>
                <div className="w-[60%] mt-5">
                    <p className="text-3xl font-bold pb-1">
                        Nothing to see here yet
                    </p>
                    <p className="text-gray-500">
                        Likes, mentions, reposts, and a whole lot more — when it
                        comes from a verified account, you will find it here.{" "}
                        <span className="text-[#1D9BF0] underline cursor-pointer">
                            Learn more
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Verified;
