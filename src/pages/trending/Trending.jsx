import React from "react";
import TrendingNav from "./TrendingNav";
import { RiMoreLine } from "react-icons/ri";
import Trend from "./trend/Trend";
import People from "./people/People";

const Trending = () => {
    return (
        <div className="max-w-[350px] min-w-[350px] mb-5">
            <div className="a sticky z-50 top-0">
                <TrendingNav />
            </div>
            <div className="mt-7">
                <div className="rounded-2xl p-5 mt-3 bg-[#1E2732]">
                    <p className="text-xl font-bold mb-1">
                        Subscribe to Premium
                    </p>
                    <p className="mb-2">
                        Subscribe to unlock new features and if eligible,
                        receive a share of ads revenue.
                    </p>
                    <button className="bg-[#1D9BF0] px-5 py-[6px] rounded-full font-bold">
                        Subscribe
                    </button>
                </div>
                <div className="bg-[#1E2732] rounded-2xl py-5 mt-3 overflow-hidden">
                    <p className="text-xl mb-3 px-5 font-bold p-2">
                        Tranding for you
                    </p>
                    <Trend />
                    <p className="text-[#1D9BF0] text-md px-4 mt-4 cursor-pointer">
                        Show more
                    </p>
                </div>
                <div className="bg-[#1E2732] rounded-2xl py-5 mt-3 overflow-hidden">
                    <p className="text-xl mb-3 font-bold py-2 px-5">
                        Who to follow
                    </p>
                    <People />
                    <p className="text-[#1D9BF0] text-md px-5 mt-4 cursor-pointer">
                        Show more
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Trending;
