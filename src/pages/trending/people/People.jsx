import React from "react";

const People = () => {
    return (
        <ul>
            <li className="hover:bg-gray-700 py-4 px-3">
                <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                        <div class="rounded-full overflow-hidden w-[40px] h-[40px]">
                            <img
                                src="https://qph.cf2.quoracdn.net/main-qimg-68d52a4c9747f85b66e6b385c1c707d2-lq"
                                alt=""
                                class="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <p>Olivia Rodrigo</p>
                            <p className="text-gray-400">@love</p>
                        </div>
                    </div>
                    <div>
                        <button className="text-sm px-5 py-2 rounded-full bg-white text-black">
                            Follow
                        </button>
                    </div>
                </div>
            </li>
        </ul>
    );
};

export default People;
