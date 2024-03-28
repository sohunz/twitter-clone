import React from "react";
import TrendingNav from "./TrendingNav";
import Trend from "./trend/Trend";
import People from "./people/People";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../../contexts/themes/ThemeContext";

const Trending = () => {
    const { theme } = useContext(ThemeContext);
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div
            className={
                theme === "dark"
                    ? "max-w-[350px] min-w-[350px] mb-5"
                    : "max-w-[350px] min-w-[350px] mb-5 bg-white text-black"
            }
        >
            <div className="a sticky z-50 top-0">
                <TrendingNav />
            </div>
            <div>
                <div
                    className={
                        theme === "dark"
                            ? "rounded-2xl p-5 mt-3 bg-[#1E2732]"
                            : "rounded-2xl p-5 mt-3 bg-[#F7F9F9] text-black"
                    }
                >
                    <p className="text-xl font-bold mb-1">
                        Subscribe to Premium
                    </p>
                    <p className="mb-5">
                        Subscribe to unlock new features and if eligible,
                        receive a share of ads revenue.
                    </p>
                    <Link
                        to="/premium"
                        className={
                            theme === "dark"
                                ? "bg-[#1D9BF0] px-5 py-[7px] rounded-full font-bold"
                                : "bg-black text-white px-5 py-[7px] rounded-full font-bold"
                        }
                        onClick={scrollToTop}
                    >
                        Subscribe
                    </Link>
                </div>
                <div
                    className={
                        theme == "dark"
                            ? "bg-[#1E2732] rounded-2xl py-5 mt-5 overflow-hidden"
                            : "bg-[#F7F9F9] text-black rounded-2xl py-5 mt-5 overflow-hidden"
                    }
                >
                    <p className="text-xl mb-3 px-5 font-bold p-2">
                        Tranding for you
                    </p>
                    <Trend />
                    <Link to="/explore" onClick={scrollToTop}>
                        <p className="text-[#1D9BF0] text-md px-5 mt-4 cursor-pointer">
                            Show more
                        </p>
                    </Link>
                </div>
                <div
                    className={
                        theme === "dark"
                            ? "bg-[#1E2732] rounded-2xl py-5 mt-5 overflow-hidden"
                            : "bg-[#F7F9F9] text-black rounded-2xl py-5 mt-5 overflow-hidden"
                    }
                >
                    <p className="text-xl mb-3 font-bold py-2 px-5">
                        Who to follow
                    </p>
                    <People />

                    <Link to="/profile" onClick={scrollToTop}>
                        <p className="text-[#1D9BF0] text-md px-5 mt-4 cursor-pointer">
                            Show more
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Trending;
