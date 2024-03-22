import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Following from "./pages/following/Following";
import ForYou from "./pages/foryou/ForYou";
import DataProvider from "./contexts/DataProvider";
import ToggleProvider from "./contexts/ToggleProvider";
import EditPost from "./pages/Posts/EditPost";

const App = () => {
    return (
        <DataProvider>
            <ToggleProvider>
                <div className="w-full">
                    <Routes>
                        <Route path="/" element={<Home />}>
                            <Route path="following" element={<Following />} />
                            <Route
                                path="/following/:id"
                                element={<EditPost />}
                            />
                            <Route path="foryou" element={<ForYou />} />
                        </Route>
                    </Routes>
                </div>
            </ToggleProvider>
        </DataProvider>
    );
};

export default App;
