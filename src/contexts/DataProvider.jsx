import React, { useState } from "react";
import DataContext from "./DataContext";
import db from "../../data/db.json";

const DataProvider = ({ children }) => {
    const [data, setData] = useState(db);
    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
