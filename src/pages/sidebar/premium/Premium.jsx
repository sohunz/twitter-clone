// import React, { useState } from "react";
// import PremiumNav from "./PremiumNav";

// const Explore = () => {
//     // State to track which box is selected
//     const [selectedBox, setSelectedBox] = useState("individual");

//     // Function to handle box selection
//     const handleBoxClick = (box) => {
//         setSelectedBox(box);
//     };

//     return (
//         <div className="w-full border-gray-700 border-r text-center ">
//             <div className="sticky z-50 top-0">
//                 <PremiumNav />
//             </div>
//             <div className="m-7 px-10 py-10 bg-[#232a34] rounded-2xl">
//                 <p className="font-bold text-3xl">Who are you</p>
//                 <p className="mt-6 mb-8">
//                     Choose the right subscription for you
//                 </p>
//                 <div>
//                     <div className="flex flex-row justify-center gap-5">
//                         <div
//                             className={`w-[50%] bg-[#2a323d] rounded-xl p-5 text-left ${
//                                 selectedBox === "individual"
//                                     ? "border-blue-500 border"
//                                     : ""
//                             }`}
//                             onClick={() => handleBoxClick("individual")}
//                         >
//                             <p className="text-gray-400">Premium</p>
//                             <p className="py-1 font-bold text-lg">
//                                 I am an individual
//                             </p>
//                             <p className="text-[13px] text-gray-400">
//                                 For individuals and creators
//                             </p>
//                         </div>
//                         <div
//                             className={`bg-[#2a323d] rounded-xl w-[50%] p-5 text-left ${
//                                 selectedBox === "organization"
//                                     ? "border-blue-500 border"
//                                     : ""
//                             }`}
//                             onClick={() => handleBoxClick("organization")}
//                         >
//                             <p className="text-gray-400">
//                                 Verified Organization
//                             </p>
//                             <p className="py-1 font-bold text-lg">
//                                 I am an organization
//                             </p>
//                             <p className="text-[13px] text-gray-400">
//                                 For businesses, government, agencies, and
//                                 non-profits
//                             </p>
//                         </div>
//                     </div>
//                     <button className="border my-10 w-full py-3 rounded-full bg-white text-black">
//                         <p className="font-bold text-md">Subscribe</p>
//                     </button>
//                     <p>
//                         Learn more about{" "}
//                         <span className="text-[#1D9BF0]">Premium</span> and{" "}
//                         <span className="text-[#1D9BF0]">
//                             Verified Organizations
//                         </span>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Explore;

import React, { useContext, useState } from "react";
import PremiumNav from "./PremiumNav";
import ThemeContext from "../../../contexts/themes/ThemeContext";

const Explore = () => {
    // State to track which box is selected
    const [selectedBox, setSelectedBox] = useState("individual");

    // Function to handle box selection
    const handleBoxClick = (box) => {
        setSelectedBox(box);
    };

    const { theme } = useContext(ThemeContext);

    return (
        <div
            className={
                theme === "dark"
                    ? "w-full border-gray-700 border-r"
                    : "w-full border-gray-200 border-r"
            }
        >
            <div className="sticky z-50 top-0">
                <PremiumNav />
            </div>
            <div
                className={
                    theme === "dark"
                        ? "m-7 px-10 py-10 bg-[#232a34] rounded-2xl text-center"
                        : "m-7 px-10 py-10 bg-[#F7F9F9] rounded-2xl text-center"
                }
            >
                <p className="font-bold text-3xl">Who are you</p>
                <p className="mt-6 mb-8">
                    Choose the right subscription for you
                </p>
                <div>
                    <div className="flex flex-row justify-center gap-5">
                        <div
                            className={`w-[50%] ${
                                theme === "dark"
                                    ? "bg-[#2a323d]"
                                    : "bg-gray-200"
                            } rounded-xl p-5 text-left ${
                                selectedBox === "individual"
                                    ? "outline-[#1D9BF0] outline cursor-pointer"
                                    : "cursor-pointer"
                            }`}
                            onClick={() => handleBoxClick("individual")}
                        >
                            <p className="text-gray-400">Premium</p>
                            <p className="py-1 font-bold text-lg">
                                I am an individual
                            </p>
                            <p className="text-[13px] text-gray-400">
                                For individuals and creators
                            </p>
                        </div>
                        <div
                            className={`${
                                theme === "dark"
                                    ? "bg-[#2a323d]"
                                    : "bg-gray-200"
                            } rounded-xl w-[50%] p-5 text-left ${
                                selectedBox === "organization"
                                    ? "outline-[#1D9BF0] outline cursor-pointer"
                                    : "cursor-pointer"
                            }`}
                            onClick={() => handleBoxClick("organization")}
                        >
                            <p className="text-gray-400">
                                Verified Organization
                            </p>
                            <p className="py-1 font-bold text-lg">
                                I am an organization
                            </p>
                            <p className="text-[13px] text-gray-400">
                                For businesses, government, agencies, and
                                non-profits
                            </p>
                        </div>
                    </div>
                    <button
                        className={
                            theme === "dark"
                                ? "border my-10 w-full py-3 rounded-full bg-white text-black"
                                : "border my-10 w-full py-3 rounded-full bg-black text-white"
                        }
                    >
                        <p className="font-bold text-md">Subscribe</p>
                    </button>
                    <p>
                        Learn more about{" "}
                        <span className="text-[#1D9BF0]">Premium</span> and{" "}
                        <span className="text-[#1D9BF0]">
                            Verified Organizations
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Explore;
