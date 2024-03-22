import React, { useContext } from "react";
import { RiMoreLine } from "react-icons/ri";
import DataContext from "../../../contexts/DataContext";

const Trend = () => {
    const data = useContext(DataContext);
    const trend = data.data.trending;
    return (
        <ul>
            {trend.map((item) => {
                return (
                    <li className="flex justify-between items-start hover:bg-gray-700 py-2 px-4">
                        <div>
                            <p className="text-gray-400 text-[13px]">
                                {item.category}
                            </p>
                            <p className="font-bold">{item.title}</p>
                            <p className="text-gray-400 text-[13px]">
                                {item.post} posts
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
