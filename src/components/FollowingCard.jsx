import React, { useContext, useEffect, useState } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { PiDotLight } from "react-icons/pi";
import { IoChatboxOutline } from "react-icons/io5";
import { FaRetweet } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa6";
import DataContext from "../contexts/DataContext";
import { RiMoreLine } from "react-icons/ri";
import axios from "axios";

const FollowingCard = () => {
    const data = useContext(DataContext);
    const [posts, setPosts] = useState([]);
    const tweets = posts.reverse();
    const fetchPost = async () => {
        try {
            const response = await axios.get("http://localhost:8000/posts");
            setPosts(response.data);
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        fetchPost();
        console.log(posts);
    }, [data]);

    return (
        <div>
            {tweets.map((item) => {
                return (
                    <div
                        className="w-full flex gap-3 items-start border-gray-700 border-b pb-5 mt-5"
                        key={item.id}
                    >
                        <div className="rounded-full overflow-hidden w-[45px] min-w-[45px] h-[45px] min-h-[45px]">
                            <img
                                src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1711065600&semt=ais"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-full">
                            <div className="flex items-center gap-2">
                                <span className="flex items-center gap-1">
                                    <p className="font-bold text-[17px]">
                                        Twitter
                                    </p>
                                    <RiVerifiedBadgeFill
                                        size={18}
                                        className="text-[#1D9BF0]"
                                    />
                                </span>
                                <div className="flex items-center gap-0">
                                    <p className="text-gray-400">@Twitter</p>
                                    <div className="">
                                        <PiDotLight />
                                    </div>
                                    <p className="text-gray-400">1m</p>
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
                                            25K
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className=" cursor-pointer">
                            <RiMoreLine size={20} />
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default FollowingCard;

// import React, { useContext, useEffect, useState } from "react";
// import { RiVerifiedBadgeFill } from "react-icons/ri";
// import { PiDotLight } from "react-icons/pi";
// import { IoChatboxOutline } from "react-icons/io5";
// import { FaRetweet } from "react-icons/fa6";
// import { FaRegHeart } from "react-icons/fa";
// import { IoIosStats } from "react-icons/io";
// import { FaRegBookmark } from "react-icons/fa6";
// import DataContext from "../contexts/DataContext";
// import { RiMoreLine } from "react-icons/ri";

// const FollowingCard = () => {
//     const [posts, setPosts] = useState([]);

//     const data = useContext(DataContext);

//     useEffect(() => {
//         // Fetch data from the API
//         fetch("http://localhost:8000/posts")
//             .then((response) => response.json())
//             .then((data) => setPosts(data))
//             .catch((error) => console.error("Error fetching data:", error));
//         console.log("hello");
//     }, [data]);

//     return (
//         <div>
//             {posts.map((item) => {
//                 return (
//                     <div
//                         className="w-full flex gap-3 items-start border-gray-700 border-b pb-5 mt-5"
//                         key={item.id}
//                     >
//                         <div className="rounded-full overflow-hidden w-[45px] min-w-[45px] h-[45px] min-h-[45px]">
//                             <img
//                                 src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1711065600&semt=ais"
//                                 alt=""
//                                 className="w-full h-full object-cover"
//                             />
//                         </div>
//                         <div className="w-full">
//                             <div className="flex items-center gap-2">
//                                 <span className="flex items-center gap-1">
//                                     <p className="font-bold text-[17px]">
//                                         Twitter
//                                     </p>
//                                     <RiVerifiedBadgeFill
//                                         size={18}
//                                         className="text-[#1D9BF0]"
//                                     />
//                                 </span>
//                                 <div className="flex items-center gap-0">
//                                     <p className="text-gray-400">@Twitter</p>
//                                     <div className="">
//                                         <PiDotLight />
//                                     </div>
//                                     <p className="text-gray-400">1m</p>
//                                 </div>
//                             </div>
//                             <div>
//                                 <p className="text-gray-200">{item.title}</p>
//                                 <div className="rounded-2xl overflow-hidden mt-5 max-w-[538px] max-h-[660px]">
//                                     <img src={item.image} />
//                                 </div>
//                                 <div className="mt-5 flex items-center justify-between">
//                                     <div className="flex items-center gap-2">
//                                         <IoChatboxOutline
//                                             size={18}
//                                             className="text-gray-400"
//                                         />
//                                         <p className="text-[14px] text-gray-400">
//                                             450
//                                         </p>
//                                     </div>
//                                     <div className="flex items-center gap-2">
//                                         <FaRetweet
//                                             size={20}
//                                             className="text-gray-400"
//                                         />
//                                         <p className="text-[14px] text-gray-400">
//                                             123
//                                         </p>
//                                     </div>
//                                     <div className="flex items-center gap-2">
//                                         <FaRegHeart
//                                             size={16}
//                                             className="text-gray-400"
//                                         />
//                                         <p className="text-[14px] text-gray-400">
//                                             20K
//                                         </p>
//                                     </div>
//                                     <div className="flex items-center gap-2">
//                                         <IoIosStats
//                                             size={17}
//                                             className="text-gray-400"
//                                         />
//                                         <p className="text-[14px] text-gray-400">
//                                             120K
//                                         </p>
//                                     </div>
//                                     <div className="flex items-center gap-2">
//                                         <FaRegBookmark
//                                             size={16}
//                                             className="text-gray-400"
//                                         />
//                                         <p className="text-[14px] text-gray-400">
//                                             25K
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <span className=" cursor-pointer">
//                             <RiMoreLine size={20} />
//                         </span>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default FollowingCard;
