import React from "react";
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

const App = () => {
    return (
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
                                        path="following"
                                        element={<Following />}
                                    />
                                    <Route
                                        path="/following/:id"
                                        element={<EditPost />}
                                    />
                                    <Route path="foryou" element={<ForYou />} />
                                </Route>
                                <Route path="explore" element={<Explore />} />
                                <Route
                                    path="notification"
                                    element={<Notification />}
                                />
                                <Route path="message" element={<Message />} />
                                <Route path="list" element={<List />} />
                                <Route path="bookmark" element={<Bookmark />} />
                                <Route
                                    path="community"
                                    element={<Community />}
                                />
                                <Route path="premium" element={<Premium />} />
                                <Route path="profile" element={<Profile />} />
                            </Routes>
                            <Trending />
                        </div>
                    </div>
                </div>
            </ToggleProvider>
        </DataProvider>
    );
};

export default App;
