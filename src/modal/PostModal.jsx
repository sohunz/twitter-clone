import React from "react";

const PostModal = () => {
    return (
        <div className=" relative">
            <ul className="absolute right-0 rounded-lg bg-[#15202B] flex flex-col overflow-hidden">
                <li className="bg-gray-700 py-2 px-5">Edit</li>
                <li className="bg-gray-700 py-2 px-5">Delete</li>
            </ul>
        </div>
    );
};

export default PostModal;
