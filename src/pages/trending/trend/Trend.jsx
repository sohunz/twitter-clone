import React, { useContext } from "react";
import { RiMoreLine } from "react-icons/ri";
import DataContext from "../../../contexts/DataContext";

const Trend = () => {
    const data = useContext(DataContext);
    const trend = data.data.trending;
    return (
        <ul className="">
            {trend.map((item) => {
                return (
                    <li
                        className="flex justify-between items-start hover:bg-[#2a323d] py-2 px-5 cursor-pointer duration-200"
                        key={item.id}
                    >
                        <div key={item.id}>
                            <p className="text-gray-400 text-[13px]">
                                {item.category}
                            </p>
                            <p className="font-bold text-gray-200">
                                {item.title}
                            </p>
                            <p className="text-gray-400 text-[13px]">
                                {item.posts} posts
                            </p>
                        </div>
                        <div className="pt-1">
                            <RiMoreLine size={18} />
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default Trend;
