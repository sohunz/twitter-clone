import React from "react";

const Replies = () => {
    return (
        <div className="w-full">
            <div className="inline-flex flex-col mt-5 px-20 ml-10 ">
                <div className="">
                    <p className="text-3xl font-bold mb-3">
                        You haven't received any replies yet.
                    </p>
                    <p className="text-gray-400">
                        No replies yet. This section displays responses to your
                        posts. Start a conversation by replying to others or
                        sharing more thoughts!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Replies;
