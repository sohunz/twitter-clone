import React from "react";

const Likes = () => {
    return (
        <div className="w-full">
            <div className="inline-flex flex-col mt-5 px-20 ml-10 ">
                <div className="">
                    <p className="text-3xl font-bold mb-3">
                        You don’t have any likes yet
                    </p>
                    <p className="text-gray-400">
                        Tap the heart on any post to show it some love. When you
                        do, it will show up here.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Likes;
