import React, { useContext } from "react";
import DataContext from "../../../contexts/DataContext";

const People = () => {
    const data = useContext(DataContext);
    const peoples = data.data.peoples;

    return (
        <ul>
            {peoples.map((item) => {
                return (
                    <li className="hover:bg-gray-700 py-4 px-3" key={item.id}>
                        <div className="flex items-center justify-between">
                            <div className="flex gap-3">
                                <div className="rounded-full overflow-hidden w-[40px] h-[40px]">
                                    <img
                                        src="https://pbs.twimg.com/profile_images/634514155261833216/czgYrPLQ_400x400.jpg"
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-bold">{item.name}</p>
                                    <p className="text-gray-400">
                                        @{item.username}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <button className="text-sm px-5 py-2 rounded-full bg-white text-black">
                                    Follow
                                </button>
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default People;
