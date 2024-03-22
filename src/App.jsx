import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Following from "./pages/following/Following";
import ForYou from "./pages/foryou/ForYou";
import DataProvider from "./contexts/DataProvider";

const App = () => {
    return (
        <DataProvider>
            <div className="w-full">
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route path="following" element={<Following />} />
                        <Route path="foryou" element={<ForYou />} />
                    </Route>
                </Routes>
            </div>
        </DataProvider>
    );
};

export default App;
