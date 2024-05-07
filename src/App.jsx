import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Following from "./pages/following/Following";
import ForYou from "./pages/foryou/ForYou";
import DataProvider from "./contexts/DataProvider";
import ToggleProvider from "./contexts/ToggleProvider";
import EditPost from "./pages/Posts/EditPost";
import Sidebar from "./pages/sidebar/Sidebar";
import Trending from "./pages/trending/Trending";
import Explore from "./pages/sidebar/explore/Explore";
import Feed from "./pages/feed/Feed";
import Notification from "./pages/sidebar/notification/Notification";
import Message from "./pages/sidebar/message/Message";
import List from "./pages/sidebar/list/List";
import Bookmark from "./pages/sidebar/bookmark/Bookmark";
import Community from "./pages/sidebar/community/Community";
import Premium from "./pages/sidebar/premium/Premium";
import Profile from "./pages/sidebar/profile/Profile";
import All from "./pages/sidebar/notification/All";
import Verified from "./pages/sidebar/notification/Verified";
import Mention from "./pages/sidebar/notification/Mention";
import MyProfile from "./pages/profile/MyProfile";
import Post from "./pages/profile/profile_pages/Posts";
import Articles from "./pages/profile/profile_pages/Articles";
import Highlights from "./pages/profile/profile_pages/Highlights";
import Likes from "./pages/profile/profile_pages/Likes";
import Media from "./pages/profile/profile_pages/Media";
import Replies from "./pages/profile/profile_pages/Replies";
import Setting from "./settings/Setting";

import ThemeContext from "./contexts/themes/ThemeContext";

const App = () => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    const [theme, setTheme] = useState(savedTheme);
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className={theme === "dark" ? "" : "bg-white text-black"}>
                <DataProvider>
                    <ToggleProvider>
                        <div className="max-w-[1280px] mx-auto flex">
                            <div className="max-w-[280px] flex-1">
                                <div className="sticky top-0">
                                    <Sidebar />
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex gap-8">
                                    <Routes>
                                        <Route path="/" element={<Feed />}>
                                            <Route
                                                index
                                                element={<Following />}
                                            />
                                            <Route
                                                path="following"
                                                element={<Following />}
                                            />
                                            <Route
                                                path="/following/:id"
                                                element={<EditPost />}
                                            />
                                            <Route
                                                path="foryou"
                                                element={<ForYou />}
                                            />
                                        </Route>
                                        <Route
                                            path="explore"
                                            element={<Explore />}
                                        />
                                        <Route
                                            path="notification"
                                            element={<Notification />}
                                        >
                                            <Route index element={<All />} />
                                            <Route
                                                path="all"
                                                element={<All />}
                                            />
                                            <Route
                                                path="verified"
                                                element={<Verified />}
                                            />
                                            <Route
                                                path="mention"
                                                element={<Mention />}
                                            />
                                        </Route>
                                        <Route
                                            path="message"
                                            element={<Message />}
                                        />
                                        <Route path="list" element={<List />} />
                                        <Route
                                            path="bookmark"
                                            element={<Bookmark />}
                                        />
                                        <Route
                                            path="community"
                                            element={<Community />}
                                        />
                                        <Route
                                            path="premium"
                                            element={<Premium />}
                                        />
                                        <Route
                                            path="profile"
                                            element={<Profile />}
                                        />
                                        <Route
                                            path="user"
                                            element={<MyProfile />}
                                        >
                                            <Route index element={<Post />} />
                                            <Route
                                                path="posts"
                                                element={<Post />}
                                            />
                                            <Route
                                                path="replies"
                                                element={<Replies />}
                                            />
                                            <Route
                                                path="highlights"
                                                element={<Highlights />}
                                            />
                                            <Route
                                                path="articles"
                                                element={<Articles />}
                                            />
                                            <Route
                                                path="media"
                                                element={<Media />}
                                            />
                                            <Route
                                                path="likes"
                                                element={<Likes />}
                                            />
                                        </Route>
                                        <Route
                                            path="setting"
                                            element={<Setting />}
                                        />
                                    </Routes>
                                    <Trending />
                                </div>
                            </div>
                        </div>
                    </ToggleProvider>
                </DataProvider>
            </div>
        </ThemeContext.Provider>
    );
};

export default App;
